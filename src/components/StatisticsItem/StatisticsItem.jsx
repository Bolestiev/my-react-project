import styled from "./StatisticsItem.module.css";
import { IconContext } from "react-icons";
export const StatisticsItem = ({ title, total, icon }) => {
  // console.log(title);
  return (
    <li className={styled.item}>
      <IconContext.Provider value={{ color: "#29a14f", size: "30" }}>
        {icon}
      </IconContext.Provider>
      <span className={styled.counter}>{total}</span>
      <p className={styled.text}>{title}s</p>
    </li>
  );
};
