import React,{useState, useEffect} from 'react';
import Header from "./components/Header"
import Meals from "./components/Meals"
import './App.css';
import bootstrap from "../../node_modules/bootstrap/dist/css/bootstrap.css"
import Summary from "./components/Summary"

function App() {

  const[names,addName]=useState([])
  const [foods, addFood]=useState([]);
    const moreFood=(food)=>{
      
      addFood(foods=>[...foods,food])
      
    }

    const lessFood=(name)=>{

      addName(names=>[...names,name])
      
    }
     
    const emptyNames=()=>{
      addName([])
    }

    const setFoods=(foods)=>{
      addFood(foods)
    }
  

  return (
    <div className="App">
      <div className="container">
        <div className="row">
      
      <Header/>
      
      </div>

    <div className="row">
     
    <Meals lessFood={lessFood} moreFood={moreFood} />
    </div>
    <div className="row">
      <Summary setFoods={setFoods} emptyNames={emptyNames} names={names} foods={foods}/>
    </div>
      </div>
    </div>
  );
}

export default App;
