import logo from './logo.svg';
import './App.css';
import React from 'react'

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
        <Contadores />
        <Checklist items={["Item 1", "Item 2", "Item 3"]}/>
      </header>
    </div>
  );
}

class Contadores extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({visible:true})
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({visible:false})
    }, 3000)
  }


  render() {
    return (
      <div>
        {this.state.visible && <Contador />}
        <Contador />
      </div>
    )
  }
}
class Contador extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      direcao: 1,
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(this.incrementa, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.intervalId);
  }

  incrementa = () => {
   this.setState(state => ({contador: state.contador + state.direcao}))
   this.setState(state => {
    if (state.contador >= 10) {
      return {direcao: -1}
    } else if (state.contador <= 0) {
      return {direcao: 1}
    }
    })
  }

  render() {
    return (
      <div>
        <p>{this.state.contador}</p>
        {/* <button onClick={this.incrementa}>Incrementar</button> */}
      </div>
    )
  }
}

class Checklist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      concluidas: []
    }
  }

  marca(item) {
    this.setState((state) => {
      if (this.state.concluidas.includes(item)) {
        return {concluidas: state.concluidas.filter(e => e !== item)};
      }
      return {concluidas: state.concluidas.concat(item)}
    });
  }

  render() {
    return (
      <div>
        <h1>Checklist</h1>
        <ul>
          {
          this.props.items.map(item => (
            <li key={item} 
            className={this.state.concluidas.includes(item) === true ? 'concluido' : ''}
            onClick={() => this.marca(item)}>
            {item}
            </li>
          ))
          }
        </ul>
      </div>
    )
  }
}
export default App;
