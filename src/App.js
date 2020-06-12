import React from "react";

import "bulma";
import "./App.scss";

import SearchContainer from "./features/search/SearchContainer.component";
import UserList from "./features/search/UserList.component";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <h1 className="subtitle">
          GitHub Repositories Explorer
        </h1>

        <div className="main-container">
          <SearchContainer />

          <UserList />
        </div>
      </div>
    </div>
  );
}

export default App;
