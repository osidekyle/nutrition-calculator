import React from 'react';
import Item from "./Item"


const Food = ({foods}) => {
    return (
        {foods.map(item=>(
            <Item food={item}/>
        ))} 
      );
}
 
export default Food;