"use client";

import {
  AkasiaLogo,
  AppStore,
  Email,
  FacebookLogo,
  FooterImage,
  GooglePlay,
  InstagramLogo,
  Phone,
  TiktokLogo,
  WhatsappLogo,
  YoutubeLogo,
} from "@/assets";
import { GapComponent } from "@/components/gapComponent/GapComponent";
import { FOOTER_LINK } from "@/constants/footer";
import { colorRules } from "@/themes/themeConfig";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Flex, Grid, Row } from "antd";
import { Footer } from "antd/lib/layout/layout";
import Image from "next/image";
import Link from "next/link";

const { useBreakpoint } = Grid;

export const FooterComponent = () => {
  const screens = useBreakpoint();

  return (
    <>
      <div className="w-full h-full overflow-hidden relative">
        <div className="absolute left-[40] lg:left-[100]">
          <Flex align="center" justify="center">
            <div className="text-white font-title uppercase lg:text-3xl lg:!mt-[130] !mt-[20] font-semibold ">
              Every Journey beginS <br /> with a single step.
            </div>
          </Flex>
          <GapComponent gapHeight={20} />

          <Button
            type="primary"
            size={screens?.lg ? "large" : "middle"}
            className="!rounded-full"
          >
            ASK ME
          </Button>
        </div>

        <Image
          src={FooterImage}
          alt="hero"
          className="w-full object-cover h-[200] lg:h-full"
        />
      </div>

      <div
        className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:divide-x-1 divide-(--color-grey-300) bg-white"
        style={{ padding: screens?.lg ? "40px 100px" : "40px" }}
      >
        <div>
          <div className="text-(--color-grey-500) text-sm font-extrabold font-title">
            OPERATING HOURS
          </div>

          <GapComponent gapHeight={10} />
          <Row>
            <Col span={6}>Mon - Fri</Col>
            <div className="font-extrabold">: 08:00 - 17:00</div>
          </Row>
          <GapComponent gapHeight={5} />
          <Row>
            <Col span={6}>Sat</Col>
            <div className="font-extrabold">: 08:00 - 16:00</div>
          </Row>
          <GapComponent gapHeight={10} />
          <div>Closed on Sundays & Public Holidays</div>
          <GapComponent gapHeight={30} />

          <div className="text-(--color-grey-500) text-sm font-extrabold">
            WE CAN TELL YOU MORE
          </div>

          <GapComponent gapHeight={10} />

          <div
            className="w-11/12 bg-(--color-primary-100) rounded-full"
            style={{
              padding: "10px 10px 10px 20px",
            }}
          >
            <Flex
              justify="space-between"
              align="center"
              className={`text-(--color-primary-500) `}
            >
              Drop Email <Button type="primary" icon={<ArrowRightOutlined />} />
            </Flex>
          </div>

          <GapComponent gapHeight={10} />
        </div>

        <div>
          <div className="text-(--color-grey-500) text-sm font-extrabold">
            CONTACT US
          </div>

          <GapComponent gapHeight={10} />

          <Flex gap={10}>
            <Image src={Phone} width={20} height={20} alt="phone-icon" />
            <Link
              href={FOOTER_LINK.tel}
              target="_blank"
              className="!text-(--color-grey-500) hover:!text-(--color-primary-500)"
            >
              (021) 2921-7777 ext 3601
            </Link>
          </Flex>

          <GapComponent gapHeight={10} />

          <Flex gap={10}>
            <Image src={Email} width={20} height={20} alt="email-icon" />
            contact@365mcindonesia.com
          </Flex>

          <GapComponent gapHeight={60} />
          <div className="text-(--color-grey-500) text-sm font-extrabold">
            SOCIAL MEDIA
          </div>
          <GapComponent gapHeight={10} />
          <Flex gap={4}>
            <Button
              href={FOOTER_LINK.instagram}
              target="_blank"
              icon={
                <Image
                  src={InstagramLogo}
                  width={20}
                  height={20}
                  alt="instagram"
                />
              }
              type="text"
            />
            <Button
              href={FOOTER_LINK.facebook}
              target="_blank"
              icon={
                <Image
                  src={FacebookLogo}
                  width={20}
                  height={20}
                  alt="facebook"
                />
              }
              type="text"
            />
            <Button
              href={FOOTER_LINK.youtube}
              target="_blank"
              icon={
                <Image src={YoutubeLogo} width={20} height={20} alt="youtube" />
              }
              type="text"
            />
            <Button
              href={FOOTER_LINK.tiktok}
              target="_blank"
              icon={
                <Image src={TiktokLogo} width={20} height={20} alt="tiktok" />
              }
              type="text"
            />
            <Button
              href={FOOTER_LINK.whatsapp}
              target="_blank"
              icon={
                <Image
                  src={WhatsappLogo}
                  width={20}
                  height={20}
                  alt="whatsapp"
                />
              }
              type="text"
            />
          </Flex>

          <GapComponent gapHeight={10} />
        </div>

        <div>
          <div className="text-(--color-grey-500) text-sm font-extrabold">
            DOWNLOAD OUR APP
          </div>

          <GapComponent gapHeight={10} />

          <Flex gap={5}>
            <Link href={FOOTER_LINK.appStore} target="_blank">
              <Image
                src={AppStore}
                width={120}
                height={40}
                alt="logo app store"
                className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
              />
            </Link>

            <Link href={FOOTER_LINK.playStore} target="_blank">
              <Image
                src={GooglePlay}
                width={135}
                height={40}
                alt="logo google play"
                className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
              />
            </Link>
          </Flex>
        </div>
      </div>

      <Flex
        justify="center"
        align="center"
        className="bg-white h-[148]"
        vertical
        gap={10}
      >
        <Image
          src={AkasiaLogo}
          width={150}
          height={50}
          alt="logo akasia footer"
        />
        <Flex align="center" justify="center" wrap>
          <Button type="text" className="!text-(--color-grey-500) text-sm">
            Privacy Policy
          </Button>
          <Divider
            type="vertical"
            style={{ borderWidth: 0.5, borderColor: colorRules.grey[300] }}
          />
          <Button type="text" className="!text-(--color-grey-500) text-sm">
            Terms and Condition
          </Button>
          <Divider
            type="vertical"
            style={{ borderWidth: 0.5, borderColor: colorRules.grey[300] }}
          />
          <Button type="text" className="!text-(--color-grey-500) text-sm">
            Our Location
          </Button>
        </Flex>
      </Flex>
      <Footer className="lg:h-[68] !bg-(--color-primary-50) !text-(--color-grey-500) text-center">
        Copyright © 2025 PT. Akasia Threesixfivemc Indonesia
      </Footer>
    </>
  );
};
