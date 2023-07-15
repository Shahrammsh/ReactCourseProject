import React from "react";

const GridButton =({title})=>{
    console.log(title);
    const handlerClick =(event)=>
    {
        alert('insert button clicked');
    }

    return (
        <div> 
            <button onClick={handlerClick} >{title}</button>

        </div>
    );

}

export default GridButton ;