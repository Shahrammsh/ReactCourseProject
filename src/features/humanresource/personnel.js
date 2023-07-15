import React  from "react";
import { Grid } from "../../components";
import {useState } from "react";

const Personnel = () =>{  
        const [gridOptions , setGridOptions ] =useState ( {
                url  : 'http://localhost:3001/personnels' ,
                columnItem: [
                        {name : 'id' ,  title : 'شناسه' ,isEditable : false , type: Number , isFilterable : false , isSortable: true   } , 
                        {name : 'firstName' , title : 'نام' ,isEditable : false , type:String , isFilterable : false , isSortable: true} ,
                        {name : 'lastName' , title : 'نام خانوادگی' ,isEditable : false , String, isFilterable : false , isSortable: true}
                ] , 
                height: 500 ,
                width: 800 , 
                numberRows : 10 ,
                allowInsert: true,
                lang: ''
        } );

        return (
                <Grid options={gridOptions}> </Grid>
        );
};

export default Personnel;