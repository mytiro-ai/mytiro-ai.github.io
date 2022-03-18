import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Title, Section, Box } from "../../components/Core";

import green from "../../assets/SVG/Image_2.svg";
import green_mobile from "../../assets/SVG/Image_2_mobile.svg";

const getTitle = () => {
  return (<Title
            color="light"
            css={`
              line-height: 54px;
              font-size: 50px;
            `}
          >
            There is no right or wrong way to find productivity. <br /> <br/>
            myTiro helps you choose your path to productivity, one day at a time
    </Title>)
}

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
          padding: 0 4%;
        `}
        className="position-relative overflow-hidden green-banner-mobile"
      >
        <Box css={{ height: "55%", minHeight: '100vw' }}></Box>
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
        <Container>
          <Row className="green-banner-horizontal">
            <Col lg="3" className="order-lg-1"></Col>
            <Col lg="9" className="order-lg-2">
              <Box>
                {getTitle()}
              </Box>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Green;
