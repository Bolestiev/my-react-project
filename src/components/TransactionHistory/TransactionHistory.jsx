import React from "react";
import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.TransactionHistory}>
      <thead>
        <tr>
          <th className={s.headerCell}>Type</th>
          <th className={s.headerCell}>Amount</th>
          <th className={s.headerCell}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }, index) => (
          <tr key={id} className={index % 2 === 0 ? s.evenRow : s.oddRow}>
            <td className={s.cell}>{type}</td>
            <td className={s.cell}>{amount}</td>
            <td className={s.cell}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
