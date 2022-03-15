import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../../utils";
import { Row, Col } from "react-bootstrap";
import shoaib from "../../assets/SVG/Shoaib Ahmed.svg";
import rajeev from "../../assets/SVG/Rajeev Ved.svg";
import { Title, Button, Section, Box, Text } from "../../components/Core";
import pattern4 from "../../assets/SVG/Pattern_4@2x.svg";
const ShapeBottomLeft = styled(Box)`
  position: absolute;
  top: -3em;
  left: -13rem;
  img {
    min-width: 100%;
  }
`;

const FeatureCard = ({ imgSrc, name, children, ...rest }) => (
  <Box bg="light" borderRadius={10} mb={4} {...rest}>
    <Box
      fontSize="28px"
      className="d-flex justify-content-center align-items-center"
    >
      <img src={imgSrc} />
    </Box>
    <div>
      <Text fontSize={2} lineHeight={1.75}>
        {children}
      </Text>
    </div>
  </Box>
);

const Leadership = () => {
  const [readShoaib, setReadShoaib] = useState(false);
  const [readRajeev, setReadRajeev] = useState(false);

  const readMoreShoaibData = () => {
    setReadShoaib(!readShoaib);
  };
  const readMoreRajeevData = () => {
    setReadRajeev(!readRajeev);
  };
  return (
    <>
      <Section id="team" className="position-relative">
        <Row className="align-items-center">
          <Col lg="8" className="pl-lg-5 order-lg-2">
            <Row>
              <Col md="1"></Col>
              <Col md="4">
                <FeatureCard imgSrc={shoaib}>
                  <Text
                    className="mb-0"
                    css={`
                      color: black;
                      font-weight: 650;
                      letter-spacing: -2.5px;
                      font-size: 3rem;
                      line-height: 54px;

                      @media ${device.sm} {
                        font-size: 1.5rem;
                        line-height: 62px;
                      }

                      @media ${device.lg} {
                        font-size: 2.1rem;
                        line-height: 70px;
                      }
                    `}
                  >
                    Shoaib Ahmed
                  </Text>
                  <Text>
                    Co-founder and CTO{" "}
                    <a href="/#" target="_blank">
                      <i className="ml-2 icon icon-logo-linkedin"></i>
                    </a>
                  </Text>
                  {readShoaib ? (
                    <Text variant="small" className="mt-1">
                      Shoaib learned to code when he was 10 years old. Ever
                      since, he has ... <br />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas blandit placerat massa non ultrices. Suspendisse
                      pellentesque faucibus est, sed vehicula metus facilisis
                      ac. Quisque facilisis lorem in dui blandit, eget accumsan
                      quam ullamcorper. In eget odio euismod, tempor erat quis,
                      tempor libero. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Donec quis velit a tellus facilisis
                      feugiat vitae vitae velit.
                    </Text>
                  ) : (
                    <Text variant="small" className="mt-1">
                      Shoaib learned to code when he was 10 years old. Ever
                      since, he has ...
                    </Text>
                  )}
                  <div
                    className="nav-link"
                    css={`
                      margin-top: 1em;
                      margin-left: -1em;
                      color: #643992;
                      &: hover;
                    `}
                    onClick={readMoreShoaibData}
                  >
                    {readShoaib ? (
                      <div
                        data-aos="fade-down"
                        data-aos-duration="750"
                        data-aos-once="true"
                        data-aos-delay="300"
                      >
                        Read Less
                        <i className="icon icon-small-up" />
                      </div>
                    ) : (
                      <div
                        data-aos="slide-up"
                        data-aos-duration="750"
                        data-aos-once="true"
                        data-aos-delay="300"
                      >
                        Read More
                        <i className="icon icon-small-down" />
                      </div>
                    )}{" "}
                  </div>
                </FeatureCard>
              </Col>
              <Col md="2"></Col>
              <Col md="4">
                <FeatureCard imgSrc={rajeev}>
                  <Text
                    color="heading"
                    css={`
                      font-weight: 650;
                      letter-spacing: -2.5px;
                      font-size: 3rem;
                      line-height: 54px;

                      @media ${device.sm} {
                        font-size: 1.5rem;
                        line-height: 62px;
                      }

                      @media ${device.lg} {
                        font-size: 2.1rem;
                        line-height: 70px;
                      }
                    `}
                  >
                    Rajeev Ved
                  </Text>
                  <Text>
                    Co-founder and CEO
                    <a href="/#" target="_blank">
                      <i className="ml-2 icon icon-logo-linkedin"></i>
                    </a>
                  </Text>
                  {readRajeev ? (
                    <Text variant="small" className="mt-1">
                      Rajeev has 20+ years of professional experience in the US
                      and India ... <br />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas blandit placerat massa non ultrices. Suspendisse
                      pellentesque faucibus est, sed vehicula metus facilisis
                      ac. Quisque facilisis lorem in dui blandit, eget accumsan
                      quam ullamcorper. In eget odio euismod, tempor erat quis,
                      tempor libero. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Donec quis velit a tellus facilisis
                      feugiat vitae vitae velit.
                    </Text>
                  ) : (
                    <Text variant="small" className="mt-1">
                      Rajeev has 20+ years of professional experience in the US
                      and India ...
                    </Text>
                  )}
                  <div
                    className="nav-link"
                    css={`
                      margin-top: 1em;
                      margin-left: -1em;
                      color: #643992;
                      &: hover;
                    `}
                    onClick={readMoreRajeevData}
                  >
                    {readRajeev ? (
                      <div
                        data-aos="fade-down"
                        data-aos-duration="750"
                        data-aos-once="true"
                        data-aos-delay="300"
                      >
                        Read Less
                        <i className="icon icon-small-up" />
                      </div>
                    ) : (
                      <div
                        data-aos="slide-up"
                        data-aos-duration="750"
                        data-aos-once="true"
                        data-aos-delay="300"
                      >
                        Read More
                        <i className="icon icon-small-down" />
                      </div>
                    )}{" "}
                  </div>
                </FeatureCard>
              </Col>
            </Row>
          </Col>

          <Col lg="4" className="order-lg-1 ">
            <div
              className="feature-content section-title"
              css={`
                margin-top: -10rem;
              `}
            >
              <Row className="align-items-center ml-4">
                <Col lg="0" className="order-lg-1 mb-3">
                  TEAM
                </Col>
              </Row>
              <div className="feature-content section-title ml-4">
                <Title color="black" className="mb-0 ">
                  Leadership
                </Title>
              </div>
            </div>
            <ShapeBottomLeft>
              <img src={pattern4} alt="" className="img-fluid" />
            </ShapeBottomLeft>
          </Col>
        </Row>
      </Section>
    </>
  );
};

export default Leadership;
