import React from "react";
import { DatePicker, Typography } from "antd";
import dayjs from "dayjs";

const CustomDatePicker = ({
  label,
  required = false,
  onChange,
  name,
  value,
  format = "YYYY-MM-DD",
  ...rest
}) => {
  const handleChange = (date, dateString) => {
    if (onChange) {
      onChange(date, dateString, name); // You can access name in parent handler
    }
  };

  return (
    <div className="mb-4">
      {label && (
        <div className="flex items-center mb-1">
          <Typography.Text className="text-[13px]">{label}</Typography.Text>
          {required && (
            <Typography.Text className="text-red-500 ml-1">*</Typography.Text>
          )}
        </div>
      )}
      <DatePicker
        className="w-full"
        name={name}
        onChange={handleChange}
        value={value ? dayjs(value) : null}
        format={format}
        {...rest}
      />
    </div>
  );
};

export default CustomDatePicker;
