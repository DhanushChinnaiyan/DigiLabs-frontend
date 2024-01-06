import React, { useEffect } from 'react'
import styles from './Styles/Styles.module.css'
import LanguageIcon from '@mui/icons-material/Language';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import LockIcon from '@mui/icons-material/Lock';
import { Grid, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Feature1 = () => {
  const features = [
    {
      logo:<LanguageIcon/>,
      name:"Globally Accepted",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "
    },
    {
      logo:<VpnKeyIcon/>,
      name:"Biometric Integrated",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "
    },
    {
      logo:<LockIcon/>,
      name:"Fully Secured",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "
    },
  ]
  return (
    <div className={styles.Feature1_Container}>
      <Typography variant="h3">Elevating Card Programs with Cutting-Edge Technology</Typography>
      <Typography variant="body1">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
      <Typography variant="subtitle1">Compare all Pro features <ArrowForwardIcon/></Typography>
      <Grid container spacing={2}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={4} key={index}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>{feature.logo}</div>
              <Typography variant="h5">{feature.name}</Typography>
              <Typography variant="body2">{feature.description}</Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Feature1