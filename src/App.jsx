import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './home';
import Contact from './contact';
import About from './about';
import Detective from './detective';
function App() {
  return (
    <div>
        <HashRouter>
          <Routes>
            <Route index element = {<Home/>} />
            <Route path="/home" element = {<Home/>} />
            <Route path="/about" element = {<About/>} />
            <Route path="/contact" element = {<Contact/>} />
            <Route path="/detect" element = {<Detective/>} />
          </Routes>
        </HashRouter>
    </div>
  );
}

export default App;
