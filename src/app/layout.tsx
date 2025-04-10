"use client";

import "@ant-design/v5-patch-for-react-19";
import React from "react";
import { ConfigProvider, FloatButton, Layout } from "antd";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Content } from "antd/lib/layout/layout";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar/Navbar";
import { ThemeConfig } from "@/themes/themeConfig";
import { FooterComponent } from "@/components/ui/Footer/FooterComponent";
import { Inter, Montserrat } from "next/font/google";
import Image from "next/image";
import { ChatBubble } from "@/assets";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-title",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${inter.variable}`}>
        <React.StrictMode>
          <AntdRegistry>
            <ConfigProvider theme={ThemeConfig}>
              <Layout className="container-root font-display text-(--color-grey-500)">
                <Navbar />
                <Layout className="container-content">
                  <Content className="content !px-[40] lg:!px-[100] !py-[50]">
                    {children}
                  </Content>
                </Layout>
                <FooterComponent />
                <FloatButton
                  type="primary"
                  className="!w-[45] !h-[45]"
                  icon={
                    <Image
                      src={ChatBubble}
                      width={56}
                      height={56}
                      alt="chat-bubble-icon"
                    />
                  }
                />
              </Layout>
            </ConfigProvider>
          </AntdRegistry>
        </React.StrictMode>
      </body>
    </html>
  );
}
