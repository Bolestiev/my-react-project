import React from "react";
import s from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.card}>
        <img src={image} alt="User avatar" className={s.avatar} />
        <h1 className={s.name}>{name}</h1>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>
      <ul className={s.list}>
        <li className={s.item}>
          <span>Followers</span>
          <span className={s.stats}>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span className={s.stats}>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span className={s.stats}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
