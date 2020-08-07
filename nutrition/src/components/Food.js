import React, {useState} from 'react';





const Food = ({deleteFood, food}) => {
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
    background:"coral",
    borderRadius:"20px",
    padding:".15%",
    cursor:"pointer"
  
}
    return (
     <div style={itemStyle}>
        <strong>{food.data.foods[0].food_name.charAt(0).toUpperCase()+food.data.foods[0].food_name.slice(1)}</strong> | Calories:{Math.floor(food.data.foods[0].nf_calories*count)} | Protein:{Math.floor(food.data.foods[0].nf_protein*count)} | Quantity:{count} | Serving Size: {food.data.foods[0].serving_unit} | <span onClick={()=>more()}>+</span> | <span onClick={()=>less()}>-</span> | <span style={deleteStyle} onClick={()=>deleteFood(food.data.foods[0].food_name)}>Delete</span>
        </div>
      );
}
 
export default Food;