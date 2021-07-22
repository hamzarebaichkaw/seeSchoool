import React, { useState, useEffect } from "react"; 
import { Grid, Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell, } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import useStyles from "./styles";
import { withStyles, useTheme } from '@material-ui/core/styles';
import FolderIcon from '@material-ui/icons/Folder';
// components
import Popup from 'reactjs-popup';
import Widget from "../../../components/Widget/Widget";
// import Table from "../../dashboard/components/Table/Table";
// data
import mock from "../../dashboard/mock";
import { Link,Button, Avatar } from "../../../components/Wrappers/Wrappers";
import axios from "axios";
import * as moment from 'moment'
import { CircularProgress } from "../../../components/Wrappers/Wrappers";
// const [mat, setmat] =  
export default function Assuidite() {
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
 
   const d= sessionStorage.getItem('user_id')
    axios
       
      .get(`http://www.pointofsaleseedigitalaency.xyz/public/APIUser/AssiduteAdmin/${id}`)
      .then(res => {
     setmat(res.data)
     
      }, 2000)
  } 
  return (
<div>
   <h1>Gestion des assuidités </h1>
 <div style={{backgroundColor:'',}}>
         <br />
         <div style={{display:'flex', justifyContent:'space-evenly', }}>
         <Button style={{backgroundColor: "#0E0D47",width:'150px'}}
     color="primary"
     variant="contained"
      onClick={()=>{reg("1")}} 
   > Eleves
 
   </Button>
   <Button style={{backgroundColor: "#0E0D47",width:'150px'}}
     color="primary"
     variant="contained"
      onClick={()=>{reg("2")}} 
   > Professeurs
   {/* {m.matieress } */}
   </Button>
   <Button style={{backgroundColor: "#0E0D47",width:'150px'}}
     color="primary"
     variant="contained"
     onClick={()=>{reg("3")}} 
   > Agents administratifs
 
   </Button>
      
         </div>
         <br />
         <br />
         <br />
     
<Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="Listes des absence"
          data={  mat}
            columns={[ "id", "Nom & Prenom", "nombre absence" , 
            {
              name: "Actions",
              options: {
                  customBodyRender: (value, tableMeta, updateValue) => {
                      return (
                        

                        <Button style={{backgroundColor: "#0E0D47" }} onClick={() => console.log( tableMeta.rowData["0"]) }>
                        Edit
                        </Button>
                      )
                  }
              }
          }
          
          ]}
            options={{
              filterType: "checkbox"
            }}
          />
        </Grid>
      </Grid>
      
          </div>
          </div>
  );
}
 
 












