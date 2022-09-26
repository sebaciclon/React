import React, {Component} from "react";

// Properties initializer
export class Eventos extends Component {
    state = {contador:0,}; 
        
    

    // Arrow functions
    sumar = (e) => {
        this.setState({contador: this.state.contador + 1,});
    }

    // Arrow functions
    restar = (e) => {
        this.setState({contador: this.state.contador - 1,});
    }

    render() {
        return (
            <div>
                <h>eventos en componentes de clase</h>
                <h3>{this.state.contador}</h3>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
            </div>
        );
    }
}