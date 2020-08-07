import React,{useState} from 'react';
import Meal from "./Meal"
import bootstrap from "../../../node_modules/bootstrap/dist/css/bootstrap.css"


const Meals = ({ lessFood, moreFood}) => {

    

    return ( 
        <div className="container meals mt-5">
            <div className="column">
            <Meal lessFood={lessFood} moreFood={moreFood} meal="Breakfast"/>
                <Meal lessFood={lessFood}  moreFood={moreFood} meal="Lunch"/>
                <Meal lessFood={lessFood} moreFood={moreFood} meal="Dinner"/>
                <Meal lessFood={lessFood} moreFood={moreFood} meal="Snack"/>
            </div>
        </div>
     );
}
 
export default Meals;