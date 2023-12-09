import React from 'react' //imr

const Resultado = (props) => { //sfc
    const { total, plazo, cantidad } = props;
    return (
        <div className='u-full-width resultado'>
            <h2>Resumen</h2>
            <p>Cantidad solicitada: ${cantidad}</p>
            <p>Plazo en meses: {plazo}</p>
            <p>Pago por mes: ${(total/plazo).toFixed(2)}</p>
            <p>Total a pagar: ${(total).toFixed(2)}</p>
        </div>
    );
}

export default Resultado;