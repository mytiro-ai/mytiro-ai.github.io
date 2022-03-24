import React from "react";
import { Title, Section, Box } from "../../components/Core";

import green from "../../assets/Png/Image_2.png";
import green_image from "../../assets/Png/green_banner_pattern_image.png";
import green_mobile from "../../assets/Png/Image_2_mobile.png";

const getTitle = () => {
  return (
    <Title
      color="light"
      css={`
        line-height: 54px;
        font-size: 50px;
      `}
    >
      There is no right or wrong way to find productivity. <br /> <br />
      myTiro helps you choose your path to productivity, one day at a time.
    </Title>
  );
};

const Green = () => {
  return (
    <>
      <Section
        css={`
          background-image: url(${green_mobile});
          background-size: cover;
          width: 100%;
          z-index: 1;
          margin-bottom: 5%;
          height: auto;
          min-height: 1000px;
          padding: 2% 4%;
        `}
        className="position-relative overflow-hidden green-banner-mobile"
      >
        <Box css={{ height: "55%", minHeight: "100vw" }}></Box>
        <Box>
          {getTitle()}
          {/* <Text
            mb={4}
            color="light"
            opacity={0.7}
            css={`
              line-height: 30px;
              font-size: 20px;
            `}
          >
            We believe that it is by understanding your own patterns that you
            can find the best solutions that truly work for you
          </Text> */}
        </Box>
      </Section>
      <Section
        css={`
          background-image: url(${green});
          background-size: cover;
          width: 100%;
          z-index: 1;
          margin-bottom: 5%;
        `}
        className="position-relative overflow-hidden green-banner"
      >
        <div
          className="d-flex flex-row align-items-center"
          style={{ height: "400px", position: "relative" }}
        >
          <div style={{ height: "100%", width: "20%", overflow: "visible" }}>
            <img
              src={green_image}
              style={{ position: "absolute", left: "-370px", top: "-250px" }}
            />
          </div>
          <div
            style={{
              maxHeight: "400px",
              padding: "0 4%",
              marginLeft: "max(10%, 400px)",
            }}
          >
            {getTitle()}
          </div>
        </div>
        {/* <Row className="green-banner-horizontal">
          <Col lg="2" className="order-lg-1">
            <div style={{ height: "100%", maxHeight: "100%" }}>
              <img
                src={green_image}
                width="250%"
                style={{ position: "relative", minHeight: "100%" }}
              />
            </div>
          </Col>
          <Col lg="10" className="order-lg-2">
            <div style={{ padding: "0 4%", marginLeft: "4%" }}>
              {getTitle()}
            </div>
          </Col>
        </Row> */}
      </Section>
    </>
  );
};

export default Green;
