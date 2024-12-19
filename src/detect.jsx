import React, { useRef, useState } from 'react';
import axios from 'axios';
import CLASSNAMES from './Classes';

function Detect() {
    const [image, setImage] = useState(null);
    const [prediction, setPrediction] = useState(null);
    const [isLoading, setIsLoading] = useState(false); // State to track loading state
    const hiddenFileInput = useRef(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imgname = file.name;
            const reader = new FileReader();
            reader.onload = () => {
                const img = new Image();
                img.onload = () => {
                    const maxSize = Math.max(img.width, img.height);
                    const canvas = document.createElement("canvas");
                    canvas.width = maxSize;
                    canvas.height = maxSize;
                    const ctx = canvas.getContext("2d");
                    ctx.drawImage(
                        img,
                        (maxSize - img.width) / 2,
                        (maxSize - img.height) / 2
                    );
                    canvas.toBlob(
                        (blob) => {
                            const processedFile = new File([blob], imgname, {
                                type: "image/jpeg",
                                lastModified: Date.now(),
                            });
                            setImage(processedFile);
                        },
                        "image/jpeg",
                        0.8
                    );
                };
                img.src = reader.result;
            };
            reader.readAsDataURL(file);
        }
    };

    const handleUploadButtonClick = () => {
        if (image) {
            setIsLoading(true); // Set loading state to true
            let formData = new FormData();
            formData.append("image", image);

            axios.post("http://127.0.0.1:8000/predict", formData)
                .then(response => {
                    setPrediction(response.data); // Update prediction state
                })
                .catch(error => {
                    console.log(error.toJSON());
                    // Handle error here
                })
                .finally(() => {
                    setIsLoading(false); // Set loading state to false
                });
        }
    };

    const handleClick = () => {
        hiddenFileInput.current.click();
    };
    return (
        <div className='flex'>
            <div className="card" style={{ "width": "100%","padding":"80px 50px 50px" }}>
                <div onClick={handleClick} style={{"width":"15%","display":"block","margin": "auto","cursor": "pointer" }}>
                    {image ? (
                        <img src={URL.createObjectURL(image)} alt="upload" className="card-img-top" />
                    ) : (
                        <img src="./image.png" alt="upload" className="card-img-top" />
                    )}
                    <input
                        id="image-upload-input"
                        type="file"
                        name="image"
                        onChange={handleImageChange}
                        ref={hiddenFileInput}
                        style={{ display: "none" }}
                    />
                </div><br/>
                <p style={{"text-align":"center"}}>Click on icon to upload an image</p>
                <div className="card-body">
                    <span style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "20px" }}>
                        <button type="button" className="btn btn-success bg-lime-800" onClick={handleUploadButtonClick} disabled={isLoading}>
                            {isLoading ? 'Uploading...' : 'Upload'}
                        </button>
                        {isLoading && <div className="spinner-border ml-2" role="status"></div>} {/* Buffering animation */}
                    </span>
                </div>
                <div style={{"border":"3px solid green","padding":"5px 5px 5px"}}>
                    <p><b>Note:</b>Please ensure the image of your plant is as clear as possible, and avoid being too far or too close.</p>
                </div>
            </div>
            {prediction && (
                <div className='pl-10'>
                    <div className="card" style={{"width": "18rem"}}>
                    <img className="card-img-top" src={CLASSNAMES[prediction.class][0]} alt="Card image cap"/>
                    <div className="card-body">
                    <p className="card-text" style={{"textAlign":"center","fontSize":"18px"}}>Disease - {prediction.class}</p>
                    <p className='card-text' style={{"textAlign":"center"}}>Cure: {CLASSNAMES[prediction.class][1]}</p>
                    </div>
                </div>
                </div>
            )}
        </div>
    );
}

export default Detect;
