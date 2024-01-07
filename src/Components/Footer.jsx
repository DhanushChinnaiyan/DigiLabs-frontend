import React, { useEffect } from "react";
import styles from "./Styles/Styles.module.css";
import { Link, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";

const Footer = () => {
  const pagesData = [
    {
      title: "Company",
      sub: ["About us", "Pricing", "Contact us", "Features"],
    },
    {
      title: "Product",
      sub: ["Figma design system", "Ios kit", "Android kit", "Wireframe"],
    },
    {
      title: "Resources",
      sub: ["Templates", "Landing pages", "Documentation", "Comp library"],
    },
    {
      title: "Legal",
      sub: [
        "Privacy policy",
        "Terms & Conditions",
        "Disclaimer",
        "Affiliate programme",
      ],
    },
    {
      title: "Support",
      sub: ["Help centre", "Raise ticket", "Report", "Refund"],
    },
  ];
  return (
    <div className={styles.Footer_Main_Container}>
      <div className={styles.Footer_Container}>
        <div className={styles.Footer_Details}>
          <div className={styles.Footer_description}>
          <div>
            <Typography
              variant="h6"
              noWrap
              component="p"
              sx={{
                mr: 2,
                fontWeight: 700,
                color: "black",
                textDecoration: "none",
              }}
            >
              Mode UI
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{textAlign:"center"}}>
              Mode UI is a comprehensive design system that empowers designers
              and developers to create cohesive and visually stunning user
              interfaces across various platforms and devices
            </Typography>
          </div>
          </div>
          <div className={styles.Footer_pages}>
            {pagesData.map(({ title, sub }, index) => (
              <div key={index}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, color: "black" }}
                >
                  {title}
                </Typography>
                {sub.map((subPage, subIndex) => (
                  <Typography key={subIndex} variant="body2">
                    <Link href="#" color="textSecondary" underline="none">
                      {subPage}
                    </Link>
                  </Typography>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.Footer_SocialIcons}>
          <div>
            <GitHubIcon  sx={{fontSize:"20px",color:"#5A6475"}}/>
            <LinkedInIcon sx={{fontSize:"20px",color:"#5A6475"}}/>
            <LanguageIcon sx={{fontSize:"20px",color:"#5A6475"}}/>
          </div>
          <div>© 2023 Mode UI Inc. All Rights Reserved.</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
