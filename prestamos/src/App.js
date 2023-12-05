//import logo from './logo.svg';
import React, {Fragment, useState} from 'react';
import './App.css';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';



//llamo a los componentes
function App() {

  //definir el estado:
  const [cantidad, guardarCantidad] = useState(0);

  const [plazo, guardarPlazo] = useState(''); //string vacio dado que los valores de las options estan en string
  return (
    //<div className="App">
    <Fragment>
    
      <Header titulo= "Cotizador Prestamos"
              descripcion = ""
      />

      <div className='container'>
        <Formulario

        cantidad={cantidad}
        guardarCantidad={guardarCantidad}
        plazo = {plazo}
        guardarPlazo = {guardarPlazo}
        />
      </div>

    </Fragment>
  );
}

export default App;
