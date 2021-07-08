import React, { useState, useEffect } from "react"; 
import { Grid, Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell, } from "@material-ui/core";
  import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import MUIDataTable from "mui-datatables";
import useStyles from "./styles";
 
// components
import Widget from "../../../components/Widget/Widget";
 
 
 
import axios from "axios";
import * as moment from 'moment'
 
import AddCircleIcon from '@material-ui/icons/AddCircle';
 

   
 

 
 
 
export default function Inscription() {
  const classes = useStyles();
 


  const [CoursM, seCoursM] = useState([]);
 
  useEffect(function () {
    const d= sessionStorage.getItem('user_id')
    axios
    
      .get(`http://www.pointofsaleseedigitalaency.xyz/public/APIUser/ClassesAdmin`)
      .then(res => {
        seCoursM(res.data.result)
        // console.log(res.data.result)
      }, 2000)
  
      .catch(() => {
        console.log("ERROR")
      });
  }, []);
  const [mat, setmat] =useState([]);
  function  reg  ( id ) {
    console.log( id)
   const d= sessionStorage.getItem('user_id')
   
    axios
      // .get(`http://www.pointofsaleseedigitalaency.xyz/public/APIUser/ProfileCoursByStudent/${d}/${id}`)
      .get(`http://www.pointofsaleseedigitalaency.xyz/public/APIUser/Students`)
      .then(res => {

     setmat(res.data)
      // console.log( res.data)
      }, 2000)
  
      
  } 



 




  return (
    <div>
<div style={{display:'flex', justifyContent:'space-between'}}>
   <h1>Gestion d'inscription </h1>
   <Button variant="contained" color="primary" href="http://localhost:3000/#/admin/Register" style={{borderRadius:50, letterSpacing:4}}>
      Creation d'un compte  <AddCircleIcon />
      </Button>
      </div>
 <div style={{backgroundColor:'',}}>
         <br />
         <div style={{display:'flex', justifyContent:'space-between', }}>
           {

CoursM.map(

  (m)=>( 

      
  <Button
  color="primary"
  variant="contained"
  className={classes.button}
  onClick={()=>{reg(m.id)}} 
>
{m.matieress }
</Button>
       )

       ) }
         </div>
         <br />
         <br />
         <br />
         <h2 style={{textAlign:'center'}}  > List Etudiants </h2>
         
         <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="List Etudiants"
           
          
            data={ mat }
            columns={[    "ID","Nom et prenom", "Lieu","date de naissance","Class"]}
            options={{
              filterType: "checkbox"
            }}
          />
        </Grid>
       
      </Grid>

 
 
    
  
          {/* </Widget> */}
          </div>
          </div>
  );
}