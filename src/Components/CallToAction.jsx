import React, { useEffect } from 'react'
import styles from './Styles/Styles.module.css'
import { Button, Typography } from '@mui/material'
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const CallToAction = () => {
  return (
    <div className={styles.CallToAction_Container}>

      <Typography>
      Unlock Limitless Possibilities with Our New Card Solutions
      </Typography>
      <Typography component="div">
      <Button variant="contained" sx={{bgcolor:"#582066"}} className={styles.heroButton} endIcon={<CreditCardIcon />}>
        Unlock your Card
      </Button>
      <Button variant="contained" sx={{bgcolor:"#EEEFEF",color:"#5A6475"}} className={styles.heroButton} endIcon={<SupportAgentIcon />}>
        Customer support
      </Button>
      </Typography>
    </div>
  )
}

export default CallToAction