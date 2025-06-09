const sizeMap = {
  14: "text-[14px]",
  16: "text-[16px]",
  18: "text-[18px]",
};

const Text = ({ size = 14, title, className = "", as = "p" }) => {
  const Tag = as;
  const textSize = sizeMap[size] || sizeMap[16];

  return (
    <Tag className={`${textSize} font-semibold ${className}`}>{title}</Tag>
  );
};

export default Text;
