import React from "react";
import ReactDOM from "react-dom";
import styles from "./sideBar.module.scss";

export default function SideBar({ toggle, onClose, children }) {
  // function handleToggle(props) {
  //   setToggle(props);
  // }

  return ReactDOM.createPortal(
    <div
      className={
        styles["par"] + " " + (toggle ? styles["show"] : styles["hide"])
      }
      onClick={onClose}
    >
      <div
        className={
          styles["chil"] + " " + (toggle ? styles["show"] : styles["hide"])
        }
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}
