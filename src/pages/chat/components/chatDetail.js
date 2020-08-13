import React, { useState, useRef, useEffect } from "react";
import TitleBar from "./titleBar";
import ContactStatus from "./contactStatus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisV,
  faTimes,
  faPaperPlane,
  faPaperclip,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Avatar from "./avatar";
import styles from "./chatDetail.module.scss";

export default function ChatDetail({
  name,
  messages,
  avatar,
  onSubmit,
  selectedChatId,
  onClose,
}) {
  const [text, setText] = useState("");
  const [info, setInfo] = useState("chat");
  const myInput = useRef(null);
  const lastEmptyMessage = useRef(null);

  useEffect(() => {
    myInput.current.focus();
    lastEmptyMessage.current.scrollIntoView({ behavior: "smooth" });
  }, [selectedChatId, messages]);

  function handleSubmitMessage() {
    if (text !== "") {
      onSubmit(text);
      setText("");
      myInput.current.focus();
    }
  }
  function handleKeyDown(e) {
    if (e.keyCode === 13) {
      handleSubmitMessage();
    }
  }

  function handleContactStatus() {
    setInfo("chatInfo");
  }

  function handleStatusClose() {
    setInfo("chat");
  }
  const chatMode = info === "chat";

  return (
    <>
      <TitleBar
        first={
          <FontAwesomeIcon
            onClick={onClose}
            icon={faTimes}
            size="lg"
            color="#009588"
            className={styles["pointer"]}
          />
        }
        middle={
          <div className={styles["app-title"]}>
            <Avatar name={name} url={avatar} />
            <div className={styles["name"]}>{name}</div>
          </div>
        }
        last={
          chatMode ? (
            <FontAwesomeIcon
              onClick={handleContactStatus}
              icon={faEllipsisV}
              size="lg"
              color="#009588"
              className={styles["pointer"]}
            />
          ) : (
            <FontAwesomeIcon
              onClick={handleStatusClose}
              icon={faArrowRight}
              size="lg"
              color="#009588"
              className={styles["pointer"]}
            />
          )
        }
      />
      <div className={styles["chat-box"]}>
        {info === "chatInfo" ? (
          <ContactStatus name={name} avatar={avatar} />
        ) : (
          <>
            <ul className={styles["messages-panel"]}>
              {messages.map((message, index) => {
                return (
                  <li
                    ref={
                      messages.length === index + 1 ? lastEmptyMessage : null
                    }
                    className={styles[message.me ? "me" : ""]}
                    key={message.id}
                  >
                    {message.text}
                    <p>{message.time}</p>
                  </li>
                );
              })}
            </ul>
            <div className={styles["input-section"]}>
              <input
                ref={myInput}
                type="text"
                value={text}
                onKeyDown={handleKeyDown}
                onChange={(e) => setText(e.target.value)}
              />
              <FontAwesomeIcon
                onClick={handleSubmitMessage}
                icon={text !== "" ? faPaperPlane : faPaperclip}
                color="#009588"
                className={styles["send"] + " " + styles["pointer"]}
                size="lg"
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}
