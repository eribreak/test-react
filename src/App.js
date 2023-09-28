import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import Details from "./component/Details";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Home from "./component/Home";
import Page404 from "./component/Page404";


const App = () => {

  return (
    <BrowserRouter>
      <div>
        <div className="container-fluid">
          <div className="row">
            <Header/>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/details" element={<Details/>}/>
          <Route path="*" element={<Page404/>}/>
        </Routes>
        <div className="container-fluid">
          <div className="row">
            <Footer/>
          </div>
        </div>
      </div>

    </BrowserRouter>
  )
}



export default App;