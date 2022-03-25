import React, { useEffect, useState, useRef } from "react";
import styles from "./form.module.css";
import { AddEmployee } from "./AddEmployee";
import { GetEmployeeData } from "./GetEmployeeData";
import { Table } from "./Table";
import { Paginated } from "./Paginated";
import { InputWithLabel } from "./InputWithLabel";
import { SortAndFitler } from "./SortAndFitler";

export const Form = () => {
  let [data, setData] = useState({});
  let [form, setForm] = useState({});
  let [page, setPage] = useState(1);
  
  useEffect(() => {
    GetEmployeeData(
      `http://localhost:3000/employee/?_page=${page}&_limit=5`
    ).then((res) => {
      res ? setData(res) : "";
    });
  }, [page]);

  const handleData = (e) => {
    let { name, value, type, checked } = e.currentTarget;
    value = type === "checkbox" ? checked : value;
    value = +value ? +value : value;
    setForm({ ...form, [name]: value });
  };
  return (
    <>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          AddEmployee(form, "http://localhost:3000/employee").then((res) => {
            setData({ ...data, res });
            GetEmployeeData(
              `http://localhost:3000/employee/?_page=${page}&_limit=5`
            ).then((res) => {
              res ? setData(res) : "";
            });
          });
        }}
      >
        <InputWithLabel
          label="Name:"
          type="text"
          placeholder="Enter name"
          name="name"
          value={data.name}
          onInputChange={handleData}
        />
        <InputWithLabel
          label="Age:"
          type="number"
          placeholder="Enter age"
          name="age"
          value={data.age}
          onInputChange={handleData}
        />
        <InputWithLabel
          label="Address:"
          type="text"
          placeholder="Enter address"
          name="address"
          value={data.address}
          onInputChange={handleData}
        />
        <label>Department:</label>
        <select name="department" value={data.department} onChange={handleData}>
          <option value="">Select Dept</option>
          <option value="dept-1">Dept-1</option>
          <option value="dept-2">Dept-2</option>
          <option value="dept-3">Dept-3</option>
        </select>
        <InputWithLabel
          label="Salary:"
          type="number"
          placeholder="Enter salary"
          name="salary"
          value={data.salary}
          onInputChange={handleData}
        />
        <div>
          <label>Are you married:</label>
          <input
            type="checkbox"
            name="maritalState"
            value={data.married}
            onChange={handleData}
          />
        </div>
        <InputWithLabel
          label="Profile Photo:"
          type="file"
          name="profilePhoto"
          onInputChange={handleData}
        />
        <input type="submit" value="Add employee" />
      </form>

      <SortAndFitler
        data={data}
        setData={setData}
        page={page}
        setPage={setPage}
      />
      <Table data={data} setData={setData} />
      <Paginated data={data} page={page} setPage={setPage} />
    </>
  );
};
