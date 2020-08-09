import React,{useState,useEffect,Component} from 'react';
import bootstrap from "../../../node_modules/bootstrap/dist/css/bootstrap.css"


const Summary = ({calories}) => {
    
    
    


   
   

    

    const summaryStyle={
        margin:"auto"
    }

    return (<div style={summaryStyle} className="mt-5 mb-5">
            <div className="column">
             <h1 className="display-4">Summary</h1>
             <div className="mt-4">
             <h2>Total Calories: {calories}</h2>
            <h4>Total Protein: </h4>
            <h4>Total Carbohydrates: </h4>
            <h4>Total Fats: </h4>
            <h4>Total Sodium: </h4>
            <h4>Total Cholesterol: </h4>
            </div>
            </div>
            </div>
            );
}
 
export default Summary;