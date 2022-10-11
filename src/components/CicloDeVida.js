import React, {Component} from "react";

export default class CicloDeVida extends Component {
    constructor(props) {
        super(props);
        console.log(0, "el componente se inicializa, aun NO ESTA en el DOM");

        this.state = {
            hora: new Date().toLocaleTimeString(),
        };
        this.temporizador = null;
    }

    componentDidMount() {
        console.log(1, "El componente ya se encuentra en el DOM");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(2, "el estado o las props del componente han cambiado");
        console.log(prevProps);
        console.log(prevState);
    }

    componentWillUnmount() {
        console.log(3, "el componente ha sido eliminado del DOM");
    }

    tictac = () => {
        this.temporizador = setInterval(() => {
            this.setState({hora: new Date().toLocaleTimeString()})
        }, 1000);
    };

    iniciar = () => {
        this.tictac();
    };

    detener = () => {
        clearInterval(this.temporizador);
    };

    render() {
        console.log(4, "el componente se dibuja (o redibuja por algun cambio), en el DOM");
        return(
            <div>
                <h2>Ciclo de vida de los componentes de clase</h2>
                <h3>{this.state.hora}</h3>
                <button onClick={this.iniciar}>Iniciar</button>
                <button onClick={this.detener}>Detener</button>
            </div>
        );
    }

}