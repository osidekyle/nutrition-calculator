import React from 'react';
import bootstrap from "../../../node_modules/bootstrap/dist/css/bootstrap.css"

const Meal = ({meal}) => {
    const foodBoxStyle={
            background:"white",
            border:"solid 1px black",
            borderRadius:"10px"
    }


    const titleStyle={
        borderBottom:"solid 1px black",
        fontSize:"250%",
        width:"100%"
    }

    const itemsStyle={
        width:"100%",
        borderBottom:"solid 1px black",
        height:"0px"
    }

    const buttonStyle={
        background:"#99CCFF",
        border:"none",
        height:"100%",
    }

    return ( 

        

        <div className="food-box container mt-5" style={foodBoxStyle}>
            <div className="row"><h4 className="meal-title display-4" style={titleStyle}>{meal}</h4></div>
            <div className='row'>
                <div className="food-items" style={itemsStyle}>

                </div>
            </div>
            <div className="row">
                <div className="add-button">
                    <button className="btn btn-secondary " style={buttonStyle}>Add Food +</button>
                </div>
            </div>
        </div>


     );
}
 
export default Meal;