import React,{useState} from 'react';
import Header from "./components/Header"
import Meals from "./components/Meals"
import './App.css';
import bootstrap from "../../node_modules/bootstrap/dist/css/bootstrap.css"
import Summary from "./components/Summary"

function App() {

  const [foods, addFood]=useState([]);
    const moreFood=(food)=>{
      addFood(foods=>[...foods,food])
    }

  

  return (
    <div className="App">
      <div className="container">
        <div className="row">
      
      <Header/>
      
      </div>

    <div className="row">
     
    <Meals moreFood={moreFood} />
    </div>
    <div className="row">
      <Summary foods={foods}/>
    </div>
      </div>
    </div>
  );
}

export default App;
