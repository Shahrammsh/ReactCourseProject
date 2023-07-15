import React, { useEffect }  from "react";
import { useState } from "react";
import GridColumn from "./grid-column";
import styles from '../../assests/CSS/grid-view.module.css';
const GridRow = ({columnObject})=>{

    
    const properties = ()=>
    {
        const cols =[];
        for(let x in columnObject){
            cols.push(x);
        }
        return cols;
    };

    const rows = properties().map((item) => {
        return (<GridColumn value={columnObject[item]} ></GridColumn>);
    }) ;

    return ( 
        <div className={styles['row']}>{rows}</div>
    );

}
export default GridRow;