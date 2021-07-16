import React, { useState } from "react";
import { Link,Button, Avatar } from "../../../components/Wrappers/Wrappers";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Grid, Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell, } from "@material-ui/core";
  import axios from "axios";
import MUIDataTable from "mui-datatables";
export default function ClassesAdmin() {
  const [showText, setShowText] = useState(false);
  const onClick = () => setShowText(true);


  const [mat, setmat] =useState([]);
  function  reg  ( nv ) {
    
   const d= sessionStorage.getItem('user_id')
    axios
      // .get(`http://www.pointofsaleseedigitalaency.xyz/public/APIUser/ProfileCoursByStudent/${d}/${id}`)
      .get(`http://www.pointofsaleseedigitalaency.xyz/public/APIUser/ClassesMAdmin/${nv}`)
      .then(res => {
     setmat(res.data)
      console.log( res.data)
      }, 2000)
  } 

  const Text = () =>
  <div style={{display:'flex', justifyContent:'space-evenly'}} >
  <Button style={{backgroundColor: "#0E0D47",width:'150px'}}
     color="primary"
     variant="contained"
     onClick={()=>{reg("bac")}} 
   > Bac
   {/* {m.matieress } */}
   </Button>
   <Button style={{backgroundColor: "#0E0D47",width:'150px'}}
     color="primary"
     variant="contained"
      onClick={()=>{reg("3eme")}} 
   > 3éme
   {/* {m.matieress } */}
   </Button>
   <Button style={{backgroundColor: "#0E0D47",width:'150px'}}
     color="primary"
     variant="contained"
    // onClick={()=>{reg(m.id)}} 
   > 2éme
   {/* {m.matieress } */}
   </Button>
   <Button style={{backgroundColor: "#0E0D47",width:'150px'}}
     color="primary"
     variant="contained"
    // onClick={()=>{reg(m.id)}} 
   > 1éme
   {/* {m.matieress } */}
   </Button>
    </div>;







  return (
    <div >
      <div style={{display:'flex', justifyContent:'space-between'}}>
      <h1>Gestion des Classes</h1>
      <Button variant="contained" color="secondary" href="http://localhost:3000/#/admin/Addmatiere" style={{borderRadius:'20px', letterSpacing:5,backgroundColor:'#9D0208',height:'50px'}}>
     Ajouter un niveau  <AddCircleIcon />
       </Button>
      </div>
      <br />
      <Button style={{backgroundColor: "#0E0D47",width:'150px'}}
   color="primary"
   variant="contained"
   onClick={onClick}
 > Secondary
 {/* {m.matieress } */}
 </Button> <br /> <br /> <br />
      {showText ? <Text /> : null}
 <br />
         <br />
         <br />
         <div>
         <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="Listes des Classes"
          data={  mat}
            columns={[ "id","Nom de class", "Capacité","Nombre des éléves",]}
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
