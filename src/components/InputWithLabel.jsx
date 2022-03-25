import React from "react";

export const InputWithLabel = ({
  label,
  type,
  placeholder,
  name,
  value,
  onInputChange,
}) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onInputChange}
      />
    </>
  );
};
