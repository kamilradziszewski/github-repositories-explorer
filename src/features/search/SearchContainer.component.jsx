import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  fetchUsers,
  setSearchPhrase,
  setUsers,
  selectSearchPhrase,
} from "./searchSlice";

import styles from "./SearchContainer.module.scss";

const SearchContainer = () => {
  const [username, setUsername] = useState("");

  const searchPhrase = useSelector(selectSearchPhrase);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(setSearchPhrase(username));

    dispatch(fetchUsers(username))
      .then((res) => dispatch(setUsers(res.payload.items)))
      .catch((err) => console.log(err));
  };

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

      {searchPhrase ? (
        <p className={`is-size-7 ${styles.searchPhrase}`}>
          Showing users for "{searchPhrase}"
        </p>
      ) : null}
    </>
  );
};

export default SearchContainer;
