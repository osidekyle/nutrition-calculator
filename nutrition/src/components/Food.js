import React from 'react';



const Food = ({food,calories}) => {
    return (
        <div className="food-item">
            <h4>{food}</h4>
            <h4>{calories}</h4>
        </div>
      );
}
 
export default Food;