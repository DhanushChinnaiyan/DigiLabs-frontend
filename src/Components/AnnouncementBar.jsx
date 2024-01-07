import React, { useEffect } from "react";
import styles from "./Styles/Styles.module.css";

const AnnouncementBar = () => {
  return (
    <div className={styles.AnnouncementBar_Container}>
      <span><span>Announcement</span></span>
      <p>We are happy to announce that we raise $2 Million in Seed Funding</p>
    </div>
  );
};

export default AnnouncementBar;
