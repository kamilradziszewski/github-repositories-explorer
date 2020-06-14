import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  selectIsModalOpened,
  selectIsLoading,
  selectError,
  resetErrorMessage,
} from "../search/searchSlice";

import styles from "./Modal.module.scss";

const LoadingModal = () => {
  const dispatch = useDispatch();

  const isModalOpened = useSelector(selectIsModalOpened);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const spinner = (
    <div className="lds-spinner">
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  );

  const errorMessage = (
    <article className="message is-danger">
      <div className="message-header">
        <p>ERROR</p>
        <button
          className="delete"
          aria-label="delete"
          onClick={() => handleCloseError()}
        ></button>
      </div>
      <div className="message-body">{error}</div>
    </article>
  );

  const handleCloseError = () => {
    dispatch(resetErrorMessage());
  };

  return (
    <div
      className={`${styles.modal} ${
        isModalOpened ? styles.modalVisible : ""
      }`}
    >
      {isLoading ? spinner : null}
      {error ? errorMessage : null}
    </div>
  );
};

export default LoadingModal;
