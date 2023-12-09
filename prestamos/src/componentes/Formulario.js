import React, { Fragment, useState } from 'react'
import { calcularTotal } from '../helpers';

const Formulario = (props) => {

    //propiedades del formulario
    const { cantidad, guardarCantidad, plazo, guardarPlazo, total, guardarTotal } = props;
    //estado local
    const [error, guardarError] = useState(false);

    //leer cantidad
    const leerCantidad = (e) => {
        //console.log(typeof(e.target.value)) //es un dato string
        //convertiremos a numero y le daremos eso a guardarCantidad:

        guardarCantidad(parseInt(e.target.value));
        //console.log(guardarCantidad)
    }

    //calculo del precio
    const calcularPrestamo = e => {
        e.preventDefault()
        //console.log('calculando Precio')

        //validar
        if (cantidad === 0 || plazo === '') {
            console.log('Hay error');
            guardarError(true);
        } else {
            //Realizar la cotizacion
            guardarError(false); //elimina el error previo

            const total = calcularTotal(cantidad, plazo);
            //console.log(total);
            guardarTotal(total);
        }

    }

    return (
        <Fragment>
            <form onSubmit={calcularPrestamo}>
                <div className="row">
                    <div>
                        <label>Cantidad Prestamo</label>
                        <input
                            className="u-full-width"
                            type="number"
                            placeholder="Ejemplo: 3000"
                            //Agrego un evento de react
                            onChange={leerCantidad}
                        />
                    </div>
                    <div>
                        <label>Plazo para Pagar</label>
                        <select
                            className="u-full-width"
                            onChange={e => { guardarPlazo(parseInt(e.target.value)) }}
                        >
                            <option value="">Seleccionar</option>
                            <option value="3">3 meses</option>
                            <option value="6">6 meses</option>
                            <option value="12">12 meses</option>
                            <option value="24">24 meses</option>
                        </select>
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Calcular"
                            className="button-primary u-full-width"
                        />
                    </div>
                </div>
            </form>

            {(error) ? <p className="error">Todos los campos son obligarios</p> : null}

        </Fragment>
    );
}

export default Formulario;