//import logo from './logo.svg';
import React, { Fragment, useState } from 'react';
import './App.css';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Resultado from './componentes/Resultado';
import Mensaje from './componentes/Mensaje';
import Spinner from './componentes/Spinner'



//llamo a los componentes
function App() {

  //definir el estado:
  const [cantidad, guardarCantidad] = useState(0);

  const [plazo, guardarPlazo] = useState(''); //string vacio dado que los valores de las options estan en string

  //mostrar el total en el Dom
  const [total, guardarTotal] = useState(0);

  //mostrar Spinner
  const [spinner, guardarSpinner] = useState(false);

  //condicional de componentes:
  let componenteCargar;

  //verifico si el spinner esta activado, si es asi lo muestro y paso a mostrar el resultado
  if (spinner) {
    componenteCargar = <Spinner />
  }
  else if (total === 0) {
    componenteCargar = <Mensaje />
  } else {
    componenteCargar = <Resultado
      total={total}
      plazo={plazo}
      cantidad={cantidad}

    />
  }


  return (
    //<div className="App">
    <Fragment>

      <Header titulo="Cotizador Prestamos"
        descripcion=""
      />

      <div className='container'>
        <Formulario

          cantidad={cantidad}
          guardarCantidad={guardarCantidad}
          plazo={plazo}
          guardarPlazo={guardarPlazo}
          total={total}
          guardarTotal={guardarTotal}
          spinner={spinner}
          guardarSpinner={guardarSpinner}
        />
        <div className='mensajes'>
          {componenteCargar}

        </div>

      </div>



    </Fragment>
  );
}


export default App;
