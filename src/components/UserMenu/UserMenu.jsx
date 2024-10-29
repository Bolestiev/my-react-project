import { HiUser, HiCog, HiBell } from "react-icons/hi";
import css from "./UserMenu.module.css";

export default function UserMenu({ name }) {
  return (
    <div className="user-menu">
      <HiUser className="icon" size="24" /> {/* Іконка користувача */}
      <HiCog className="icon" size="24" /> {/* Іконка налаштувань */}
      <HiBell className="icon" size="24" /> {/* Іконка повідомлень */}
      <p>{name}</p>
    </div>
  );
}
