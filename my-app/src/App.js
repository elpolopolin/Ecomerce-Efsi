import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/layout';
import Home from './components/home';
import Tienda from './components/tienda';
import Persona from './components/persona';

function App() {



  return (

    <BrowserRouter>
    <Layout /> 

      <Routes>
        <Route index element={<Home />} />
        <Route path="/tienda" element={<Tienda /> } />
        <Route path="/persona/:personaId" element={<Persona/>} />
        <Route path="*" element={<h1>404</h1>}></Route>
      </Routes>



  

    </BrowserRouter>  
  );
}

export default App;
