import React, { useEffect } from "react";
import styles from "./Styles/Styles.module.css";
import { Card, CardContent, Grid, Typography } from "@mui/material";

const Component1 = () => {
  const details = [
    {
      title: "Customers",
      description:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
      value: "2 Million",
    },
    {
      title: "Downloads",
      description:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
      value: "1K",
    },
    {
      title: "Transaction",
      description:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
      value: "$73 Million",
    },
    {
      title: "Latest Version",
      description:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
      value: "2.0",
    },
  ];
  return (
    <div className={styles.Component1_Main_Container}>
      <div className={styles.Component1_Container}>
      {details.map((detail, index) => (
        <Grid item xs={12} md={6} key={index} maxWidth={300}>
          <Card sx={{boxShadow:0}}>
            <CardContent sx={{ display: "grid", justifyContent: "center" }}>
              <Typography variant="h4" sx={{color:"#582066",textAlign:"center"}}>
                {detail.value}
              </Typography>
              <Typography variant="h6" component="h4" sx={{textAlign:"center"}}>
                {detail.title}
              </Typography>
              <Typography variant="body1" color="textSecondary" sx={{textAlign:"center"}}>
                {detail.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </div>
    </div>
  );
};

export default Component1;
