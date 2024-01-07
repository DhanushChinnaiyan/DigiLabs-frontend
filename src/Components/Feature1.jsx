import React, { useEffect } from 'react'
import styles from './Styles/Styles.module.css'
import LanguageIcon from '@mui/icons-material/Language';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import LockIcon from '@mui/icons-material/Lock';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Feature1 = () => {
  const features = [
    {
      logo:<LanguageIcon sx={{color:'#582066'}}/>,
      name:"Globally Accepted",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "
    },
    {
      logo:<VpnKeyIcon sx={{color:'#582066'}}/>,
      name:"Biometric Integrated",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "
    },
    {
      logo:<LockIcon sx={{color:'#582066'}}/>,
      name:"Fully Secured",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "
    },
  ]
  return (
    <div className={styles.Feauture1_Main_container}>
      <div className={styles.Feature1_Container}>
      <div className={styles.Feature1_Contents}>
      <div >Elevating Card Programs with Cutting-Edge Technology</div>
      <div >consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
      <div >Compare all Pro features <ArrowForwardIcon sx={{fontSize:"20px"}}/></div>
      </div>
      <div className={styles.Feature1_features}>
        {features.map((feature, index) => (
          <div item xs={12} md={4} key={index}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>{feature.logo}</div>
              <div className={styles.featureName}>{feature.name}</div>
              <div className={styles.featureDescription}>{feature.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Feature1