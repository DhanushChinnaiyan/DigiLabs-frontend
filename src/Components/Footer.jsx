import React, { useEffect } from "react";
import styles from "./Styles/Styles.module.css";
import { Box, Link, Typography } from "@mui/material";

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
    <div className={styles.Footer_Container}>
      <Box component="div">
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
        <Typography variant="body1" color="textSecondary">
          Mode UI is a comprehensive design system that empowers designers and
          developers to create cohesive and visually stunning user interfaces
          across various platforms and devices
        </Typography>
      </Box>
      <Box component="div">
        {pagesData.map(({ title, sub }, index) => (
          <div key={index}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: "black" }}>
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
      </Box>
    </div>
  );
};

export default Footer;
