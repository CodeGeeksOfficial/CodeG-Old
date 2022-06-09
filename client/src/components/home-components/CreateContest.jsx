//TODO Doubt: How to name react component file with more than one word like this ? What is the standard ?

import React from "react";
import styles from "./CreateContest.module.css";
import Illustration from "assets/Create-Contest-Illustration.png";

export default function Create_Contest_Card() {
  return (
    <div className={styles["create-contest-card"]}>
      <div className={styles["create-contest-card-content"]}>
        <div href="#" className={styles["create-contest-link"]}>
          <span>Create a Contest</span>
        </div>
        <div className={styles["create-contest-card-description"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          corporis nihil quas, fuga temporibus, veniam vero pariatur molestias
          quo totam illo recusandae incidunt iure mollitia eos magni! Aut, alias
          necessitatibus.
        </div>
      </div>
      <div className={styles["create-contest-card-illustration"]}>
        <img src={Illustration} alt="Create a contest" />
      </div>
    </div>
  );
}
