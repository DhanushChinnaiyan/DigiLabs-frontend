import React, { useEffect } from "react";
import styles from "./Styles/Styles.module.css";
import { Button } from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const CallToAction = () => {
  return (
    <div className={styles.CallToAction_Main_Container}>
      <div className={styles.CallToAction_Container}>
        <div>Unlock Limitless Possibilities with Our New Card Solutions</div>
        <div>
          <Button
            variant="contained"
            sx={{ bgcolor: "#582066",fontSize:"calc(10px + 0.1vw)" }}
            className={styles.heroButton}
            endIcon={<CreditCardIcon />}
          >
            Unlock your Card
          </Button>
          <Button
            variant="contained"
            sx={{ bgcolor: "#EEEFEF", color: "#5A6475", fontSize:"calc(10px + 0.1vw)"}}
            className={styles.heroButton}
            endIcon={<SupportAgentIcon />}
          >
            Customer support
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
