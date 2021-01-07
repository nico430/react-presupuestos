import React, { Fragment, useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';


const Pregunta = ( { guardarPresupuesto, guardarRestante, actualizarPregunta } ) => {

    //definir el state
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    //Función para leer el input
    const definirPresupuesto = e =>{
        guardarCantidad( parseInt(e.target.value) );
    }

    //submit del presupuesto
    const agregarPresupuesto = e => {
        //se le pasa el evento (e) para ejectutar la funcion siguiente que evita que se recarge la página tras el submit y ademas para que 
        e.preventDefault();

        //validar
        if( cantidad < 1 || isNaN( cantidad ) ){
            //isNaN significa si el dato es Not a Number, para que de error si no se escribe nada
            guardarError(true);
            return;//importante el return para terminar la validación
        }
        //si pasa la validación 
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
    }


    return ( 

        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            {error ? <Error mensaje="El Presupuesto es Incorrecto" /> : null}

            <form
                onSubmit={agregarPresupuesto}
            >
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />

                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />
            </form>
        </Fragment>

     );
}


Pregunta.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired
}

 
export default Pregunta;