import React from 'react';
import Meal from "./Meal"
import bootstrap from "../../../node_modules/bootstrap/dist/css/bootstrap.css"


const Meals = () => {
    return ( 
        <div className="container meals mt-5">
            <div className="column">
                <Meal meal="Breakfast"/>
                <Meal meal="Lunch"/>
                <Meal meal="Dinner"/>
                <Meal meal="Snack"/>
            </div>
        </div>
     );
}
 
export default Meals;