import React,{useState,useEffect} from 'react';
import bootstrap from "../../../node_modules/bootstrap/dist/css/bootstrap.css"


const Summary = ({setFoods, emptyNames, names, foods}) => {
    
    
    const [protein,addProtein]=useState(0)
    const [calories,addCalories]=useState(0)
    const [sodium,addSodium]=useState(0)
    const [cholesterol,addChol]=useState(0)
    const [carbs,addCarbs]=useState(0)
    const [fats,addFats]=useState(0)

    const total=()=>{foods.forEach((food)=>{
        
        addProtein(protein+Math.floor(food.data.foods[0].nf_protein))
        addCalories(calories+Math.floor(food.data.foods[0].nf_calories))
        addSodium(sodium+Math.floor(food.data.foods[0].nf_sodium))
        addCarbs(carbs+Math.floor(food.data.foods[0].nf_total_carbohydrate))
        addFats(fats+Math.floor(food.data.foods[0].nf_total_fat))
        addChol(cholesterol+Math.floor(food.data.foods[0].nf_cholesterol))
    })}
   
   const remove=()=>{
    names.forEach(name=>{
        
        foods=foods.filter(item=>item.data.foods[0].food_name!=name)
        setFoods(foods)
        if(names!=[]){
            emptyNames()
        }
    })
    
   }

    useEffect(()=>{
        addProtein(0)
        addCalories(0)
        addSodium(0);
        addCarbs(0);
        addChol(0);
        addFats(0)
        remove();
        
        total();
        
        console.log(foods)
        
        
    },[foods,names])


    const summaryStyle={
        margin:"auto"
    }

    return (<div style={summaryStyle} className="mt-5">
            <div className="column">
             <h1 className="display-4">Summary</h1>
             <div className="mt-4">
             <h2>Total Calories: {calories}</h2>
            <h4>Total Protein: {protein}</h4>
            <h4>Total Carbohydrates: {carbs}</h4>
            <h4>Total Fats: {fats}</h4>
            <h4>Total Sodium: {sodium}</h4>
            <h4>Total Cholesterol: {cholesterol}</h4>
            </div>
            </div>
            </div>
            );
}
 
export default Summary;