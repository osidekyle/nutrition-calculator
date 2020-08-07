import React,{useState} from 'react';
import Meal from "./Meal"
import bootstrap from "../../../node_modules/bootstrap/dist/css/bootstrap.css"


const Meals = ({moreFood}) => {

    

    return ( 
        <div className="container meals mt-5">
            <div className="column">
                <Meal moreFood={moreFood} meal="Breakfast"/>
                <Meal moreFood={moreFood} meal="Lunch"/>
                <Meal moreFood={moreFood} meal="Dinner"/>
                <Meal moreFood={moreFood} meal="Snack"/>
            </div>
        </div>
     );
}
 
export default Meals;