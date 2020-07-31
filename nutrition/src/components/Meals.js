import React from 'react';
import Meal from "./Meal"

const Meals = () => {
    return ( 
        <div className="container meals">
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