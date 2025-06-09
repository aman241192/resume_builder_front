import React from "react";
import { Layout } from "antd";
import CustomHeader from "../components/Header/CustomHeader";

const { Header, Footer, Sider, Content } = Layout;

const CustomLayout = ({ children }) => {
  return (
    <Layout className="min-h-screen">
      <Header style={{ background: "#fff", borderBottom: "1px solid #c1b7b7" }}>
        <CustomHeader />
      </Header>
      <Content style={{ background: "#fff" }}>{children}</Content>
      {/* <Footer>Footer</Footer> */}
    </Layout>
  );
};

export default CustomLayout;
