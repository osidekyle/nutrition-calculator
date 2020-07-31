import React from 'react';
import Header from "./components/Header"
import Meals from "./components/Meals"
import './App.css';
import bootstrap from "../../node_modules/bootstrap/dist/css/bootstrap.css"

function App() {

  

  

  return (
    <div className="App">
      <div className="container">
        <div className="row">
      
      <Header/>
      
      </div>

    <div className="row">
     
    <Meals/>
    </div>

      </div>
    </div>
  );
}

export default App;
