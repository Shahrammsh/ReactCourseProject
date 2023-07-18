import React from "react";
import styles from '../../assests/CSS/grid-view.module.css'

const GridButton =({title, onclick})=>{
   
    return (
        <div> 
            <button className={styles['button']} onClick={onclick} >{title}</button>
        </div>
    );

}

export default GridButton ;