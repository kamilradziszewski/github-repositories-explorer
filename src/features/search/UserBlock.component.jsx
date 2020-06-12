import React, { useState } from "react";

import RepoTile from "./RepoTile.component";

import { ReactComponent as IconChevronDown } from "../../assets/icons/chevron-down.svg";

import styles from "./UserBlock.module.scss";

const UserBlock = () => {
  const [
    isUserBlockOpened,
    setIsUserBlockOpened,
  ] = useState(false);

  return (
    <div
      className={`${styles.userBlock} ${
        isUserBlockOpened ? styles.userBlockVisible : ""
      }`}
    >
      <div
        className={styles.userHeader}
        onClick={() =>
          setIsUserBlockOpened(!isUserBlockOpened)
        }
      >
        Exampleuser1
        <IconChevronDown className={styles.iconChevron} />
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
  );
};

export default UserBlock;
