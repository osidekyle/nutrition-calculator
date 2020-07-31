import React from 'react';

const Meal = ({meal}) => {
    return ( 

        <div className="food-box">
            <div className="row"><h4 className="meal-title">{{meal}}</h4></div>
            <div classname='row'>
                <div className="food-items">

                </div>
            </div>
            <div className="row">
                <div className="add-button">
                    <button className=" btn-primary">Add Food</button>
                </div>
            </div>
        </div>


     );
}
 
export default Meal;