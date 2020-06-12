import React from "react";

import { ReactComponent as IconStar } from "../../assets/icons/star.svg";

import styles from "./RepoTile.module.scss";

const RepoTile = ({ title, desc, numOfStars, url }) => {
  return (
    <a
      href={url}
      className={styles.userRepo}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={styles.userRepo__title}>{title}</div>

      <div className={styles.userRepo__desc}>{desc}</div>
      <div className={styles.userRepo__stars}>
        <span>{numOfStars}</span>
        <IconStar className={styles.iconStar} />
      </div>
    </a>
  );
};

export default RepoTile;
