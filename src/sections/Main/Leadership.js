import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../../utils";
import { Row, Col } from "react-bootstrap";
import shoaib from "../../assets/SVG/Shoaib Ahmed.svg";
import rajeev from "../../assets/SVG/Rajeev Ved.svg";
import { Title, Section, Box, Text } from "../../components/Core";
import pattern4 from "../../assets/SVG/Pattern_4@2x.svg";

const ShapeBottomLeft = styled(Box)`
  position: absolute;
  // top: 0em;
  bottom: -187rem;
  left: -13rem;
  img {
    min-width: 100%;
  }
`;

const FeatureCard = ({ imgSrc, name, children, ...rest }) => (
  <Box bg="transparent" borderRadius={10} mb={4} {...rest} css={{overflow: 'visible'}}>
    <Box
      fontSize="28px"
      className="d-flex justify-content-center align-items-center"
      css={{backgroundColor: 'transparent'}}
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

  const ShoaibContent = [
    `Shoaib learned to code when he was 10 years old. Ever since,
                    he has ...`,
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas blandit placerat massa non ultrices. Suspendisse
                      pellentesque faucibus est, sed vehicula metus facilisis
                      ac. Quisque facilisis lorem in dui blandit, eget accumsan
                      quam ullamcorper. In eget odio euismod, tempor erat quis,
                      tempor libero. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Donec quis velit a tellus facilisis
                      feugiat vitae vitae velit.`,
  ];
  const RajeevContent = [
    `Rajeev has 20+ years of professional experience in the US
                    and India ...`,
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas blandit placerat massa non ultrices. Suspendisse
                      pellentesque faucibus est, sed vehicula metus facilisis
                      ac. Quisque facilisis lorem in dui blandit, eget accumsan
                      quam ullamcorper. In eget odio euismod, tempor erat quis,
                      tempor libero. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Donec quis velit a tellus facilisis
                      feugiat vitae vitae velit.`,
  ];

  const readMoreShoaibData = () => {
    setReadShoaib(!readShoaib);
  };
  const readMoreRajeevData = () => {
    setReadRajeev(!readRajeev);
  };
  return (
    <>
      <Section
        id="team"
        className="position-relative"
        css={`
          margin-left: 2.5em;
          margin-right: 2.5em;
        `}
      >
        <img
          src={pattern4}
          alt=""
          className="img-fluid"
          id="leadership-pattern"
          //style={{ position: "absolute", top: 100, left: -300 }}
        />
        <Row className="align-items-flex-start">
          <Col lg="4" className="order-lg-1">
            <div
              className="feature-content section-title"
            >
              <Row className="leadership-title">
                <Col lg="0" className="order-lg-1 mb-3">
                  TEAM
                </Col>
              </Row>
              <div className="feature-content section-title leadership-title">
                <Title color="black" className="mb-0 ">
                  Leadership
                </Title>
              </div>
            </div>
            {/* <ShapeBottomLeft>
              <img src={pattern4} alt="" className="img-fluid" />
            </ShapeBottomLeft> */}
          </Col>
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
                  <Text variant="small" className="mt-1">
                    {ShoaibContent[0]}
                  </Text>
                  {readShoaib ? (
                    <Text variant="small">{ShoaibContent[1]}</Text>
                  ) : (
                    ""
                  )}
                  {readShoaib ? (
                    <button onClick={readMoreShoaibData} className="readmore-button">
                      Read Less <i className="icon icon-small-up" />
                    </button>
                  ) : (
                    <button onClick={readMoreShoaibData} className="readmore-button">
                      Read More <i className="icon icon-small-down" />
                    </button>
                  )}
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
                  <Text variant="small" className="mt-1">
                    {RajeevContent[0]}
                  </Text>
                  {readRajeev ? (
                    <Text variant="small" >{RajeevContent[1]}</Text>
                  ) : (
                    ""
                  )}
                  {readRajeev ? (
                    <button onClick={readMoreRajeevData} className="readmore-button" css={{zIndex: 2}}>
                      Read Less <i className="icon icon-small-up" />
                    </button>
                  ) : (
                    <button onClick={readMoreRajeevData} className="readmore-button">
                      Read More <i className="icon icon-small-down" />
                    </button>
                  )}
                </FeatureCard>
              </Col>
            </Row>
          </Col>
        </Row>
      </Section>
      
      <Section
        id="team"
        className="position-relative"
        css={`
          margin-left: 2.5em;
          margin-right: 2.5em;
          height: auto;
        `}
      >
        <img
          src={pattern4}
          alt=""
          className="img-fluid"
          id="leadership-pattern-advisors"
          style={{ position: "absolute", top: 100, right: -300 }}
        />
        <Row className="align-items-center" id="our-advisors-container">
        <Col lg="8" className="pl-lg-5 order-lg-1">
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
                    Jennifer
                  </Text>
                  <Text>
                    Co-founder and CTO{" "}
                    <a href="/#" target="_blank">
                      <i className="ml-2 icon icon-logo-linkedin"></i>
                    </a>
                  </Text>
                  <Text variant="small" className="mt-1">
                    {ShoaibContent[0]}
                  </Text>
                  {readShoaib ? (
                    <Text variant="small">{ShoaibContent[1]}</Text>
                  ) : (
                    ""
                  )}
                  {readShoaib ? (
                    <button onClick={readMoreShoaibData} className="readmore-button">
                      Read Less <i className="icon icon-small-up" />
                    </button>
                  ) : (
                    <button onClick={readMoreShoaibData} className="readmore-button">
                      Read More <i className="icon icon-small-down" />
                    </button>
                  )}
                </FeatureCard>
              </Col>
              <Col md="2"></Col>
              <Col md="4">
              </Col>
            </Row>
          </Col>
          <Col lg="4" className="order-lg-2">
            <div
              className="feature-content section-title"
            >
              <Row className="leadership-title">
                <Col lg="0" className="order-lg-1 mb-3">
                  OUR
                </Col>
              </Row>
              <div className="feature-content section-title leadership-title">
                <Title color="black" className="mb-0 ">
                  Advisors
                </Title>
              </div>
            </div>
            {/* <ShapeBottomLeft>
              <img src={pattern4} alt="" className="img-fluid" />
            </ShapeBottomLeft> */}
          </Col>
        </Row>
      </Section>
    </>
  );
};

export default Leadership;
