import React from "react";
import styles from "./Navbar.module.css";

export default function NavItem({ navData }) {
  return (
    <li className={styles.dropdown}>
      <a href={navData.path}>{navData.title}</a>
      {navData.hasOwnProperty("dropDown") ? (
        <ul className={styles.dropdownItems}>
          {navData.dropDown.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      ) : (
        ""
      )}
    </li>
  );
}
