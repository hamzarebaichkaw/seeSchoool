import React from 'react';
import { Link,Button, Avatar } from "../../../components/Wrappers/Wrappers";
import { Grid, Table,
    TableRow,
    TableHead,
    TableBody,
    TableCell, } from "@material-ui/core";
    import MUIDataTable from "mui-datatables";
import Donut from './DonutCharts';
import ReactApexChart from './DonutCharts'

export default function ComptaFacture() {
   
    return(
        <div>
            <h1>Gestion des Factures</h1>
            <br />
            <div style={{display:'flex', justifyContent:'space-evenly'}}>
            <Button style={{backgroundColor: "#ba181b",width:'150px'}}
             color="primary"
             variant="contained"
            //   onClick={()=>{reg("1")}} 
           > tableau
           </Button> 
           <Button style={{backgroundColor: "grey",width:'150px'}}
             color="primary"
             variant="contained"
            //   onClick={()=>{reg("1")}} 
           > chart
           </Button> 
        
            </div>
           
            <br />
            <br />
         
            {/* <Donut /> */}
            {/* <ReactApexChart /> */}
                     <br />
                 <br />
                 <div>
                 <Grid container spacing={4}>
                <Grid item xs={12}>
                  <MUIDataTable
                    title="Gestion des fournisseurs"
                //   data={  mat}
                    columns={[ "Order Id","Nom de Fournisseur", "Total TTC","Quantité",  "Date de paiement", "Status", "Actions"]}
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