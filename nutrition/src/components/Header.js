import React from 'react';
import bootstrap from "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import "../App.css"
const Header = () => {

    const headingStyle={
        padding:"5%",
        borderRadius:"50px",
        boxShadow:"0px 5px 20px black",
        width:"40%",
        height:"40px",
        margin:"auto",
        paddingBottom:"9%",
        background:"white"
      }

  

    const rowStyle={
        width:"100%"
    }

    return (
        //Put in container
        <div className="row" style={rowStyle}>
        <div className="col-xs-12 mt-4" style={headingStyle}>
        <h1 className="display-4 title"> Nutrition Tracker</h1>
        </div> 
        </div>
        
     );
}
 
export default Header;