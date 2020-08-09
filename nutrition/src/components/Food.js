import React, {useState,useEffect} from 'react';





const Food = ({ deleteFood, food}) => {
   const [count, addCount]=useState(1);
   const [moreInfo, changeInfo]=useState(false)
   
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
        <strong>{food.data.foods[0].food_name.charAt(0).toUpperCase()+food.data.foods[0].food_name.slice(1)}</strong> | Calories:{Math.floor(food.data.foods[0].nf_calories)*count} | Protein:{Math.floor(food.data.foods[0].nf_protein)*count}g | Quantity:{count} | Serving Size: {food.data.foods[0].serving_unit} | <button style={addSubStyle} className="btn-xs btn btn-primary" onClick={()=>more()}>+</button> | <button style={addSubStyle} className="btn btn-xs btn-primary" onClick={()=>less()}>-</button> | <button className="btn btn-warning" style={deleteStyle} onClick={()=>{deleteFood(food.data.foods[0].food_name)}}>Delete</button> |     {moreInfo ? <React.Fragment><button style={deleteStyle} onClick={()=>changeInfo(false)} className="btn btn-secondary">Less</button><span> | Carbohydrates: {food.data.foods[0].nf_total_carbohydrate}g </span><span> | Fats: {food.data.foods[0].nf_total_fat}g </span><span> | Sugars: {food.data.foods[0].nf_sugars}g </span><span> | Cholesterol: {food.data.foods[0].nf_cholesterol}mg </span><span> | Sodium: {food.data.foods[0].nf_sodium}mg </span></React.Fragment>: <button style={deleteStyle} onClick={()=>changeInfo(true)} className="btn btn-secondary">More</button>}
        </div>
      );
}
 
export default Food;