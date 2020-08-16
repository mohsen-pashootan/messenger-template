import React, { useState, useRef, useEffect } from "react";
import TitleBar from "./titleBar";
import SideBar from "./sideBar";
import OwnerStatus from "./ownerStatus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./appStatus.module.scss";

export default function AppStatus({
  onSearch,
  selfStatusMode,
  userName,
  list,
  AddContact,
}) {
  const [mode, setMode] = useState("list");
  const input = useRef(null);

  function gotoSearchMode() {
    setMode("search");
  }

  function gotoListMode() {
    setMode((prevMode) => {
      return "list";
    });
    onSearch("");
    selfStatusMode("list");
  }

  function gotoStatusMode() {
    setMode((prevMode) => {
      return "status";
    });
    selfStatusMode("status");
  }

  function handleClose() {
    setMode((prevMode) => {
      return "list";
    });
  }

  useEffect(() => {
    if (mode === "search") {
      input.current.focus();
    }
  }, [mode]);

  const listMode = mode === "list";
  const statusMode = mode === "status";
  const searchMode = mode === "search";

  return (
    <>
      <SideBar toggle={statusMode} onClose={handleClose}>
        {
          <OwnerStatus
            userName={userName}
            list={list}
            AddContact={AddContact}
          />
        }
      </SideBar>
      <TitleBar
        first={
          <FontAwesomeIcon
            icon={faBars}
            size="lg"
            color="#009588"
            className={styles["pointer"]}
            onClick={gotoStatusMode}
          />
        }
        middle={
          <div className={styles["app-title"]}>
            {statusMode && "Profile"}
            {listMode && "Fancy Messenger"}
            {searchMode && (
              <input
                type="text"
                className={styles["search-text"]}
                ref={input}
                onChange={(e) => onSearch(e.target.value)}
              />
            )}
          </div>
        }
        last={
          listMode && (
            <FontAwesomeIcon
              icon={faSearch}
              size="lg"
              color="#009588"
              className={styles["pointer"]}
              onClick={gotoSearchMode}
            />
          )
        }
      />
    </>
  );
}
