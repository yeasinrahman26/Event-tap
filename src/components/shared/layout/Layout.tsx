/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import logo from "@/assets/banner/logo.png";
import { MenuOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
// Removed invalid import of MenuItem from "antd/es/menu"
import Layout from "antd/lib/layout";
import { Menu } from "antd";
import { theme } from "antd/es";
import Image from "next/image";
import Link from "next/link";

const { Header, Content, Footer, Sider } = Layout;

// Define MenuItem type based on Ant Design Menu item structure
export type MenuItem = Exclude<MenuProps["items"], undefined>[number];

export function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

interface AdminLayoutProps {
  children: ReactNode;
  menu: MenuItem[];
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, menu }) => {
  const [open, setOpen] = useState<boolean>(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const pathname = usePathname();

  const [selectedKey, setSelectedKey] = useState("/dashboard");

  // Ensure correct menu item is selected on route change
  useEffect(() => {
    if (pathname) {
      setSelectedKey(pathname);
    }
  }, [pathname]);

  const handleClick: MenuProps["onClick"] = ({ key }) => {
    setSelectedKey(key);
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        width={220}
        className={`!bg-[#EDE8DF]  !overflow-y-auto !fixed lg:!static h-full z-50 transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
        theme="light"
        collapsed={false}
      >
        <Link
          href="/"
          className="flex justify-center  items-center py-4 pb-5 border-b border-[#ffffff1a]"
        >
          <div className="flex gap-2 justify-center items-center">
            <Image
              width={300}
              height={300}
              className="w-[25px] h-auto"
              src={logo}
              alt="logo"
            />
            <h1 className="text-2xl text-black font-bold">Event Tap</h1>
          </div>
        </Link>

        <Menu
          mode="inline"
          selectedKeys={[selectedKey]}
          onClick={handleClick}
          items={menu}
          style={{
            backgroundColor: "#EDE8DF",
            fontWeight: 500,
            color: "#E60076",
          }}
          inlineIndent={16}
          className="custom-sidebar"
        />
      </Sider>

      <Layout>
        <Header
          style={{
            padding: "0 24px",
            background: colorBgContainer,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h2 className="text-xl hidden lg:block sm:text-2xl lg:text-3xl font-semibold w-full">
            Welcome back!
          </h2>
          <MenuOutlined
            onClick={() => setOpen(!open)}
            className="lg:!hidden text-2xl cursor-pointer"
          />
        </Header>

        <Content
          className="!overflow-y-auto !overflow-x-hidden"
          onClick={() => setOpen(false)}
          style={{ padding: "24px", height: "100%" }}
        >
          {children}
        </Content>

        <Footer
          style={{
            textAlign: "center",
            background: "#fff",
            padding: "16px 24px",
          }}
        >
          © Event Tap. All rights reserved.
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
