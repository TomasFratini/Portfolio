import Nav from "./components/Nav";
import Proyectos from "./components/presentacion/Proyectos";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/presentacion/Footer";
import Contacto from "./components/contacto/Contacto";
import Sobremi from "./components/sobremi/Sobremi";

function App() {
  return (
    <> 
    <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Proyectos/>}/>
          <Route path="/sobremi" element={<Sobremi/>} />
          <Route path="/contacto" element={<Contacto/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
