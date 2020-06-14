import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";

import {
  fetchUsers,
  setSearchPhrase,
  setUsers,
  setErrorMessage,
  selectSearchPhrase,
  selectUsers,
} from "./searchSlice";

import styles from "./SearchContainer.module.scss";

const SearchContainer = () => {
  const [username, setUsername] = useState("");

  const searchPhrase = useSelector(selectSearchPhrase);
  const users = useSelector(selectUsers);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username !== searchPhrase) {
      dispatch(fetchUsers(username))
        .then(unwrapResult)
        .then((originalPromiseResult) => {
          dispatch(setSearchPhrase(username));
          setUsername("");
          dispatch(setUsers(originalPromiseResult.items));
        })
        .catch((serializedError) => {
          setUsername("");
          dispatch(
            setErrorMessage(serializedError.message)
          );
        });
    }
  };

  let searchResultInfo = null;
  if (users) {
    const searchResultInfoText =
      users.length === 0
        ? `No users found for "${searchPhrase}"`
        : `Showing users for "${searchPhrase}"`;

    searchResultInfo = (
      <p className={`is-size-7 ${styles.searchPhrase}`}>
        {searchResultInfoText}
      </p>
    );
  }

  return (
    <>
      <form
        className={styles.searchForm}
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="field">
          <input
            className="input"
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="field">
          <button
            className="button is-fullwidth is-info"
            disabled={!username}
          >
            Search
          </button>
        </div>
      </form>

      {searchResultInfo}
    </>
  );
};

export default SearchContainer;
