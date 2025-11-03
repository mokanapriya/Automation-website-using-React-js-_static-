import './App.css';
import Header from './Component/Header';
import ContactUs from './Component/ContactUs';
import Home from './Component/Home';
import Infrastructure from './Component/Infrastructure';
import OurProduct from './Component/OurProduct';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './Component/Footer';
import About from './Component/About';
import Ourservice from './Component/Ourservice';
import Machinery from './Component/Machinery';
import QualityPolicy from './Component/QualityPolicy';

function App() {
  return (
    
    <BrowserRouter> 
      <div className="App">
        <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Infrastructure" element={<Infrastructure />} /> 
          <Route path="/OurProduct" element={<OurProduct />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/Ourservice" element={<Ourservice />} /> 
          <Route path="/MachineryDetails" element={<Machinery />} /> 
          <Route path="/QualityPolicy" element={<QualityPolicy />} /> 
        </Routes>
        <Footer/>
        </>
      </div>
    </BrowserRouter>
    
  );
}

export default App;

// import './App.css';
// import Header from './Component/header';
// import ContactUs from './Component/contactus'; 
// import Home from './Component/Home';
// import Infrastructure from './Component/Infrastructure';
// import OurProduct from'./Component/OurProduct';
// import { BrowserRouter , Route, Routes} from "react-router-dom";

// function App() {
//   return (
//     <BrowserRouter> 
//     <div className="App">
//         <Header/>
       
//         <Routes>
//         <Route path="/" element={<Home/>} />
//           <Route path="/Home" element={<Home/>} />
//           <Route path="/contactus" element={<ContactUs/>} />
//           <Route path="/Infrastructure" element={<Infrastructure />} /> 
//           <Route path="/OurProduct" element={<OurProduct />} /> 

//         </Routes>
        
//     </div>
//     </BrowserRouter>
//   );
// }

// export default App;

