import { Flex, Rate } from "antd";

const CustomRating = ({ onChange, value }) => {
  return (
    <Flex gap="middle" vertical>
      <Rate onChange={onChange} value={value} />
    </Flex>
  );
};

export default CustomRating;
