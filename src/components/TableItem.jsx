import React from "react";

export const TableItem = ({ item, removeEmployee }) => {
  const { name, age, address, department, salary, maritalState, profilePhoto } =
    item;
  return (
    <tr>
      <td>{name}</td>
      <td>{age}</td>
      <td>{address}</td>
      <td>{department}</td>
      <td>{salary}</td>
      <td>{maritalState ? "Yes" : "No"}</td>
      <td>
        <a href={profilePhoto}>Profile Photo</a>
      </td>
      <td style={{ color: "red",cursor: "pointer"}} onClick={() => removeEmployee(item)}>Remove</td>
    </tr>
  );
};
