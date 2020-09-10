import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.scss";

export default function Home() {
  const nameInput = useRef();
  const [name, setName] = useState("");

  function handleUsername() {
    setName(nameInput.current.value);
  }

  function handleKeyDown(e) {
    if (e.keyCode === 13) {
      console.log("clicked");
    }
  }

  return (
    <div className={styles["home-wrapper"]}>
      <div className={styles["home-container"]}>
        <div className={styles["home-title"]}>
          <h1> HELLO DEAR CUSTOMER</h1>
        </div>
        <div className={styles["home-name"]}>
          <h3>Please Write Your Name:</h3>
          <input
            className={styles["home-input"]}
            ref={nameInput}
            onChange={handleUsername}
            onKeyDown={handleKeyDown}
            type="text"
            placeholder="Your name.."
          ></input>
        </div>

        <Link
          className={styles["home-button"]}
          to={`/chat-panel/${name}`}
          params={{ name }}
        >
          Start A Conversation
        </Link>
      </div>
    </div>
  );
}
