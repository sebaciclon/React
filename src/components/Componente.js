import React, {Component} from "react";

// Componente basado en clases
/*class Componente extends Component {
    render() {
        // Sin usar propiedades
        //return <h2>Hola soy un componente!</h2>
        // Asi se usa con propiedades
        return <h2>{this.props.msg}</h2>;
    }
}*/

// Componente funcional
/*function Componente(props) {
    return <h2>{props.msg}</h2>;
}*/

// Lo mismo que la funcion de arriba pero de otra forma, con arrow function
const Componente = (props) => <h2>{props.msg}</h2>;

export default Componente;