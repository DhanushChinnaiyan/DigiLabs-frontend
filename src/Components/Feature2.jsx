import React, { useEffect } from "react";
import styles from "./Styles/Styles.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { div } from "@mui/material";
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
  width:100,
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
    totalAmountOfPurchase: 700,
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
          const convertedTarget = target - targets[index - 1];
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
    <div className={styles.Feature2_Main_Container}>
      <div className={styles.Feature2_Container}>
      <div className={styles.feature2Content}>
      <div className={styles.feature2Content_details}>
      <div>Elevating Card Programs with Cutting-Edge Technology</div>
      <div>
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua.
      </div>
      </div>
      <div className={styles.feature2Content_action}>
        Compare all Pro features <ArrowForwardIcon sx={{fontSize:"20px"}} />
      </div>
      </div>
      <div className={styles.feature2Media}>
        <div className={styles.feature2Media_Left}>
        <div >
          <img src={mobileImage} alt="Mobile Image" />
        </div>
        </div>
        <div className={styles.feature2Media_Right}>
        <img src={starImage} alt="Star Image" />
        <div className={styles.feature2Media_Right_Contant}>      
            <div className={styles.feature2Media_details}>
              <div>
                <div>Spending</div>
                <div>
                  <CreditCardIcon sx={{color:"#2C3E50",fontSize:"12.984px"}}/>
                  {featureData.visaCardNumber} visa card
                </div>
              </div>
              <ZoomOutMapIcon sx={{color:"#2C3E50"}}/>
            </div>
            <div className={styles.feature2_Card_details}>
              <div className={styles.feature2_currency}>
                <div>{featureData.amount}</div>
                <div>{featureData.currency}</div>
              </div>
              <div className={styles.feature2_Purchase_details}>
                <div>vs last week</div>
                <div>Last Purchased ( Feb 24 19:59 UTC-5 )</div>
              </div>
              <div className={styles.feature2_Amount_details}>
                <div>
                  <div>400 USD</div>
                  <div>1000 USD</div>
                  <div>5000 USD</div>
                </div>
                <div>
                  {targetValues.map((value, index) => (
                    <BorderLinearProgress
                      variant="determinate"
                      value={progressValues[index]}
                      key={value}
                    />
                  ))}
                </div>
              </div>
            </div>      
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Feature2;
