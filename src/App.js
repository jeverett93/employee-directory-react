import React from 'react';
import Header from './components/Header'
import Table from './components/Table'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Table/>
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
