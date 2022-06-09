import React, { useState } from "react";
import styles from "./SignUp.module.css";
import { FaLongArrowAltRight } from "react-icons/fa";

const SignUp = () => {
  // const [displayName, setDisplayName] = useState(true);
  // const [displayEmail, setDisplayEmail] = useState(false);
  // const [displayUserName, setDisplayUserName] = useState(false);
  // const [displayGender, setDisplayGender] = useState(false);
  // const [displayLanguage, setDisplayLanguage] = useState(false);
  // const [displayOccupation, setDisplayOccupation] = useState(false);
  // const [displayInstitution, setDisplayInstitution] = useState(false);
  // const [displayYear, setDisplayYear] = useState(false);
  // const [displayPassword, setDisplayPassword] = useState(false);

  // const changeDisplay = (inputFieldName) => {
  //   switch (inputFieldName) {
  //     case "userFullName":
  //       setDisplayEmail(true);
  //       break;

  //     case "userEmail":
  //       setDisplayUserName(true);
  //       break;

  //     case "userName":
  //       setDisplayGender(true);
  //       break;

  //     case "gender":
  //       setDisplayLanguage(true);
  //       break;

  //     case "preferedLanguage":
  //       setDisplayOccupation(true);
  //       break;

  //     case "occupation":
  //       setDisplayInstitution(true);
  //       break;

  //     case "institution":
  //       setDisplayYear(true);
  //       break;

  //     case "passingYear":
  //       setDisplayPassword(true);
  //       break;

  //     default:
  //       break;
  //   }
  // };

  const inputFields = [
    {
      text: "Enter your name",
      id: "userFullName",
      inputType: "text",
      name: "userFullName",
      // isVisible: displayName,
    },

    {
      text: "Enter your email",
      id: "userEmail",
      inputType: "text",
      name: "userEmail",
      // isVisible: displayEmail,
    },

    {
      text: "Enter your username",
      id: "userName",
      inputType: "text",
      name: "userName",
      // isVisible: displayUserName,
    },

    {
      text: "Select your gender",
      id: "userGender",
      inputType: "select",
      name: "gender",
      options: ["Male", "Female", "Others", "Prefer not to say"],
      // isVisible: displayGender,
    },

    {
      text: "Select your prefered language",
      id: "preferedLanguage",
      inputType: "select",
      name: "preferedLanguage",
      options: ["c++", "java", "python"],
      // isVisible: displayLanguage,
    },

    {
      text: "Select your occupation",
      id: "occupation",
      inputType: "select",
      name: "occupation",
      options: ["Student", "Job aspirant", "Working professional", "Other"],
      // isVisible: displayOccupation,
    },

    {
      text: "Enter your institution",
      id: "institution",
      inputType: "text",
      name: "institution",
      // isVisible: displayInstitution,
    },

    {
      text: "Enter your passing year",
      id: "passingYear",
      inputType: "text",
      name: "passingYear",
      // isVisible: displayYear,
    },

    {
      text: "Enter password",
      id: "password",
      inputType: "password",
      name: "password",
      // isVisible: displayPassword,
    },
  ];

  return (
    <div className={styles["signup-screen"]}>
      <div className={styles["signup-card"]}>
        <div>
          <span className={styles["signup-card-welcomeMessage"]}>
            Welcome to CodeG!
          </span>
          <span className={styles["signup-card-welcomeMessage"]}>
            Let's begin the adventure
          </span>
        </div>
        <form action="" className={styles["signup-form__container"]}>
          {inputFields.map((inputField, key) => (
            <div key={key} className={styles["signup-form-section__container"]}>
              <label
                className={styles["signup-form-section-label"]}
                htmlFor={inputField.id}
              >
                {inputField.text}
              </label>
              <div className={styles["signup-form-section-input__container"]}>
                <span className={styles["signup-form-section-input-arrow"]}>
                  <FaLongArrowAltRight />
                </span>
                {inputField.inputType === "select" ? (
                  <select
                    className={styles["signup-form-section-input-field"]}
                    name={inputField.name}
                    id={inputField.id}
                    defaultValue="0"
                  >
                    <option value="0">Select an option</option>
                    {inputField.options.map((selectOption, key) => (
                      <option
                        key={key}
                        style={{
                          backgroundColor: "#363940",
                          textTransform: "capitalize",
                        }}
                        value={selectOption}
                      >
                        {selectOption}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    className={styles["signup-form-section-input-field"]}
                    type={inputField.inputType}
                    id={inputField.id}
                    name={inputField.name}
                    //Todo change key of user schema
                  />
                )}
                <button
                  // onClick={changeDisplay(inputField.name)}
                  className={styles["signup-form-section-input-button"]}
                >
                  Continue
                </button>
              </div>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
