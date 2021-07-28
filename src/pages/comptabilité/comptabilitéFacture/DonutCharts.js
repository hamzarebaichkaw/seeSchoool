import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import ReactApexChart from "react-apexcharts";
import { Box } from "@material-ui/core";
import axios from "axios";
// components
import Widget from "../../../components/Widget/Widget";
import { Button } from "../../../components/Wrappers";
 

// const [mat, setmat] =useState([]);
// function  reg  (  ) {
//  const d= sessionStorage.getItem('user_id')
//   axios
//     .get(`http://www.pointofsaleseedigitalaency.xyz/public/APIUser/ChartFornisseurAdmin`)
//     .then(res => {
//    setmat(res.data)
//     }, 2000)
// } 
// reg()

export default function Charts(props) {
  const [CoursM, seCoursM] = useState([]);
          useEffect(function () {
            const d= sessionStorage.getItem('user_id')
            axios
              .get(`http://www.pointofsaleseedigitalaency.xyz/public/APIUser/ChartFactureAdmin`)
              .then(res => {
                seCoursM(res.data)
                
              }, 2000)
              .catch(() => {
                console.log("ERROR")
              });
          }, []);



  const themeOptions = theme => {
  
    return {
      labels: [  "livré", "En cours", ],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ],
      colors: [
        theme.palette.primary.main,
        theme.palette.secondary.main,
        theme.palette.warning.main,
        theme.palette.success.light,
        theme.palette.info.main
      ],
      options: {
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ],
        colors: [
          theme.palette.primary.main,
          theme.palette.secondary.main,
          theme.palette.warning.main,
          theme.palette.success.light,
          theme.palette.info.main
        ]
      },
      options2: {
        dataLabels: {
          enabled: false
        },
  
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                show: false
              }
            }
          }
        ],
        legend: {
          position: "right",
          offsetY: 0,
          height: 230
        },
        colors: [
          theme.palette.primary.main,
          theme.palette.secondary.main,
          theme.palette.warning.main,
          theme.palette.success.light,
          theme.palette.info.main
        ]
      },
      options3: {
        labels: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        theme: {
          monochrome: {
            enabled: true
          }
        },
        colors: [
          theme.palette.primary.main,
          theme.palette.secondary.main,
          theme.palette.warning.main,
          theme.palette.success.light,
          theme.palette.info.main
        ],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ]
      }
    };
  };
  
  const values = {
    series: [70,30],
  
  };
  
      const theme = useTheme();
  
      const [state, setState] = useState(values);
      const reset = () => {
        setState({
          ...state,
          series: CoursM.series
        });
      };
 
   
 

  // local

  return (
    
    <>
      <Grid container spacing={4}>
        <Grid item md={10} xs={12}>
          <Widget title={"Gestion des fournisseurs"} noBodyPadding>
            <ReactApexChart
              options={themeOptions(theme)}
              series={state.series}
              type="donut"
              height="380"
              stroke={""}
            />
          </Widget>
          <Button
                  variant="contained"
                  onClick={() => reset()}
                  color="success"
                >
                  reset
                </Button>
        </Grid>
 
      </Grid>
    </>
  );
}
