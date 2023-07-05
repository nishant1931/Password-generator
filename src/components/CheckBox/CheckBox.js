import React from "react";

const CheckBox = ({ checkedState, onChange, title }) => {
  return (
    <div>
      <input type="checkbox" checked={checkedState} onChange={onChange} />
      <label>{title}</label>
    </div>
  );
};

export default CheckBox;
