import React from "react";
import styles from "./SignIn.module.css";
import logo from "assets/CodeG-Logo.png";

const SignIn = () => {
  return (
    <div className={styles["signin-screen"]}>
      <div className={styles["codeG-logo__container"]}>
        <img className={styles["codeG-logo"]} src={logo} alt="CodeG logo" />
        <p className={styles["codeG-logo-name"]}>
          CODE<span>G</span>
        </p>
      </div>
      <div className={styles["signin-card"]}>
        <form action="" className={styles["signin-form__container"]}>
          <div className={styles["signin-input__container"]}>
            <label
              className={styles["signin-input-label"]}
              htmlFor="signinEmail"
            >
              Enter your Email:
            </label>
            <input
              className={styles["signin-input-field"]}
              type="text"
              id="signinEmail"
              name="userEmail"
            />
          </div>

          <div className={styles["signin-input__container"]}>
            <label
              className={styles["signin-input-label"]}
              htmlFor="signinPassword"
            >
              Enter your password:
            </label>
            <input
              className={styles["signin-input-field"]}
              type="password"
              id="signinPassword"
              name="password"
            />
          </div>
          <button className={styles["signin-form-button"]} type="submit">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
