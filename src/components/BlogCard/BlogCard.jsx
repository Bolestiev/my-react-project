import React from "react";
import s from "./BlogCard.module.css";
import formatDateToNaw from "../../helpers/formatDateToNaw";

const BlogCard = ({
  poster,
  tag,
  title,
  description,
  userName,
  avatar,
  postedAt,
}) => {
  return (
    <div className={s.card}>
      <div className={s.cardHeader}>
        <img className={s.cardPoster} src={poster} alt={tag} />
      </div>
      <div className={s.cardBody}>
        <span className={s.tag}>{tag}</span>
        <h2 className={s.cardTitle}>{title}</h2>
        <p className={s.cardText}>{description}</p>
      </div>
      <div className={s.cardFooter}>
        <div className={s.userBox}>
          <img className={s.avatar} src={avatar} alt={userName} />
          <div>
            <h3 className={s.userName}>{userName}</h3>
            <small className={s.date}>{formatDateToNaw(postedAt)}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
