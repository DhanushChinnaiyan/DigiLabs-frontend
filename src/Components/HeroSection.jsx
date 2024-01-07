import React from 'react'
import styles from './Styles/Styles.module.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button, Container,  } from '@mui/material';

const HeroSection = () => {
  return (
    <div className={styles.HeroSection_Container}>
      <div className={styles.HeroSection_Main_Container}>
     
      <div className={styles.title1}>Seamless experience</div>
      <div className={styles.title2}>Unleashing the Next Generation of Card Solutions</div>
      <div className={styles.para}>
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud
      </div>
      
      <div className={styles.heroButton}>
      <Button variant="contained" sx={{bgcolor:"#582066"}} className={styles.heroButton} endIcon={<ArrowForwardIcon />}>
        Unlock your Card
      </Button>
      </div>
      <div className={styles.heroSpan}>
        *No credit card required
      </div>

    </div>
    </div>
  )
}

export default HeroSection