import React,{useState} from 'react';
import bootstrap from "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import axios from "../../../node_modules/axios/dist/axios"
import Food from "./Food"

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
    const [foods, getFood]=useState([]);
    const[showSearch, getShowSearch]=useState(false);
    const[didInput, getInput]=useState(false);
    const[foodInput, addInput]=useState()

    const toSearchAddFood=(e)=>{
        
        //If there is input and we are on the search bar
        if(didInput==true && showSearch==true ){
            //Searching
            console.log("searched")
            const headers= {
                'x-app-id': '8db6ff6d',
                 'x-app-key': '4449c0db25170f2c84ad45e70368b39c',
                  }
            const apiEndpoint = `https://trackapi.nutritionix.com/v2/natural/nutrients`;
            const params = { query: `${foodInput}` };
            const response=axios.post(apiEndpoint, params, {headers})
            .then(response=>response.data.foods[0])
            .then(response=>getFood([response]))
                    
                }
            console.log(foods)
        //Changes from search to button and vice versa
        showSearch ? getShowSearch(false) : getShowSearch(true);
        console.log("Switched")

        

        //Empties input on switch
        getInput(false);
        addInput("");
        console.log("emptied the input")
    }

    const changeInput=(e)=>{
        if (e.target.value && e.target.value.trim()){
            console.log("There is something in the search")
            getInput(true);
            addInput(e.target.value)
            
        }
        else if (e.target.value==null || e.target.value=="" || !e.target.value.trim()){
            console.log("Nothing in the search")
            getInput(false)
            addInput("");
        }

    }

    

    return ( 

        

        <div className="food-box container mt-5" style={foodBoxStyle}>
            <div className="row"><h4 className="meal-title display-4" style={titleStyle}>{meal}</h4></div>
            <div className='row'>
                <div className="food-items" style={itemsStyle}>
                    {/*foods.map((food)=>(
                        <Food name={food.name} serving={food.servingSize} calories={food.calories}/>
                    
                    ))*/}
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