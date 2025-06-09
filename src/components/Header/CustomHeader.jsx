import React from "react";
import Heading from "../CustomTexts/Heading";
import { Avatar } from "antd";
import Text from "../CustomTexts/Text";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { pathConstant } from "../../pathConstant";
import { useDispatch } from "react-redux";
import { logOut } from "../../Slice/Login/thunk";

const CustomHeader = () => {
  const items = [
    {
      label: "Profile",
      key: "0",
    },
    {
      label: "Log Out",
      key: "1",
    },
  ];

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleMenuClick = (e) => {
    if (e.key === "1") {
      dispatch(logOut(null));
    }
  };

  return (
    <div className="container flex justify-between items-center">
      <div onClick={() => navigate(pathConstant.home)}>
        <Heading title={"Resume Builder"} size={"30"} />
      </div>
      <Dropdown menu={{ items, onClick: handleMenuClick }} trigger={["click"]}>
        <Avatar className="cursor-pointer">A</Avatar>
      </Dropdown>
    </div>
  );
};

export default CustomHeader;
