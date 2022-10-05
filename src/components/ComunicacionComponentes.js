import React, {Component} from "react";

export default class Padre extends Component {
    state = {
        contador:0,
    };

    incrementarContador = (e) => {
        this.setState({contador:this.state.contador + 1})
    }

    render() {
        return(
            <div>
                <h2>comunicacion entre componentes</h2>
                <p>Contador {this.state.contador}</p>
                <Hijo mensaje="mensaje para el hijo 1"/>
                <Hijo incrementarContador={this.incrementarContador}mensaje="mensaje para el hijo 2"/>
            </div>
        );
    }
}

function Hijo(props) {
    return(
        <div>
            <h3>{props.mensaje}</h3>
            <button onClick={props.incrementarContador}>+</button>
        </div>
    ); 
}