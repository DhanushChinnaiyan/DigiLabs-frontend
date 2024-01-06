import React from 'react'
import styles from './Styles/Styles.module.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button, Container, Typography } from '@mui/material';

const HeroSection = () => {
  return (
    <Container className={styles.HeroSection_Container}>
      <Typography variant="subtitle1" sx={{color:"#582066",fontWeight:"bold"}}>Seamless experience</Typography>
      <Typography variant="h3">Unleashing the Next Generation of Card Solutions</Typography>
      <Typography variant="body1">
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud
      </Typography>
      <Button variant="contained" sx={{bgcolor:"#582066"}} className={styles.heroButton} endIcon={<ArrowForwardIcon />}>
        Unlock your Card
      </Button>
      <Typography variant="body2" className={styles.heroSpan}>
        *No credit card required
      </Typography>
    </Container>
  )
}

export default HeroSection