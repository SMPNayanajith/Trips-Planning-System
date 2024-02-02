import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
//import NavBar from './component/NavBar/NavBar';
import Home from './component/Home/Home';
import Service from './component/Service/Service'
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import SignUp from './component/SignUp/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
  
        <BrowserRouter>
         <Routes>
            <Route exact path="/" element={<Home />} />
            <Route  path="/About" element={<About />} />
            <Route  path="/Service" element={<Service />} />
            <Route  path="/Contact" element={<Contact />} />
            <Route  path="/SignUp" element={<SignUp />} />
           
         </Routes>
        </BrowserRouter>
      
      
    </div>
  );
}

export default App;
