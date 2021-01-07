import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const Formulario = ( { guardarGasto, guardarCrearGasto } ) => {

    const [ nombre, guardarNombre ] = useState('');       //Tambien se pudo haber hecho un solo state en forma de objeto json
    const [ cantidad, guardarCantidad ] = useState(0)
    const [ error, guardarError ] = useState(false);

    //cuando el usuario agrega un gasto
    const agregarGasto = e => {
        e.preventDefault();
        
    //validar
        if( cantidad < 1 || isNaN( cantidad ) || nombre.trim() === ''){
            guardarError(true);
            return;
        }
        guardarError(false);

    //construir gasto
    const gasto = {
        nombre,
        cantidad,
        id: shortid.generate()
    }

    //pasar gasto al componente principal
        guardarGasto(gasto);
        guardarCrearGasto(true);

    //resetear el form
    guardarNombre('');
    guardarCantidad(0)


    }


    return ( 

        <form
            onSubmit={agregarGasto}
        >
            <h2>Agregá Tus Gastos Aca</h2>

            {
                error ? (<Error mensaje="Ambos campos son obligatorios o el presupuesto es incorrecto" /> ):( null)
            }

            <div className="campo">
                <label>Nombre del gasto</label>
                <input
                type="text"
                className="u-full-width"
                placeholder="Ej. Transporte"
                value={nombre}
                onChange={ e =>{guardarNombre( e.target.value )}}
                />
            </div>

            <div className="campo">
                <label>Cantidad del gasto</label>
                <input
                type="number"
                className="u-full-width"
                placeholder="Ej. 300"
                value={cantidad}
                onChange={ e =>{ guardarCantidad(e.target.value)} }
                />
            </div>

            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Agregar gasto"
            />

        </form>

    );
}

Formulario.propTypes = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
}

 
export default Formulario;