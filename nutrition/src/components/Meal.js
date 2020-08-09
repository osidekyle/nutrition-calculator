import React,{useState, useEffect, useRef} from 'react';
import bootstrap from "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import axios from "../../../node_modules/axios/dist/axios"
import Food from "./Food"

const Meal = ({meal}) => {
    const foodBoxStyle={
            background:"white",
            border:"solid 1px black",
            borderRadius:"10px",
            width:"60%"
    }


    const titleStyle={
        borderBottom:"solid 1px black",
        fontSize:"250%",
        width:"100%"
    }

    const itemsStyle={
        width:"100%",
        borderBottom:"solid 1px black",
        height:"0%"
    }

    const buttonStyle={
        background:"#99CCFF",
        border:"none",
        height:"100%",
    }

    const buttonRowStyle={
        background:"#99CCFF",
        border:"solid 1.5px #99CCFF",
        borderRadius:"0px 0px 8px 8px"
    }

    const searchStyle={
        width:"80%",
        borderRadius:"5px",
        marginTop:"1%"
    }

    const [foods, getFood]=useState("");
    const [showSearch, getShowSearch]=useState(false);
    const [didInput, getInput]=useState(false);
    const [foodInput, addInput]=useState("")
    const [Query,addQuery]=useState([]);
     
    const search = useRef(null);

    const toSearchAddFood=(e)=>{
        
        //If there is input and we are on the search bar
        if(didInput===true && showSearch===true ){
            //Searching
            console.log("searched")
            getFood(foodInput)
            

        } 

       /* if(showSearch===false){
            search.focus();
        }
        */


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
        else if (e.target.value===null || e.target.value==="" || !e.target.value.trim()){
            console.log("Nothing in the search")
            getInput(false)
            addInput("");
        }

    }

    
       
    
    useEffect(()=>{
         
        
        const fetchFood=async (food)=>{
           
            const headers= {
                'x-app-id': '8db6ff6d',
                 'x-app-key': '4449c0db25170f2c84ad45e70368b39c',
                  }
            const apiEndpoint = `https://trackapi.nutritionix.com/v2/natural/nutrients`;
            const params = { query: food };

            await axios.post(apiEndpoint, params, {headers})
            //.then(res=>console.log(res))
            .then(res=>{addQuery(Query=>[...Query,res])})
            .catch(err=>console.log(err))
            
                }

              
           if(foods!=""){
            fetchFood(foods)
            
            getFood("")
           }
           
           
          
    },[foods])

  
    const deleteFood = (name)=>{
        
        addQuery(Query.filter(item=>item.data.foods[0].food_name!==name))
        
    }
    

    return ( 

        

        <div className="food-box container mt-5" style={foodBoxStyle}>
            <div className="row"><h4 className="meal-title display-4" style={titleStyle}>{meal}</h4></div>
            <div className='row'>
                <div className="food-items" style={itemsStyle}>
                    {Query.map(item=>(
                        
                        <Food deleteFood={deleteFood} food={item}/>
                    ))} 
                </div>
            </div>
            <div className="row" style={buttonRowStyle}>
                <div className="add-button" >
                    {showSearch ? null : <button className="btn btn-secondary" onClick={toSearchAddFood} style={buttonStyle}>Add Food +</button>}
                </div>
                <div className="search-bar">
                {showSearch ? <React.Fragment><input ref={search} style={searchStyle} onChange={changeInput} type="text"></input><button className="btn btn-sm mb-1 btn-primary" onClick={toSearchAddFood}>Add</button></React.Fragment> : null}
                    
                </div>
            </div>
        </div>


     );
}
 
export default Meal;