import React from "react";

const IconButton = ({
  type = "button",
  text = "OK",
  onClick,
  icon: Icon,
  iconPosition = false,
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className="w-full flex items-center justify-center gap-2 bg-[#dec7f7] p-2 rounded-lg text-[#9944f3] font-medium hover:bg-[#cda4fb]"
    >
      {!iconPosition && Icon && <Icon className="text-[18px] text-[#9944f3]" />}
      {text}
      {iconPosition && Icon && <Icon className="text-[18px] text-[#9944f3]" />}
    </button>
  );
};

export default IconButton;
