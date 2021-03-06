import React, { useEffect, useReducer } from "react";
import AppStatus from "./components/appStatus";
// import OwnerStatus from "./components/ownerStatus";
import ListItem from "./components/listItem";
import List from "./components/list";
import ChatDetail from "./components/chatDetail";
import styles from "./index.module.scss";

import { getListItems, getRecentChats, setSubmitMessage } from "./server";

function reducer(state, action) {
  switch (action.type) {
    case "LIST_RECIEVED":
      return {
        ...state,
        list: action.payload,
      };
    case "SEARCHED_LIST":
      return {
        ...state,
        searchedlist: action.payload,
      };
    case "CHAT_SELECTED":
      return {
        ...state,
        selectedChatId: action.payload,
      };
    case "CHAT_RECIEVED":
      return {
        ...state,
        recent: action.payload,
      };
    case "CHAT_CLOSED":
      return {
        ...state,
        selectedChatId: action.payload,
      };
    case "STATUS_ENABLED":
      return {
        ...state,
        status: action.payload,
      };

    default:
      return state;
  }
}

export default function Index({ match }) {
  const [state, dispatch] = useReducer(reducer, {
    list: [],
    recent: [],
    searchedlist: "",
    status: "",
    selectedChatId: null,
  });

  useEffect(() => {
    getListItems().then((list) =>
      dispatch({
        type: "LIST_RECIEVED",
        payload: list,
      })
    );
  }, [state.list, state.searchedlist]);

  function handleClick(id) {
    let chats = getRecentChats(id);
    dispatch({
      type: "CHAT_RECIEVED",
      payload: chats,
    });
    dispatch({ type: "CHAT_SELECTED", payload: id });
  }

  function handleSubmitMessage(text) {
    setSubmitMessage(text, state.selectedChatId);
  }

  function handleClose() {
    dispatch({ type: "CHAT_CLOSED", payload: null });
  }

  function handleSearch(e) {
    const searchedChat = e;
    dispatch({ type: "SEARCHED_LIST", payload: searchedChat });
  }

  function handleStatusMode(mode) {
    dispatch({ type: "STATUS_ENABLED", payload: mode });
  }

  function handleAddContact(id) {
    // const addContact = state.list.find((item) => item.id === id);
    handleClick(id);

    // console.log(addContact);
  }

  return (
    <div className={styles["layout"]}>
      <div
        className={styles[`${!state.selectedChatId ? "side-small" : "side"}`]}
      >
        <AppStatus
          onSearch={handleSearch}
          selfStatusMode={handleStatusMode}
          userName={match.params.username}
          list={state.list}
          AddContact={handleAddContact}
        />

        <List>
          {state.list
            .filter((item) =>
              item.name.toLowerCase().includes(state.searchedlist.toLowerCase())
            )
            .map((item) => {
              const lastmessage = item.messages.length - 1;
              return (
                <ListItem
                  key={item.id}
                  name={item.name}
                  avatar={item.avatar}
                  time={item.time}
                  unreadMessageCount={item.unreadMessageCount}
                  text={item.messages[lastmessage].text}
                  selected={item.id === state.selectedChatId}
                  onClick={() => handleClick(item.id)}
                />
              );
            })}
        </List>
      </div>
      <div
        className={styles[`${state.selectedChatId ? "main-small" : "main"}`]}
      >
        {state.selectedChatId && (
          <>
            <ChatDetail
              key={state.recent.id}
              selectedChatId={state.selectedChatId}
              onClose={handleClose}
              onSubmit={handleSubmitMessage}
              avatar={state.recent.avatar}
              name={state.recent.name}
              messages={state.recent.messages}
            />
          </>
        )}
      </div>
    </div>
  );
}
