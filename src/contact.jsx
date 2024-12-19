import Header from "./header";
import  Footer from "./footer";
function Contact() {
  return (
    <div>
        <Header/>
        <div className="bg-white">
        <div className='flex pt-10 pl-20 pr-30'>
            <div className="card" style={{ "width": "90%","padding":"80px 50px 30px" }}>
              <p style={{"font-size":"200%","padding":"3px 100px 50px"}}><b>Want to ask the question?</b></p>
                <p className="flex flex-wrap" style={{"padding-left":"500px","font-size":"150%"}}>
                <img className="card-img-top" src="./woman.png" alt="woman" style={{"width":"3%"}}/>
                <b>Akanksha Balli</b>
                </p>
                <p className="flex flex-wrap" style={{"padding-left":"600px","padding-top":"10px"}}>
                <img className="card-img-top" src="./mail.png" alt="mail" style={{"width":"2%"}}/>
                Akanksha@gmail.com</p>
                <p className="flex flex-wrap" style={{"padding-left":"500px","font-size":"150%","padding-top":"15px"}}>
                <img className="card-img-top" src="./woman.png" alt="woman" style={{"width":"3%"}}/>
                <b>Varshitha Bantupalli</b></p>
                <p className="flex flex-wrap" style={{"padding-left":"600px","padding-top":"10px"}}>
                <img className="card-img-top" src="./mail.png" alt="mail" style={{"width":"2%"}}/>
                 Varshitha@gmail.com</p>
                 <p className="flex flex-wrap" style={{"padding-left":"500px","font-size":"150%","padding-top":"15px"}}>
                <img className="card-img-top" src="./man.png" alt="woman" style={{"width":"3%"}}/>
                <b>David Joshua Raj G </b>
                </p>
                <p className="flex flex-wrap" style={{"padding-left":"600px","padding-top":"10px"}}>
                <img className="card-img-top" src="./mail.png" alt="mail" style={{"width":"2%"}}/>
                David@gmail.com</p>
                <p className="flex flex-wrap" style={{"padding-left":"500px","font-size":"150%","padding-top":"15px"}}>
                <img className="card-img-top" src="./man.png" alt="woman" style={{"width":"3%"}}/>
                <b>Phanendra Adari</b></p>
                <p className="flex flex-wrap" style={{"padding-left":"600px","padding-top":"10px"}}>
                <img className="card-img-top" src="./mail.png" alt="mail" style={{"width":"2%"}}/>
                 Phani@gmail.com</p>
            </div>
        </div >
        </div>
        <div className="pt-8 pb-3">
          <Footer/>
        </div>
    </div>
  );
}

export default Contact;