import Detect from "./detect";
import Header from "./header";
import Footer from "./footer";

function Detective(){
    return (
        <div>
            <Header/>
            <div className="bg-white">
                <div className="flex justify-center pt-10">
                    <Detect /> 
                </div>
                <div className="pt-20 pb-3">
                  <Footer/>
                </div>
            </div>
        </div>
      );
}

export default Detective;