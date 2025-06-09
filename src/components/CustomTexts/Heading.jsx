const sizeMap = {
  18: "text-[18px]",
  20: "text-[20px]",
  25: "text-[25px]",
  30: "text-[30px]",
};

const Heading = ({ size = 20, title, className = "", as = "h2" }) => {
  const Tag = as;
  const textSize = sizeMap[size] || sizeMap[20];

  return (
    <Tag className={`${textSize} font-semibold ${className}`}>{title}</Tag>
  );
};

export default Heading;
