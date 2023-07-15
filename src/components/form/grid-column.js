import React  from "react";
import styles from '../../assests/CSS/grid-view.module.css';

const GridColumn =({value})=>{
    return (
      
            <div className={styles['column']}> 
            {value}
            </div>

       
        );

} ;


export default GridColumn; 