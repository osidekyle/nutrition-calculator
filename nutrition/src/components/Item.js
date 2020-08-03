import React from 'react';



const Item = ({food}) => {
    return ( 
        <div className="item">
            <h4>{food.food_name}</h4>
        </div>
     );
}
 
export default Item;