import React, {useState} from 'react';





const Food = ({ lessFood,deleteFood, food}) => {
   const [count, addCount]=useState(1);
   
const more=()=>{
    addCount(prevState=>prevState+1)
    
}

const less=()=>{
    addCount(prevState=>prevState-1)
}

const itemStyle={
    borderBottom:"solid 1px black"
}

const deleteStyle={
    
    padding:".15%",
  
}

const addSubStyle={
    padding:".1%",
    
    
}
    return (
     <div style={itemStyle}>
        <strong>{food.data.foods[0].food_name.charAt(0).toUpperCase()+food.data.foods[0].food_name.slice(1)}</strong> | Calories:{Math.floor(food.data.foods[0].nf_calories*count)} | Protein:{Math.floor(food.data.foods[0].nf_protein*count)} | Quantity:{count} | Serving Size: {food.data.foods[0].serving_unit} | <button style={addSubStyle} className="btn-xs btn btn-primary" onClick={()=>more()}>+</button> | <button style={addSubStyle} className="btn btn-xs btn-primary" onClick={()=>less()}>-</button> | <button className="btn btn-warning" style={deleteStyle} onClick={()=>{deleteFood(food.data.foods[0].food_name);lessFood(food.data.foods[0].food_name)}}>Delete</button>
        </div>
      );
}
 
export default Food;