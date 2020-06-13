import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchReposForUser,
  setReposForUser,
  selectUsers,
} from "./searchSlice";

import RepoTile from "./RepoTile.component";

import { ReactComponent as IconChevronDown } from "../../assets/icons/chevron-down.svg";

import styles from "./UserBlock.module.scss";

const UserBlock = ({ user }) => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  const [
    isUserBlockOpened,
    setIsUserBlockOpened,
  ] = useState(false);

  const handleClick = () => {
    if (
      !users.find((curUser) => curUser.id === user.id).repos
    ) {
      dispatch(fetchReposForUser(user.repos_url))
        .then((res) => {
          dispatch(
            setReposForUser({ user, repos: res.payload })
          );
          setIsUserBlockOpened(!isUserBlockOpened);
        })
        .catch((err) => console.log(err));
    } else {
      setIsUserBlockOpened(!isUserBlockOpened);
    }
  };

  const repoList = users.find(
    (curUser) => curUser.id === user.id
  ).repos;

  return (
    <div
      className={`${styles.userBlock} ${
        isUserBlockOpened ? styles.userBlockVisible : ""
      }`}
    >
      <div
        className={styles.userHeader}
        onClick={() => handleClick()}
      >
        {user.login}
        <IconChevronDown className={styles.iconChevron} />
      </div>
      <div className="user-repos">
        {repoList && repoList.length > 0 ? (
          repoList.map((repo) => {
            return (
              <RepoTile
                key={repo.id}
                title={repo.name}
                desc={repo.description}
                numOfStars={repo.stargazers_count}
                url={repo.html_url}
              />
            );
          })
        ) : (
          <RepoTile blank={true} />
        )}
      </div>
    </div>
  );
};

export default UserBlock;
