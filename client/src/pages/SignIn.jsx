import React from "react";
import styles from "./SignIn.module.css";
import logo from "assets/images/CodeG-Logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  let navigate = useNavigate();
  const signInFormSubmitHandler = async (e) => {
    e.preventDefault();
    const signinForm = document.getElementById("signin-form");
    const data = new FormData(signinForm);

    let signinformData = {};

    for (const [key, value] of data) {
      signinformData[key] = value;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { response } = await axios.post(
        "http://localhost:5000/auth/login",
        signinformData,
        config
      );
      console.log("User logged in!!");
      localStorage.setItem("userInfo", JSON.stringify(response));

      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles["signin-screen"]}>
      <div className={styles["codeG-logo__container"]}>
        <img className={styles["codeG-logo"]} src={logo} alt="CodeG logo" />
        <p className={styles["codeG-logo-name"]}>
          CODE<span>G</span>
        </p>
      </div>
      <div className={styles["signin-card"]}>
        <form
          action=""
          className={styles["signin-form__container"]}
          id="signin-form"
        >
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
              required
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
              required
            />
          </div>
          <button
            className={styles["signin-form-button"]}
            type="submit"
            onClick={signInFormSubmitHandler}
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
