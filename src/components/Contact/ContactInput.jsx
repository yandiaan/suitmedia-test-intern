import React, { useRef, useState } from "react";
import styles from "./Contact.module.css";

export default function ContactInput({ label, type }) {
  const errorRef = useRef(null);

  const handleChange = (e) => {
    if (e.target.value === "") {
      setError(true);
    } else {
      if (
        type === "email" &&
        (!e.target.value.includes("@") || !e.target.value.includes("."))
      ) {
        setError(true);
        errorRef.current.innerHTML = "Invalid email address.";
      } else {
        setError(false);
      }
    }
  };

  const handleFocus = (e) => {
    if (e.target.value === "") {
      setError(true);
    }
  };

  const [error, setError] = useState(false);

  const inputEl = (type, name) => {
    return type !== "textarea" ? (
      <input
        type="text"
        name={name}
        onChange={handleChange}
        onFocus={handleFocus}
      />
    ) : (
      <textarea
        name={name}
        onChange={handleChange}
        onFocus={handleFocus}
        cols="30"
        rows="10"
      ></textarea>
    );
  };

  return (
    <div className={styles.contactForm}>
      <label htmlFor={label.toLowerCase()}>{label}</label>
      {inputEl(type, label.toLowerCase())}
      <p
        style={error ? { display: "block" } : { display: "none" }}
        ref={errorRef}
      >
        This Field is Required
      </p>
    </div>
  );
}
