import React, { useEffect } from "react";
import styles from "./Styles/Styles.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Typography } from "@mui/material";
import mobileImage from "../images/mobile.png";
import starImage from "../images/star.png";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import styled from "@emotion/styled";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#EFE4F2",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#582066",
  },
}));

const Feature2 = () => {
  const featureData = {
    visaCardNumber: "9349",
    amount: "127.14",
    currency: "USD",
    totalAmountOfPurchase: 5000,
  };

  const targetValues = [400, 1000, 5000];

  const calculateProgressValues = (progress, targets) => {
    const values = [];
    let currentValue = progress;

    targets.forEach((target, index) => {
      if (currentValue >= target) {
        values.push(100);
      } else if (index > 0) {
        if (currentValue > targets[index - 1]) {
          const convertedValue = currentValue - targets[index - 1];
          const convertedTarget = target - targets[index-1]
          values.push((convertedValue / convertedTarget) * 100);
        } else {
          values.push(0);
        }
      } else {
        values.push((currentValue / target) * 100);
      }
    });

    return values;
  };

  const progressValues = calculateProgressValues(
    featureData.totalAmountOfPurchase,
    targetValues
  );
  console.log(progressValues);
  return (
    <div className={styles.Feature2_Container}>
      <Typography variant="h3">
        Elevating Card Programs with Cutting-Edge Technology
      </Typography>
      <Typography variant="body1">
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua.
      </Typography>
      <Typography variant="subtitle1">
        Compare all Pro features <ArrowForwardIcon />
      </Typography>
      <Box>
        <Box component="div">
          <img src={mobileImage} alt="Mobile Image" />
        </Box>
        <Box component="div">
          <img src={starImage} alt="Star Image" />
          <Box component="Card">
            <Typography component="div">
              <Typography component="div">
                <Typography variant="h4" component="h6">
                  Spending
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  <CreditCardIcon />
                  {featureData.visaCardNumber} visa card
                </Typography>
              </Typography>
              <ZoomOutMapIcon />
            </Typography>
            <Typography component="div">
              <Typography component="div">
                <Typography variant="h4" component="h6">
                  {featureData.amount}
                </Typography>
                <Typography variant="h5" component="h6">
                  {featureData.currency}
                </Typography>
              </Typography>
              <Typography component="div">
                <Typography variant="body1" color="textSecondary">
                  vs last week
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  Last Purchased ( Feb 24 19:59 UTC-5 )
                </Typography>
              </Typography>
              <Typography component="div">
                <Typography component="div">
                  <Typography component="span" color="textSecondary">
                    400 USD
                  </Typography>
                  <Typography component="span" color="textSecondary">
                    1000 USD
                  </Typography>
                  <Typography component="span" color="textSecondary">
                    5000 USD
                  </Typography>
                </Typography>
                <Typography component="div">
                  {targetValues.map((value, index) => (
                    <BorderLinearProgress
                      variant="determinate"
                      value={progressValues[index]}
                      key={value}
                    />
                  ))}
                </Typography>
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Feature2;
