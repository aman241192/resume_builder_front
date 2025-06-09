import { Checkbox } from "antd";
import React from "react";

const CustomCheckBox = ({ onChange, title }) => {
  return (
    <div>
      <Checkbox onChange={onChange}>{title}</Checkbox>
    </div>
  );
};

export default CustomCheckBox;
