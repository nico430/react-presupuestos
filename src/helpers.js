/* 
una hoja helper es una hoja en la que volcamos funciones que nos ayudan a no sobreacargar los componentes,
en esta hoja a van a haber muchas funciones asi que no nos conviene declarar un solo export por default sino exportar cada función a utilizar 
*/

export const revisarPresupuesto = ( presupuesto, restante) => {

    let clase;

    if( (presupuesto / 4) > restante ){
        clase = 'alert alert-danger';
    }
    else if( (presupuesto / 2) > restante ){
        clase = 'alert alert-warning';
    }
    else{
        clase = 'alert alert-success'
    }

    return clase;

}