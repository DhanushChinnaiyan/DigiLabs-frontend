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
    <div className={styles.Component1_Container}>
      {details.map((detail, index) => (
        <Grid item xs={12} md={6} key={index}>
          <Card>
            <CardContent sx={{ display: "grid", justifyContent: "center" }}>
              <Typography variant="h4" sx={{color:"#582066"}}>
                {detail.value}
              </Typography>
              <Typography variant="h6" component="h4">
                {detail.title}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {detail.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </div>
  );
};

export default Component1;
