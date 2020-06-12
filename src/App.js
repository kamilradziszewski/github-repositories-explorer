import React from "react";

import "bulma";
import "./App.scss";

import UserBlock from "./features/search/UserBlock.component";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <h1 className="subtitle">
          GitHub Repositories Explorer
        </h1>

        <div className="search-box-container">
          <div className="field">
            <input
              className="input"
              type="text"
              placeholder="Enter username"
            />
          </div>

          <div className="field">
            <button className="button is-fullwidth is-info">
              Search
            </button>
          </div>

          <div className="field">
            <p className="is-size-7">
              Showing users for "Exampleuser"
            </p>
          </div>

          <UserBlock />
          <UserBlock />
        </div>
      </div>
    </div>
  );
}

export default App;
