import logo from './logo.svg';
import './App.css';
import Navbar from './components';
import TabTitle from './components';

let test = <p>Still under maintenance</p>;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TabTitle />
        <img src={logo} className="App-logo" alt="logo" />
        { test }
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
