import React from 'react';
import '../../i18n';
import { useTranslation } from 'react-i18next';

const NewPersonnel=()=>{
    const [t, i18n] = useTranslation();    
    return (
        i18n.language === "fa" ? 
        <div> 
            <div> 
                <label>نام :</label>
                <input
                    id="firstName"
                    name ="firstName"
                    type="text"                    
                >
                </input>
            </div>
            <div> 
                <label>نام خانوادگی</label>
                <input
                  id="lastName"
                  name ="lastName"
                  type="text" 
                >
                </input>
            </div>
            <br/>          
        </div>
        :
        <div> 
        <div> 
            <label>First Name :</label>
            <input
                id= "firstName"
                name ="firstName"
                type="text" 
            >
            </input>
        </div>
        <div> 
            <label>Last Name: </label>
            <input
              id="lastName"
              name ="lastName"
              type="text"
            >
            </input>
        </div>
        <br/>       
    </div>
    );
}
export default NewPersonnel;