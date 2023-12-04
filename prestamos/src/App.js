//import logo from './logo.svg';
import React, {Fragment} from 'react';
import './App.css';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';

//llamo a los componentes
function App() {
  return (
    //<div className="App">
    <Fragment>
    
      <Header titulo= "Cotizador Prestamos"
              descripcion = ""
      />

      <div className='container'>
        <Formulario/>
      </div>

    </Fragment>
  );
}

export default App;
