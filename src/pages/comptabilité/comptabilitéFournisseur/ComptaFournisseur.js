import React from 'react';
import { Link,Button, Avatar } from "../../../components/Wrappers/Wrappers";
import { Grid, Table,
    TableRow,
    TableHead,
    TableBody,
    TableCell, } from "@material-ui/core";
    import MUIDataTable from "mui-datatables";
import Donut from './DonutCharts';

export default function ComptaFournisseur() {


    return(
<div>
    <h1>Gestion des Fournisseurs</h1>
    <br />
    <div style={{display:'flex', justifyContent:'space-evenly'}}>
    <Button style={{backgroundColor: "#ba181b",width:'150px'}}
     color="primary"
     variant="contained"
    //   onClick={()=>{reg("1")}} 
   > Cantine
   </Button> 
   <Button style={{backgroundColor: "grey",width:'150px'}}
     color="primary"
     variant="contained"
    //   onClick={()=>{reg("1")}} 
   > Transport
   </Button> 
   <Button style={{backgroundColor: "grey",width:'150px'}}
     color="primary"
     variant="contained"
    //   onClick={()=>{reg("1")}} 
   > Sanitaire
   </Button> 
   <Button style={{backgroundColor: "grey",width:'150px'}}
     color="primary"
     variant="contained"
    //   onClick={()=>{reg("1")}} 
   > Imprimerie
   </Button> 
   <Button style={{backgroundColor: "grey",width:'150px'}}
     color="primary"
     variant="contained"
    //   onClick={()=>{reg("1")}} 
   > Autre
   </Button> 

    </div>
   
    <br />
    <br />
    <div style={{display:'flex', justifyContent:'space-evenly'}}>


    <Button style={{backgroundColor: "#ba181b",width:'150px'}}
     color="primary"
     variant="contained"
    //   onClick={()=>{reg("1")}} 
   > Tableau
   </Button> 
   <Button style={{backgroundColor: "#ba181b",width:'150px'}}
     color="primary"
     variant="contained"
    // onClick={ }
   > Charte
   </Button> 
    </div>
    {/* <Donut /> */}
    
             <br />
         <br />
         <div>
         <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="Gestion des fournisseurs"
        //   data={  mat}
            columns={[ "Order Id"," Fournisseur", "Produit","Quantité", "Prix", "Date d'achat", "Status", "Actions"]}
            options={{
              filterType: "checkbox"
            }}
          />
        </Grid>
      </Grid>
         </div>
</div>



    )
}