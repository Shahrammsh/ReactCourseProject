import React ,{useState , useEffect} from "react";
import GridRow from "./grid-row";
import styles from '../../assests/CSS/grid-view.module.css';
import GridButton from "./grid-button";
import GridPagination from "./grid-pagination";
import { useTranslation } from "react-i18next";

const Grid =({options} )=>
{    
    const [t , i18n] = useTranslation();  

    const [selectUrl , setGridUrl ] = useState(options.url) ;
    const [data , setData ] = useState([]);
    const [totalCount , setTotalCount] = useState(0) ;
    const [currentPage , setCurrentPage ] = useState(0) ;
    const [numberRows , setNumberRows ] = useState(options.numberRows) ;
    const [pageCount , setPageCount] = useState();

    options.lang = i18n.language;
    console.log(1111111)
    console.log(t('NEW_INSERT_BUTTON_LABEL'));
    useEffect ( ()=>{
        fetch( `${selectUrl}?_page=${currentPage}&&_limit=${numberRows}`)
        .then(response =>{
                setTotalCount(response.headers.get('X-Total-Count')) ;
                setPageCount((Math.floor( totalCount/numberRows)) + 1);
                response.json().then(result=> setData( result)) ;             
            }   
        );     
    } ,[selectUrl , currentPage , numberRows , totalCount]) ;
    const rows = data.map((item)=>{ 
        return (<GridRow columnObject={item}></GridRow>); 
   
  }); 
    return (
       <div>

        
        
        
        {options.allowInsert ?  <GridButton title={t('NEW_INSERT_BUTTON_LABEL')}></GridButton> : null}
        <div className={styles['grid-container']} > {rows}</div>
       {options.allowPagination ??
        <GridPagination 
            currentPage={currentPage} 
            pageCount={pageCount} 
            onPagingClick={(pageNo)=> setCurrentPage(pageNo)}  ></GridPagination>}
      
       </div>
        );

}
export default Grid;