import React from 'react';

const Card = ({nombre, color}) =>{
    return( 
        <div>
            <h2> Cual el tu color favorito?</h2>
            <p>Nombre {nombre}</p>
            <p>Color favorito{color}</p>
        </div>
    )
}
export default Card;