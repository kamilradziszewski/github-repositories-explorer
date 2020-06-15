import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

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
  const usernameInput = useRef(null);

  const searchPhrase = useSelector(selectSearchPhrase);
  const users = useSelector(selectUsers);

  const dispatch = useDispatch();

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

  useEffect(() => {
    usernameInput.current.focus();
  }, []);

  return (
    <>
      <Formik
        initialValues={{ username: "" }}
        validationSchema={Yup.object({
          username: Yup.string()
            .matches(
              /^[a-zA-Z\d](?:[a-zA-Z\d]|-(?=[a-zA-Z\d]))*$/,
              "Username may only contain alphanumeric characters or single hyphens, and cannot begin or end with a hyphen."
            )
            .max(
              39,
              "Username is too long (maximum is 39 characters)."
            ),
        })}
        onSubmit={(values, { resetForm }) => {
          if (values.username !== searchPhrase) {
            dispatch(fetchUsers(values.username))
              .then(unwrapResult)
              .then((originalPromiseResult) => {
                dispatch(setSearchPhrase(values.username));
                resetForm({});
                dispatch(
                  setUsers(originalPromiseResult.items)
                );
              })
              .catch((serializedError) => {
                resetForm({});
                dispatch(
                  setErrorMessage(serializedError.message)
                );
              });
          }
        }}
      >
        {({ errors, touched, values }) => (
          <Form>
            <div className="field">
              <Field
                name="username"
                type="text"
                className="input"
                placeholder="Enter username"
                aria-label="Username"
                innerRef={usernameInput}
              />
              {touched.username && errors.username ? (
                <div className={styles.formikErrors}>
                  {errors.username}
                </div>
              ) : null}
            </div>
            <div className="field">
              <button
                className="button is-fullwidth is-info"
                type="submit"
                disabled={!values.username}
              >
                Search
              </button>
            </div>
          </Form>
        )}
      </Formik>

      {searchResultInfo}
    </>
  );
};

export default SearchContainer;
