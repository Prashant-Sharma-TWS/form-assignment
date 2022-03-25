import React from "react";
import styles from "./form.module.css";
import { endPage } from "./GetEmployeeData";

export const Paginated = ({ data, page, setPage }) => {
  return (
    <>
      <ul className={styles.filter}>
        <li
          onClick={() => {
            if (page > 1) setPage((page) => page - 1);
          }}
        >
          Previous
        </li>
        <li
          onClick={() => {
            if (page < Math.ceil(endPage / 5)) setPage((page) => page + 1);
          }}
        >
          Next
        </li>
      </ul>
    </>
  );
};
