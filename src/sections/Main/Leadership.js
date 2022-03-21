import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../../utils";
import { Row, Col } from "react-bootstrap";
import shoaib from "../../assets/SVG/Shoaib Ahmed.svg";
import rajeev from "../../assets/SVG/Rajeev Ved.svg";
import jeniffer from '../../assets/SVG/Jeniffer Prendki.svg';
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
  const [readJeniffer, setReadJeniffer] = useState(false);

  const ShoaibContent = [
    `Shoaib’s long term and persistent effort to automate mundane tasks through deep tech led him to myTiro.`,
    `He has been part of the founding team of multiple projects harnessing large datasets and ML. He is an experienced technology executive. He was recently with GE working optimizing their power business through large dataset analytics`,
  ];
  const RajeevContent = [
    `Rajeev started myTiro because he could not find a simple tool/technique that told where, when and how he was spending his time and how he can improve his productivity daily.`,
    `Rajeev has been part of founding teams for two tech startups and one hedge fund.  He has 20+ years of experience across US & India, including 8 years as CEO. `,
  ];

  const JenifferContent = [
    `Dr. Prendki, PhD from Sorbonne, is advising on how to scale high-performance ML and data-driven approach at myTiro`,
    `She is the founder and CEO of Alectio. Previously, she was the VP of Machine Learning at Figure Eight, the Chief Data Scientist at Atlassian and a Senior Manager of Data Science in the Search Team at Walmart.`
  ]

  const readMoreShoaibData = () => {
    setReadShoaib(!readShoaib);
  };
  const readMoreRajeevData = () => {
    setReadRajeev(!readRajeev);
  };
  const readMoreJenifferData = () => {
    setReadJeniffer(!readJeniffer);
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

                      @media ${device.xs} {
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
                    {ShoaibContent[0]} {readShoaib ? ShoaibContent[1] : ""}
                  </Text>
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

                      @media ${device.xs} {
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
                    {RajeevContent[0]} {readRajeev ? RajeevContent[1] : ''}
                  </Text>
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
        <Row id="our-advisors-container">
        <Col lg="9" className="pl-lg-5 order-lg-1">
            <Row>
              <Col md="1"></Col>
              <Col md="4">
                <FeatureCard imgSrc={jeniffer}>
                  <Text
                    className="mb-0"
                    css={`
                      color: black;
                      font-weight: 650;
                      letter-spacing: -2.5px;
                      font-size: 3rem;
                      line-height: 54px;

                      @media ${device.xs} {
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
                    Advisor{" "}
                    <a href="/#" target="_blank">
                      <i className="ml-2 icon icon-logo-linkedin"></i>
                    </a>
                  </Text>
                  <Text variant="small" className="mt-1">
                    {JenifferContent[0]} {readJeniffer? JenifferContent[1]: ""}
                  </Text>
                  {readJeniffer ? (
                    <button onClick={readMoreJenifferData} className="readmore-button">
                      Read Less <i className="icon icon-small-up" />
                    </button>
                  ) : (
                    <button onClick={readMoreJenifferData} className="readmore-button">
                      Read More <i className="icon icon-small-down" />
                    </button>
                  )}
                </FeatureCard>
              </Col>
              <Col md="3">
              </Col>
            </Row>
          </Col>
          <Col lg="2" className="order-lg-2">
            <div
              className="feature-content section-title text-left"
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
