import React from "react";
import { useSelector } from "react-redux";

import {
  selectIsModalOpened,
  selectIsLoading,
} from "../search/searchSlice";

import styles from "./Modal.module.scss";

const LoadingModal = () => {
  const isModalOpened = useSelector(selectIsModalOpened);
  const isLoading = useSelector(selectIsLoading);

  return (
    <div
      className={`${styles.modal} ${
        isModalOpened ? styles.modalVisible : ""
      }`}
    >
      {isLoading ? (
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
      ) : null}
    </div>
  );
};

export default LoadingModal;
