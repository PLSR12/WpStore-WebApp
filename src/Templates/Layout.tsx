import { Layout, theme } from "antd"
import * as Molecules from "components/molecules"
import React from "react"
import { Outlet } from "react-router-dom"

const { Header, Content, Footer } = Layout

export const LayoutApp: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ position: "sticky", top: 0, zIndex: 1, width: "100%" }}>
        <div
          style={{
            float: "left",
            width: 120,
            height: 31,
            margin: "16px 24px 16px 0",
            background: "rgba(255, 0, 0, 0.2)",
            color: "#fff",
          }}
        >
          LOGO
        </div>
        <Molecules.Menu />
      </Header>
      <Content className="site-layout" style={{ padding: "50px" }}>
        <Molecules.Breadcrumbs />

        <div style={{ padding: 40, minHeight: 380, background: colorBgContainer }}>
          {" "}
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  )
}
