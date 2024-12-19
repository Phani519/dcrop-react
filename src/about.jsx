import Header from "./header";
import  Footer from "./footer";
import AbdA from "./assets/abdA";
import AbdB from "./assets/abdB";
import AbdC from "./assets/abdC";
import AbdD from "./assets/abdD";
import AbdE from "./assets/abdE";import AbdF from "./assets/abdF";
;
function About() {
  return (
    <div>
        <Header/>
        <div className='flex pt-5 pl-20 pr-20'>
            <div className="card pt-5 pl-1" style={{ "width": "70%","padding":"80px 50px 50px" }}>
                <p style={{"text-align":"center","font-size":"130%"}}><b>AI-Powered Crop Disease Identifier</b></p><br/>
                <hr style={{"width":"50%","border":"3px solid green"}}/><br/>
                <p>
                 This project was designed for farmers that trained machine learning models for the Crop disease identification in photos. 
                 We improve the identification process and results by using CNN technology and the collection of more than one hundred thousands plant photos.
                </p>
             </div>    
             <div className="card" style={{"width":"18rem"}}>
                <img className="card-image-top" src="../ab1.jpg" alt="About1"/>
             </div>
        </div>
        <div className='flex pt-5 pl-20 pr-20'>
             <div className="card" style={{"width":"18rem"}}>
                <img className="card-image-top" src="../ab2.jpg" alt="About1"/>
             </div>
            <div className="card pt-5 pl-1" style={{ "width": "70%","padding":"80px 150px 100px" }}>
                <p style={{"text-align":"center","font-size":"130%"}}><b>This Project is only developed on Banana Crop</b></p><br/>
                <hr style={{"width":"50%","border":"3px solid green"}}/><br/>
                <p>
                 Banana, scientifically known as Musa, is one of the most important fruit crops globally.
                 Bananas and plantains are a major staple food crop for millions of people in developing countries.
                 It is a very popular fruit due to its low price and high nutritive value. It is consumed in fresh or cooked form both as ripe and raw fruit.
                 Banana fibre is used to make items like bags, pots and wall hangers. Rope and good quality paper can be prepared from banana waste. Banana leaves are used as healthy and hygienic eating plates.
                 India leads the world in banana production with an annual output of about 14.2 million tonnes.
                </p>
             </div>    
        </div>  
        <div className='flex pt-5 pl-20 pr-20'>
          <div className="card pt-5 pl-1" style={{ "width": "91%","padding":"20px 150px 1px" }}>
                <p>
                Farmers should be aware of potential pests and diseases that can harm their plants.
                Crop diseases are processes that occur in a plant under the influence of various causes, from pathogens to adverse environmental conditions.
                </p><br/>
                <p style={{"text-align":"center","font-size":"130%"}}><b>What are common Banana Crop Disease?</b></p><br/>
          </div>   
        </div>
        <div className="flex pt-5 pl-20 pr-20">
                <div className="flex flex-wrap pt-8 pl-10 pr-10">
                  <div className="w-1/3 p-5"><AbdA/></div>
                  <div className="w-1/3 p-5"><AbdB/></div>
                  <div className="w-1/3 p-5"><AbdC/></div>
                  <div className="w-1/3 p-5"><AbdD/></div>
                  <div className="w-1/3 p-5"><AbdE/></div>
                  <div className="w-1/3 p-5"><AbdF/></div>
                </div>
        </div>
        <div className="pt-20 pb-3">
          <Footer/>
        </div> 
    </div>
  );
}

export default About;