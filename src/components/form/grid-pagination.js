import React, { useEffect } from "react";
import {useState } from 'react';
const GridPagination =(props)=>{ 
   const [current  , setCurrent] = useState(props.currentPage);
    useEffect(function (){
        if (typeof(props.onPagingClick )=== 'function')
        {           
            props.onPagingClick(current);
        }
         
    } , [current ,props ]) ;

    const buttons =[] ;
    const handleNextClick =()=>{              
        setCurrent(current < props.pageCount ? Number(current) +1 : Number(current));               
    };
    const handlePreviousClick =()=>{      
        setCurrent(current > 1 ? Number(current) -1 :Number(current));
    };

    const handlePagingClick =(event)=>{
        let val = Number(event.target.value); 
        if(val >= 1 && val <= props.pageCount)
        setCurrent(val);

    }
    for(let i = 1; i<= props.pageCount; i++)
    {   
        buttons.push(<button key={i} value={i} id={i} onClick={handlePagingClick}>{i}</button>) ;
    }   
    return (
       <>
       
        <div> 
        <button id="previous"  onClick={handlePreviousClick}>Previous  </button>        
        {buttons}
        <button id="Next" onClick={handleNextClick}>Next  </button>
        </div>
       
        
       </>

    );

}

export default GridPagination;