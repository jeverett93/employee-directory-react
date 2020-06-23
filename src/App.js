// importing dependency, parent component, and style file
import React from 'react';
import Table from './components/Table'
import './styles/App.css';

// rendering parent component
function App() {
  return (
    <div className="App">
      <Table/>
    </div>
  );
}

// exporting file to be used in other parts of the application
export default App;
