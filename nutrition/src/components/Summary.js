import React,{useState,useEffect} from 'react';
import bootstrap from "../../../node_modules/bootstrap/dist/css/bootstrap.css"


const Summary = ({foods}) => {

    const [protein,addProtein]=useState(0)

    const totalProtein=()=>{foods.forEach((food)=>{
        addProtein(protein+Math.floor(food.data.foods[0].nf_protein))
    })}
    const [calories,addCalories]=useState(0)

    const totalCalories=()=>{foods.forEach((food)=>{
        addCalories(calories+Math.floor(food.data.foods[0].nf_calories))
    })}

    useEffect(()=>{
        totalProtein();
        totalCalories();
    },[foods])


    const summaryStyle={
        margin:"auto"
    }

    return (<div style={summaryStyle} className="mt-5">
            <div className="column">
             <h1 className="display-4">Summary</h1>
            <h2>Total Protein: {protein}</h2>
            <h2>Total Calories: {calories}</h2>
            </div>
            </div>
            );
}
 
export default Summary;