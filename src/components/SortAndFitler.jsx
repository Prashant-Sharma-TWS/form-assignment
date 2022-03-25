import React from "react";
import { GetEmployeeData } from "./GetEmployeeData";

export const SortAndFitler = ({ data, setData, page, setPage }) => {
  const department = (value) => {
    let url = GetEmployeeData(
      `http://localhost:3000/employee/?department=dept-${value}&_page${page}&_limit=5`
    );
    url.then((res) => {
      setData(res);
    });
  };
  const sort = (value) => {
    let url = GetEmployeeData(
      `http://localhost:3000/employee/?_sort=salary&_order=${value}&_page${page}&_limit=5`
    );
    url.then((res) => {
      setData(res);
    });
  };

  return (
    <div>
      <button onClick={() => department(1)}>only dept-1</button>
      <button onClick={() => department(2)}>only dept-2</button>
      <button onClick={() => department(3)}>only dept-3</button>
      <button onClick={() => sort("asc")}>Sort Salary low to high</button>
      <button onClick={() => sort("desc")}>Sort Salary high to low</button>
      <button
        style={{ backgroundColor: "lightblue" }}
        onClick={() => {
          GetEmployeeData(
            `http://localhost:3000/employee/?_page=${page}&_limit=5`
          ).then((res) => {
            res ? setData(res) : "";
          });
        }}
      >
        Reset
      </button>
    </div>
  );
};
