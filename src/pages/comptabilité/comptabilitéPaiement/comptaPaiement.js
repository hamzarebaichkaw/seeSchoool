import React from 'react'
import { Link,Button, Avatar } from "../../../components/Wrappers/Wrappers";
import { Grid, Table,
    TableRow,
    TableHead,
    TableBody,
    TableCell, } from "@material-ui/core";
    import MUIDataTable from "mui-datatables";


export default function ComptaPaiement() {


    
    return(
    
    <div>
         <h1>Gestion de Paiement</h1>
         <br />
    <div style={{display:'flex', justifyContent:'space-evenly'}}>
    <Button style={{backgroundColor: "#ba181b",width:'150px'}}
     color="primary"
     variant="contained"
    //   onClick={()=>{reg("1")}} 
   > Etudiant
   </Button> 
   <Button style={{backgroundColor: "grey",width:'150px'}}
     color="primary"
     variant="contained"
    //   onClick={()=>{reg("1")}} 
   > Professeur
   </Button> 
   <Button style={{backgroundColor: "grey",width:'150px'}}
     color="primary"
     variant="contained"
    //   onClick={()=>{reg("1")}} 
   > Ouvriers
   </Button> 
   <Button style={{backgroundColor: "grey",width:'150px'}}
     color="primary"
     variant="contained"
    //   onClick={()=>{reg("1")}} 
   > Autre charge
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
    //   onClick={()=>{reg("1")}} 
   > Charte
   </Button> 
    </div>
    
    
             <br />
         <br />
         <div>
         <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="Gestion de paiement"
        //   data={  mat}
            columns={[ "Order Id"," Nom & Prenom", "Prix","Quantité", "Prix", "Date de paiement" ,"Status", ]}
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