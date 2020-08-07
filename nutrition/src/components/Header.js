import React from 'react';
import bootstrap from "../../../node_modules/bootstrap/dist/css/bootstrap.css"

const Header = () => {

    const headingStyle={
        padding:"5%",
        borderRadius:"50px",
        boxShadow:"0px 5px 20px black",
        width:"40%",
        height:"50px",
        margin:"auto",
        paddingBottom:"9%",
        background:"white"
      }

    const titleStyle={
        textAlign:"center",
        fontSize:"200%"
        
    }

    return (
        //Put in container
        <div className="heading mt-3 col-xs-12" style={headingStyle}>
        <h1 className="Display1" style={titleStyle}> Nutrition Tracker</h1>
        </div> 
     );
}
 
export default Header;