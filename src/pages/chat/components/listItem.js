import React from "react";
import Avatar from "./avatar";
import styles from "./listItem.module.scss";

export default function ListItem({
  name,
  text,
  time,
  avatar,
  unreadMessageCount,
  selected = false,
  onClick,
}) {
  return (
    <div
      className={
        styles["list-item"] + " " + (selected ? styles["selected"] : "")
      }
      onClick={onClick}
    >
      <div className={styles["avatar"]}>
        <Avatar name={name} url={avatar} />
      </div>
      <div className={styles["name"]}>{name}</div>
      <div className={styles["message"]}>{text}</div>
      <div className={styles["time"]}>{time}</div>
      <div className={styles["info"]}>
        <div>{unreadMessageCount}</div>
      </div>
    </div>
  );
}
