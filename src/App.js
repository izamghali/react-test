import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import { TabTitle, BodyThought } from './components';

function App() {

  const [ thoughts, setThoughts ] = useState([{
    thoughtId: 1,
    thoughtText: "First thought"
  }, {
    thoughtId: 2, 
    thoughtText: "This will be gone in 15 seconds"
  }])

  const addThought = (thought) => {
    setThoughts(prevThoughts => 
      [...prevThoughts, thought]
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <TabTitle />
        <img src={logo} className="App-logo" alt="logo" />
        <BodyThought addThought={addThought}/>

        <ul>
          { thoughts.map(thought => 
            <li>{thought.thoughtText}</li>
          ) }
        </ul>
        
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
