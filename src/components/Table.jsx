import React from "react";
import { TableItem } from "./TableItem";
import { RemoveEmployee } from './RemoveEmployee';

export const Table = ({ data, setData }) => {
  const removeEmployee = (employee) => {
    const newData = data.filter((person) => person.id !== employee.id);
    RemoveEmployee(`http://localhost:3000/employee/${employee.id}`);
    setData(newData);
  };
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name of Employee</th>
            <th>Age</th>
            <th>Address</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Married-State</th>
            <th>Profile Photo</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) ? (
            data.map((item) => <TableItem key={item.id} item={item}removeEmployee={removeEmployee} />)
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>
    </>
  );
};
