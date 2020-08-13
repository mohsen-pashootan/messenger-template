import React from "react";
import Chat from "./pages/chat/index";
import Home from "./pages/chat/home";
import styles from "./app.module.scss";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className={styles["app"]}>
        <div className={styles["head"]} />
        <div className={styles["main"]}>
          <Switch>
            <Route path="/chat-panel/:username" component={Chat}></Route>
            <Route path="/" component={Home}></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
