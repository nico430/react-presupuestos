import React, { Fragment } from 'react';
import { revisarPresupuesto } from '../helpers'; //usamos llaves por que no es el export default, esta funcion cambia el fondo de un elemento cambiando la clase de css
import PropTypes from 'prop-types';

const ControlPresupuesto = ( { presupuesto, restante } ) => {
    return ( 
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: $ {presupuesto}
            </div>
            <div className={ revisarPresupuesto(presupuesto, restante) }>
                Restante: $ {restante}
            </div>
        </Fragment>
    );
}

ControlPresupuesto.propTypes = {
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired
}


export default ControlPresupuesto;