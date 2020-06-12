import React from "react";

import styles from "./SearchContainer.module.scss";

const SearchContainer = () => {
  return (
    <>
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
    </>
  );
};

export default SearchContainer;
