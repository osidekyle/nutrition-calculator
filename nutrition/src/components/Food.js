import React, {useState} from 'react';





const Food = ({deleteFood, name, calories, serving,remove}) => {
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
    return (
     <div style={itemStyle}>
        {name} | Calories:{calories*count} | Quantity:{count} | Serving Size: {serving} | <span onClick={()=>more()}>+</span> | <span onClick={()=>less()}>-</span> | <span onClick={()=>deleteFood(name)}>Delete</span>
        </div>
      );
}
 
export default Food;