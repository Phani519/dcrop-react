import Header from "./header";
import  Footer from "./footer";
function Home() {
  return (
    <body style={{"position": "fixed","width": "100%","height": "100"}}>
    <div>
        <Header/>
        <div className="bg-white pt-10">
        <h1 className="card-title" style={{"font-size":"24px","font-weight":"bold","textAlign":"center","padding-top":"5px"}}>Identify Your Crop Disease For Free</h1>
        <img className="card-img-top" src="./logo.jpg" alt="Card Logo" style={{"width":"20%","display":"block","margin": "auto"}}/>
        <p className="card-text" style={{"textAlign":"center"}}>You can upload an image of your crop(Banana) and check what kind of disease it has</p><br/>
        <a href="/detect" className="btn bg-lime-800 btn-success" style={{"width":"10%","display":"block","margin": "auto"}}>Try it</a>
        </div>
        <div className="pt-20 pb-3">
          <Footer/>
        </div>
    </div>
    </body>
  );
}

export default Home;