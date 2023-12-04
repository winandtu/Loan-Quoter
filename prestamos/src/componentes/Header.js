//import React from 'react';
import React, {Fragment} from 'react';

function Header(props){

    console.log(props)
    return (
        <Fragment>
            
        <h1>{props.titulo}</h1>
        <p>{props.descripcion}</p>

        </Fragment>
    )

}

/*Forma implicta:

const Header = ({titulo})=>{

    const total= 1+2 //puedo colcoar codigo javascript si estan las llaves
    return (
        <h1>{titulo}</h1>
    )
}
*/
export default Header;