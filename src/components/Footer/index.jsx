import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <h6>Copyright @ 2016. PT Company</h6>
      <div className={styles.socmed}>
        <a href="https://www.facebook.com">
          <img src="/img/facebook-official.png" alt="" width={25} />
        </a>
        <a href="https://www.twitter.com">
          <img src="/img/twitter.png" alt="" width={25} />
        </a>
      </div>
    </div>
  );
}
