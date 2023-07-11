import React ,{useState , useEffect} from "react";
import GridRow from "./grid-row";
import styles from '../../assests/CSS/grid-view.module.css';
import GridInsertButton from "./grid-insert-button";
import GridPagination from "./grid-pagination";

const Grid =({options} )=>
{    
    const [selectUrl , setGridUrl ] = useState(options.url) ;
    const [data , setData ] = useState([]);
    const [totalCount , setTotalCount] = useState(0) ;
    const [currentPage , setCurrentPage ] = useState(0) ;
    const [numberRows , setNumberRows ] = useState(options.numberRows) ;
    const [pageCount , setPageCount] = useState();
    
    
    useEffect ( ()=>{
        console.log(444444) ;
        console.log(currentPage);
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
       <>
       {options.allowInsert ??<GridInsertButton title="درج جدید"></GridInsertButton>  }
       <div className={styles['grid-container']} > {rows}</div>
       {options.allowPagination ??
        <GridPagination 
            currentPage={currentPage} 
            pageCount={pageCount} 
            onPagingClick={(pageNo)=> setCurrentPage(pageNo)}  ></GridPagination>}
      
       </>
        );

}
export default Grid;