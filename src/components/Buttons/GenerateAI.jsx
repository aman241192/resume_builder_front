import React from "react";

const GenerateAI = ({
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
      className="cursor-pointer h-[37px] w-full flex items-center justify-center gap-2 border-2 border-[#9944f3] p-2 rounded-lg text-[#9944f3] font-medium hover:bg-[#9944f3] hover:text-white group"
    >
      {!iconPosition && Icon && (
        <Icon className="text-[18px] fill-[#9944f3] group-hover:fill-white" />
      )}
      {text}
      {iconPosition && Icon && (
        <Icon className="text-[18px] fill-[#9944f3] group-hover:fill-white" />
      )}
    </button>
  );
};

export default GenerateAI;
