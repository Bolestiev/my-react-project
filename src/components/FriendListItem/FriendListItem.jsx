import s from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={s.friendItem}>
      <img
        src={avatar}
        alt={`${name}'s avatar`}
        width="48"
        className={s.avatar}
      />
      <p className={s.friendName}>{name}</p>
      <p className={`${s.status} ${isOnline ? s.online : s.offline}`}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </li>
  );
};

export default FriendListItem;
