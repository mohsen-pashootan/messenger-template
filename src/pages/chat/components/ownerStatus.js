import React from "react";
import { Link } from "react-router-dom";
import styles from "./ownerStatus.module.scss";
import Avatar from "./avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function OwnerStatus({
  userName,
  list,
  AddContact,
  onListModeClick,
}) {
  return (
    <React.Fragment>
      <div className={styles["pointer-container"]}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          size="lg"
          color="#009588"
          className={styles["pointer"]}
          onClick={onListModeClick}
        />
      </div>
      <div className={styles["my-status-container"]}>
        <div className={styles["avatar"]}>
          <Avatar className={styles["img"]} name={userName} url="/avatar.png" />
        </div>
        <div className={styles["name"]}>
          <p>{userName}</p>
        </div>
        <div>
          <p className={styles["describe"]}>
            About : Eget nunc lobortis mattis aliquam faucibus purus in massa
            tempor. Amet porttitor eget dolor morbi. Eget duis at tellus at urna
            condimentum mattis.
          </p>
        </div>
        <div>
          <ul>
            <p>
              <strong>Contact Names:</strong>
            </p>
            {list.map((item) => (
              <li key={item.id} onClick={() => AddContact(item.id)}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <Link to="/" className={styles["log-out"]}>
          Log Out
        </Link>
      </div>
    </React.Fragment>
  );
}
