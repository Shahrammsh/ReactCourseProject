import React  from "react";
import { Grid } from "../../components";
import {useState } from "react";
import GridOption from '../../services/grid-option';

const User = () =>{  
        const [gridOptions , setGridOptions ] =useState ( {
                url  : 'http://localhost:3005/users' ,
                columnItem: [
                        {name : 'id' ,  title : 'شناسه' ,isEditable : false , type: Number , isFilterable : false , isSortable: true   } , 
                        {name : 'firstName' , title : 'نام' ,isEditable : false , type:String , isFilterable : false , isSortable: true} ,
                        {name : 'lastName' , title : 'نام خانوادگی' ,isEditable : false , String, isFilterable : false , isSortable: true}
                ] , 
                height: 500 ,
                width: 800 , 
                numberRows : 10 ,
                allowInsert: false,
        } );

        return (
                <Grid options={gridOptions}> </Grid>
        );
};

export default User;