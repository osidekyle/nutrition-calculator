import React from 'react';

const itemStyle={
    borderBottom:"solid 1px black"
}

const Food = ({food}) => {
    return (
        
        <h4 style={itemStyle}>{food}</h4>
        
      );
}
 
export default Food;