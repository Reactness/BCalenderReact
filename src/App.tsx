import React from "react";
import "./App.css";
import SearchPage from "./pages/search/index";
import MainPage from "./pages/main/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <>
      <Switch>
        <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
