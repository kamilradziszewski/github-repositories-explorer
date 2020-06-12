import React from "react";

import { ReactComponent as IconStar } from "../../assets/icons/star.svg";

import styles from "./RepoTile.module.scss";

const RepoTile = ({
  blank,
  title,
  desc,
  numOfStars,
  url,
}) => {
  let content = (
    <div
      className={[
        styles.userRepo,
        styles.userRepoEmpty,
      ].join(" ")}
    >
      <div className={styles.userRepo__title}>
        No repositories found
      </div>
    </div>
  );

  if (!blank) {
    content = (
      <a
        href={url}
        className={styles.userRepo}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.userRepo__title}>
          {title}
        </div>

        <div className={styles.userRepo__desc}>{desc}</div>
        {numOfStars > 0 ? (
          <div className={styles.userRepo__stars}>
            <span>{numOfStars}</span>
            <IconStar className={styles.iconStar} />
          </div>
        ) : null}
      </a>
    );
  }

  return content;
};

export default RepoTile;
