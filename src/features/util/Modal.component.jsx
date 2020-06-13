import React from "react";
import { useSelector } from "react-redux";

import { selectIsModalOpened } from "../search/searchSlice";

import styles from "./Modal.module.scss";

const LoadingModal = () => {
  const isModalOpened = useSelector(selectIsModalOpened);

  return (
    <div
      className={`${styles.modal} ${
        isModalOpened ? styles.modalVisible : ""
      }`}
    ></div>
  );
};

export default LoadingModal;
