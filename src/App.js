import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/Renderizado';
import RenderizadoElementos from './components/RenderizadoElementos';
import {Eventos, MasSobreEventos} from './components/Eventos';
import ComunicacionComponentes from './components/ComunicacionComponentes';
import CicloDeVida from './components/CicloDeVida';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <section>
          <Componente></Componente>
          <Componente msg="Hola soy un componente"/>
          <hr/>
          <Propiedades 
            cadena = "Esto es una cadena de texto" 
            numero = {77} 
            booleano = {true}
            arreglo = {[1, 2, 3, 4]}
            objeto = {{nombre: "Seba", apellido: "Esains"}}
            funcion  = {(num) => num * num}
            elementoReact = {<i>Esto es un elemento React</i>}
            componenteReact = {<Componente msg = "Soy un componente pasado como Props" />}
          />
          <hr/>
          <Estado/>
          <hr/>
          <RenderizadoCondicional/>
          <hr/>
          <RenderizadoElementos/>
          <hr/>
          <Eventos/>
          <hr/>
          <MasSobreEventos/>
          <hr/>
          <ComunicacionComponentes/>
          <hr/>
          <CicloDeVida/>
        </section>
        
      </header>
    </div>
  );
}

export default App;
