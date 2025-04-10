import { AkasiaLogo, FlagEng, FlagIndo } from "@/assets";
import { MENU } from "@/constants/menu";
import { colorRules } from "@/themes/themeConfig";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import {
  Button,
  ConfigProvider,
  Divider,
  Drawer,
  Dropdown,
  Flex,
  Grid,
  Menu,
  MenuProps,
  Space,
} from "antd";
import { Header } from "antd/lib/layout/layout";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const { useBreakpoint } = Grid;

export const Navbar = () => {
  const screens = useBreakpoint();
  const pathname = usePathname();
  const router = useRouter();

  const [lang, setLang] = useState("eng");
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState([pathname]);

  const onClick: MenuProps["onClick"] = (e) => {
    setSelectedMenu([e.key]);
    router.push(e.key);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Typography: {
            colorLink: colorRules.grey[500],
            colorLinkActive: colorRules.primary[500],
            colorLinkHover: colorRules.primary[500],
          },
          Dropdown: {
            paddingBlock: 10,
            borderRadiusLG: 10,
            controlPaddingHorizontal: 20,
          },
          Menu: {
            borderRadiusLG: 10,
            itemSelectedBg: colorRules.primary[100],
          },
          Divider: {
            marginLG: 0,
          },
        },
      }}
    >
      <Header
        style={{
          position: "fixed",
          top: 0,
          zIndex: 100,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "white",
          padding: screens.lg ? "0px 90px" : "35px",
          height: 84,
        }}
      >
        <Flex gap={8} align="center">
          <Button
            size="large"
            icon={<MenuOutlined />}
            className="!rounded-lg lg:!hidden"
            onClick={() => setOpenDrawer(true)}
          />
          <Link href="/" className="cursor-pointer">
            <Image
              src={AkasiaLogo}
              width={screens.lg ? 200 : 150}
              height={200}
              alt="logo akasia"
            />
          </Link>
        </Flex>

        {screens.lg && (
          <Space size="large">
            {MENU?.map((item) =>
              item?.children?.length > 0 ? (
                <Dropdown
                  menu={{
                    items: item?.children?.map((child) => ({
                      key: child.key,
                      label: child.label,
                    })),
                    selectable: true,
                    selectedKeys: [
                      item?.children.find((e) => e.path === pathname)?.key ||
                        "",
                    ],
                    onClick: (e) => {
                      router.push(e.key);
                    },
                  }}
                  trigger={["click"]}
                  align={{ offset: [0, 20] }}
                >
                  <div>
                    <Flex
                      gap={10}
                      className={`font-semibold hover:!text-(--color-primary-500) ${
                        pathname.split("/")[1] === item?.path
                          ? "!text-(--color-primary-500)"
                          : "!text-(--color-grey-500)"
                      } cursor-pointer`}
                    >
                      {item?.label}
                      <DownOutlined style={{ fontSize: 10 }} />
                    </Flex>
                  </div>
                </Dropdown>
              ) : (
                <Link
                  href={item?.path}
                  className={`font-semibold hover:!text-(--color-primary-500) ${
                    pathname === item?.path
                      ? "!text-(--color-primary-500)"
                      : "!text-(--color-grey-500)"
                  } `}
                >
                  {item?.label}
                </Link>
              )
            )}
          </Space>
        )}

        <Drawer
          title={null}
          placement="left"
          closable={false}
          onClose={() => setOpenDrawer(false)}
          open={openDrawer}
          styles={{ body: { padding: 0 } }}
          width={300}
        >
          <Image
            src={AkasiaLogo}
            width={200}
            height={200}
            alt="logo akasia"
            className="!p-6"
          />
          <Divider />
          <Menu
            onClick={onClick}
            selectedKeys={selectedMenu}
            mode="inline"
            items={MENU.map((item) => ({
              key: item.key,
              label: item.label,
              children: item.children?.length > 0 ? item.children : undefined,
            }))}
          />
        </Drawer>

        <Flex gap={10} align="center">
          {screens?.sm && <Button type="primary">LET'S CHAT</Button>}
          <Dropdown
            menu={{
              items: [
                {
                  key: "ind",
                  label: (
                    <Flex gap={10}>
                      <Image
                        src={FlagIndo}
                        alt="flag-indo"
                        width={22}
                        height={22}
                      />{" "}
                      Indonesia
                    </Flex>
                  ),
                },
                {
                  key: "eng",
                  label: (
                    <Flex gap={10}>
                      <Image
                        src={FlagEng}
                        alt="flag-eng"
                        width={22}
                        height={22}
                      />{" "}
                      Inggris
                    </Flex>
                  ),
                },
              ],
              onClick: (e) => setLang(e?.key),
            }}
            trigger={["click"]}
            align={{ offset: [0, 32] }}
          >
            <Button
              style={{
                padding: "18px 12px",
                backgroundColor: colorRules.grey[50],
                borderColor: "#00000000",
              }}
            >
              <Flex gap={10}>
                <Image
                  src={lang === "ind" ? FlagIndo : FlagEng}
                  alt="flag-indo"
                  width={22}
                  height={22}
                />
                <DownOutlined
                  style={{ fontSize: 10, color: colorRules.grey[500] }}
                />
              </Flex>
            </Button>
          </Dropdown>
        </Flex>
      </Header>
    </ConfigProvider>
  );
};
