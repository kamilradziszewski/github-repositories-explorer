import React from "react";

import "bulma";
import "./App.scss";

import { ReactComponent as IconStar } from "./assets/icons/star.svg";
import { ReactComponent as IconChevronDown } from "./assets/icons/chevron-down.svg";

import RepoTile from "./features/search/RepoTile.component";

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

          <div className="user">
            <div className="user-header">
              Exampleuser1
              <IconChevronDown className="icon--chevron" />
            </div>
            <div className="user-repos">
              <RepoTile
                title="Repository title"
                desc="Repository description"
                numOfStars="12"
                url="https://google.com"
              />
              <RepoTile
                title="Repository title"
                desc="Repository description"
                numOfStars="48"
                url="https://google.com"
              />
              <RepoTile
                title="Repository title"
                desc="Repository description"
                numOfStars="23"
                url="https://google.com"
              />
              <RepoTile blank={true} />
            </div>
          </div>

          <div className="user">
            <div className="user-header">
              Exampleuser431
              <IconChevronDown className="icon--chevron" />
            </div>
            <div className="user-repos"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
