import React from "react";
import { Input, Typography } from "antd";

const NormalInputField = ({
  type = "text",
  errors,
  name,
  label,
  placeholder,
  required,
  value,
  onChange,
  style,
}) => {
  return (
    <>
      <div className="mb-2">
        {label && (
          <div className="flex mb-1">
            <Typography.Text className="text-[13px]">{label}</Typography.Text>
            {required && (
              <Typography.Text
                className="text-red ml-1"
                style={{ color: "red" }}
              >
                *
              </Typography.Text>
            )}
          </div>
        )}
        <Input
          type={type}
          style={style}
          name={name}
          placeholder={placeholder}
          value={value} // Ensure value is set here
          onChange={onChange} // Ensure onChange is set here
        />
        {errors?.[name] && (
          <span className="block text-[12px] text-[red] text-left">
            {errors?.[name]}
          </span>
        )}
      </div>
    </>
  );
};

export default NormalInputField;
