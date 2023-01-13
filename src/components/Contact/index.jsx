import React from "react";
import styles from "./Contact.module.css";
import ContactInput from "./ContactInput";
import { formData } from "./formData";

const Contact = () => {
  return (
    <div className={styles.contactUs}>
      <h1>CONTACT US</h1>
      <div className={styles.contactFormGroup}>
        {formData.map(({ label, type }, index) => {
          return <ContactInput label={label} key={index} type={type} />;
        })}
        <button>SUBMIT</button>
      </div>
    </div>
  );
};

export default Contact;
