import React from "react";
import styles from "./Navbar.module.css";
import NavItem from "./NavItem";
import { navData } from "./navData";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.navTitle}>Company</h1>
      <ul className={styles.navItems}>
        {navData.map((item) => (
          <NavItem navData={item} key={item.title} />
        ))}
      </ul>
    </nav>
  );
}
