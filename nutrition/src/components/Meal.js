import React,{useState} from 'react';
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

    const buttonRowStyle={
        background:"#99CCFF",
        
    }

    const toSearchAddFood=(e)=>{

        //If there is input and we are on the search bar
        if(didInput==true && showSearch==true){
            //Searching
            console.log("searched")
            getFood(foodInput);    
        }

        //Changes from search to button and vice versa
        showSearch ? getShowSearch(false) : getShowSearch(true);
        console.log("Switched")

        

        //Empties input on switch
        getInput(false);
        addInput("");
        console.log("emptied the input")
    }

    const changeInput=(e)=>{
        if (e.target.value){
            console.log("There is something in the search")
            getInput(true);
            addInput(e.target.value)
        }
        else if (e.target.value==null || e.target.value==""){
            console.log("Nothing in the search")
            getInput(false)
            addInput("");
        }

    }

    const [foods, getFood]=useState([]);
    const[showSearch, getShowSearch]=useState(false);
    const[didInput, getInput]=useState(false);
    const[foodInput, addInput]=useState()

    return ( 

        

        <div className="food-box container mt-5" style={foodBoxStyle}>
            <div className="row"><h4 className="meal-title display-4" style={titleStyle}>{meal}</h4></div>
            <div className='row'>
                <div className="food-items" style={itemsStyle}>

                </div>
            </div>
            <div className="row" style={buttonRowStyle}>
                <div className="add-button" >
                    {showSearch ? null : <button className="btn btn-secondary" onClick={toSearchAddFood} style={buttonStyle}>Add Food +</button>}
                </div>
                <div className="search-bar">
                {showSearch ? <React.Fragment><input onChange={changeInput} type="text"></input><button onClick={toSearchAddFood}>Add</button></React.Fragment> : null}
                    
                </div>
            </div>
        </div>


     );
}
 
export default Meal;