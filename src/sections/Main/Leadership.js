import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../../utils";
import { Row, Col } from "react-bootstrap";
import shoaib from "../../assets/SVG/Shoaib Ahmed.svg";
import rajeev from "../../assets/SVG/Rajeev Ved.svg";
import jeniffer from "../../assets/SVG/Jeniffer Prendki.svg";
import aditya from "../../assets/SVG/Aditya Giridharan.svg";
import pranav from "../../assets/SVG/Pranav Iyer.svg";
import rithvik from "../../assets/SVG/Rithvik Konappa.svg";
import { Title, Section, Box, Text } from "../../components/Core";
import pattern4 from "../../assets/SVG/Pattern_4@2x.svg";
import linkedInIcon from '../../assets/SVG/LinkedIn_icon.svg';

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
  <Box bg="transparent" borderRadius={10} mb={4} {...rest} css={{}}>
    <Box
      fontSize="28px"
      className="d-flex align-items-center"
      css={{ backgroundColor: "transparent", marginBottom: "4%" }}
    >
      <img src={imgSrc} width="70%" />
    </Box>
    <div>
      <Text fontSize={2}>{children}</Text>
    </div>
  </Box>
);

const Leadership = () => {
  const [readShoaib, setReadShoaib] = useState(false);
  const [readRajeev, setReadRajeev] = useState(false);
  const [readJeniffer, setReadJeniffer] = useState(false);
  const [readAditya, setreadAditya] = useState(false);
  const [readRithvik, setreadRithvik] = useState(false);
  const [readPranav, setreadPranav] = useState(false);

  const openLinkedIn = (link) => {
    window.open(link);
  }

  const ShoaibContent = [
    `Shoaib is an experienced technology executive whose long term and persistent effort to automate mundane tasks through deep tech led him to myTiro.`,
    `He has been part of the founding team of multiple projects harnessing large datasets and ML. He was recently with GE, working to optimize their power business through large dataset analytics`,
  ];
  const RajeevContent = [
    `Rajeev started myTiro because he could not find a simple tool or technique that told him where, when, and how he was spending his time and how he could improve his productivity daily.`,
    `He has been part of the founding team of two tech startups and one hedge fund. He has 20+ years of experience across US & India, including 8 years as CEO.`,
  ];

  const JenifferContent = [
    `Dr. Prendki, PhD from Sorbonne, is advising myTiro on how to scale high-performance ML and build a data-driven approach.`,
    `She is the founder and CEO of Alectio. Previously, she was the VP of Machine Learning at Figure Eight, the Chief Data Scientist at Atlassian, and a Senior Manager of Data Science in the Search Team at Walmart.`,
  ];
  const AdithyaContent = [
    `Rajeev started myTiro because he could not find a simple tool or technique that told him where, when, and how he was spending his time and how he could improve his productivity daily.`,
    `He has been part of the founding team of two tech startups and one hedge fund. He has 20+ years of experience across US & India, including 8 years as CEO.`,
  ];
  const PranavContent = [
    `Rajeev started myTiro because he could not find a simple tool or technique that told him where, when, and how he was spending his time and how he could improve his productivity daily.`,
    `He has been part of the founding team of two tech startups and one hedge fund. He has 20+ years of experience across US & India, including 8 years as CEO.`,
  ];
  const RithvikContent = [
    `Rithvik is an enthusiastic developer who fell in love with the idea of myTiro.`,
    `Dynamic and passionate, he aspires to bring this productivity tool to every professional’s device.`,
  ];

  const readMoreShoaibData = () => {
    setReadShoaib(!readShoaib);
  };
  const readMoreRajeevData = () => {
    setReadRajeev(!readRajeev);
  };
  const readMoreJenifferData = () => {
    setReadJeniffer(!readJeniffer);
  };
  const readMoreAdityaData = () => {
    setreadAditya(!readAditya);
  };
  const readMorePranavData = () => {
    setreadPranav(!readPranav);
  };
  const readMoreRithvikData = () => {
    setreadRithvik(!readRithvik);
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
          <Col lg="3" className="order-lg-1">
            <div className="feature-content section-title">
              <Row className="leadership-title">
                <Col lg="0" className="order-lg-1 mb-3 section-title-header">
                  TEAM
                </Col>
              </Row>
              <div className="feature-content section-title leadership-title">
                <Title color="black" className="mb-0 ">
                  Leadership & Advisors
                </Title>
              </div>
            </div>
            {/* <ShapeBottomLeft>
              <img src={pattern4} alt="" className="img-fluid" />
            </ShapeBottomLeft> */}
          </Col>
          <Col lg="9" className="pl-lg-5 order-lg-2 mb-4">
            <Row>
              <Col md="6" lg="4">
                <FeatureCard imgSrc={shoaib}>
                  <Text
                    className="mb-0"
                    css={`
                      color: black;
                      font-weight: 650;
                      font-size: 2.1rem;

                      @media ${device.xs} {
                        font-size: 1.5rem;
                      }

                      @media ${device.lg} {
                        font-size: 1.8rem;
                      }
                    `}
                  >
                    Shoaib Ahmed
                  </Text>
                  <Text css={{ whiteSpace: "nowrap" }}>
                    Co-founder and CTO{" "}
                    <a
                      href="https://www.linkedin.com/in/shoaib30/"
                      target="_blank"
                      className="ml-1"
                    >
                      <img src={linkedInIcon} height="21px" style={{margin: 'auto'}}></img>
                    </a>
                  </Text>
                  <Text variant="small" className="mt-1">
                    {ShoaibContent[0]} <br />
                    {readShoaib ? ShoaibContent[1] : ""}
                  </Text>
                  {readShoaib ? (
                    <button
                      onClick={readMoreShoaibData}
                      className="readmore-button"
                    >
                      Read Less <i className="icon icon-small-up" />
                    </button>
                  ) : (
                    <button
                      onClick={readMoreShoaibData}
                      className="readmore-button"
                    >
                      Read More <i className="icon icon-small-down" />
                    </button>
                  )}
                </FeatureCard>
              </Col>

              <Col md="6" lg="4">
                <FeatureCard imgSrc={rajeev}>
                  <Text
                    color="heading"
                    css={`
                      font-weight: 650;
                      font-size: 2.1rem;

                      @media ${device.xs} {
                        font-size: 1.5rem;
                      }

                      @media ${device.lg} {
                        font-size: 1.8rem;
                      }
                    `}
                  >
                    Rajeev Ved
                  </Text>
                  <Text css={{ whiteSpace: "nowrap" }}>
                    Co-founder and CEO
                    <a
                      href="https://www.linkedin.com/in/rajeev-ved/"
                      target="_blank"
                      className="ml-2"
                      style={{height:"20%"}}
                    >
                      <img src={linkedInIcon} height="26px" style={{margin: 'auto'}}></img>
                    </a>
                  </Text>
                  <Text variant="small" className="mt-1">
                    {RajeevContent[0]} <br />
                    {readRajeev ? RajeevContent[1] : ""}
                  </Text>
                  {readRajeev ? (
                    <button
                      onClick={readMoreRajeevData}
                      className="readmore-button"
                      css={{ zIndex: 2 }}
                    >
                      Read Less <i className="icon icon-small-up" />
                    </button>
                  ) : (
                    <button
                      onClick={readMoreRajeevData}
                      className="readmore-button"
                    >
                      Read More <i className="icon icon-small-down" />
                    </button>
                  )}
                </FeatureCard>
              </Col>

              <Col md="6" lg="4">
                <FeatureCard imgSrc={jeniffer}>
                  <Text
                    className="mb-0"
                    css={`
                      color: black;
                      font-weight: 650;
                      font-size: 2.1rem;

                      @media ${device.xs} {
                        font-size: 1.5rem;
                      }

                      @media ${device.lg} {
                        font-size: 1.8rem;
                      }
                    `}
                  >
                    Dr. Jennifer Prendki
                  </Text>
                  <Text css={{ whiteSpace: "nowrap" }}>
                    Advisor{" "}
                    <a
                      href="https://www.linkedin.com/in/jennifer-prendki"
                      className="ml-1"           
                      target="_blank"
                    >
                      <img src={linkedInIcon} height="26px" ></img>
                    </a>
                  </Text>
                  <Text variant="small" className="mt-1">
                    {JenifferContent[0]} <br />
                    {readJeniffer ? JenifferContent[1] : ""}
                  </Text>
                  {readJeniffer ? (
                    <button
                      onClick={readMoreJenifferData}
                      className="readmore-button"
                    >
                      Read Less <i className="icon icon-small-up" />
                    </button>
                  ) : (
                    <button
                      onClick={readMoreJenifferData}
                      className="readmore-button"
                    >
                      Read More <i className="icon icon-small-down" />
                    </button>
                  )}
                </FeatureCard>
              </Col>
            </Row>
          </Col>
          <Col lg="3" className="order-lg-3"></Col>
          <Col lg="9" className="pl-lg-5 order-lg-4 mt-4">
            <Row>
              <Col md="6" lg="4">
                <FeatureCard imgSrc={aditya}>
                  <Text
                    className="mb-0"
                    css={`
                      color: black;
                      font-weight: 650;
                      font-size: 2.1rem;

                      @media ${device.xs} {
                        font-size: 1.5rem;
                      }

                      @media ${device.lg} {
                        font-size: 1.8rem;
                      }
                    `}
                  >
                    Aditya Giridharan
                  </Text>
                  <Text css={{ whiteSpace: "nowrap" }}>
                    Engineering{" "}
                    <a
                      href="https://in.linkedin.com/in/adityagiridharan"
                      target="_blank"
                      className="ml-1"
                    >
                      <img src={linkedInIcon} height="26px" style={{margin: 'auto'}}></img>
                    </a>
                  </Text>
                  <Text variant="small" className="mt-1">
                    {AdithyaContent[0]} <br />
                    {readAditya ? AdithyaContent[1] : ""}
                  </Text>
                  {readAditya ? (
                    <button
                      onClick={readMoreAdityaData}
                      className="readmore-button"
                    >
                      Read Less <i className="icon icon-small-up" />
                    </button>
                  ) : (
                    <button
                      onClick={readMoreAdityaData}
                      className="readmore-button"
                    >
                      Read More <i className="icon icon-small-down" />
                    </button>
                  )}
                </FeatureCard>
              </Col>

              <Col md="6" lg="4">
                <FeatureCard imgSrc={pranav}>
                  <Text
                    color="heading"
                    css={`
                      font-weight: 650;
                      font-size: 2.1rem;

                      @media ${device.xs} {
                        font-size: 1.5rem;
                      }

                      @media ${device.lg} {
                        font-size: 1.8rem;
                      }
                    `}
                  >
                    Pranav Iyer
                  </Text>
                  <Text css={{ whiteSpace: "nowrap" }}>
                    Engineering
                    <a
                      href="https://in.linkedin.com/in/pranaviyer24"
                      target="_blank"
                      className="ml-2"
                      style={{height:"20%"}}
                    >
                      <img src={linkedInIcon} height="26px" style={{margin: 'auto'}}></img>
                    </a>
                  </Text>
                  <Text variant="small" className="mt-1">
                    {PranavContent[0]} <br />
                    {readPranav ? PranavContent[1] : ""}
                  </Text>
                  {readPranav ? (
                    <button
                      onClick={readMorePranavData}
                      className="readmore-button"
                      css={{ zIndex: 2 }}
                    >
                      Read Less <i className="icon icon-small-up" />
                    </button>
                  ) : (
                    <button
                      onClick={readMorePranavData}
                      className="readmore-button"
                    >
                      Read More <i className="icon icon-small-down" />
                    </button>
                  )}
                </FeatureCard>
              </Col>

              <Col md="6" lg="4">
                <FeatureCard imgSrc={rithvik}>
                  <Text
                    className="mb-0"
                    css={`
                      color: black;
                      font-weight: 650;
                      font-size: 2.1rem;

                      @media ${device.xs} {
                        font-size: 1.5rem;
                      }

                      @media ${device.lg} {
                        font-size: 1.8rem;
                      }
                    `}
                  >
                    Rithvik Konappa
                  </Text>
                  <Text css={{ whiteSpace: "nowrap" }}>
                    Engineering{" "}
                    <a
                      href="https://in.linkedin.com/in/rithvik-konappa-3b90261b3"
                      className="ml-1"           
                      target="_blank"
                    >
                      <img src={linkedInIcon} height="26px" ></img>
                    </a>
                  </Text>
                  <Text variant="small" className="mt-1">
                    {RithvikContent[0]} <br />
                    {readRithvik ? RithvikContent[1] : ""}
                  </Text>
                  {readRithvik ? (
                    <button
                      onClick={readMoreRithvikData}
                      className="readmore-button"
                    >
                      Read Less <i className="icon icon-small-up" />
                    </button>
                  ) : (
                    <button
                      onClick={readMoreRithvikData}
                      className="readmore-button"
                    >
                      Read More <i className="icon icon-small-down" />
                    </button>
                  )}
                </FeatureCard>
              </Col>
            </Row>
          </Col>
          <Col lg="3" className="order-lg-5"></Col>
          <Col lg="9" className="pl-lg-5 order-lg-6 mt-4">
            <Row>
              <Col md="6" lg="4">
                <FeatureCard imgSrc={aditya}>
                  <Text
                    className="mb-0"
                    css={`
                      color: black;
                      font-weight: 650;
                      font-size: 2.1rem;

                      @media ${device.xs} {
                        font-size: 1.5rem;
                      }

                      @media ${device.lg} {
                        font-size: 1.8rem;
                      }
                    `}
                  >
                    Mohammed Hasan
                  </Text>
                  <Text css={{ whiteSpace: "nowrap" }}>
                    Engineering{" "}
                    <a
                      href="https://in.linkedin.com/in/adityagiridharan"
                      target="_blank"
                      className="ml-1"
                    >
                      <img src={linkedInIcon} height="26px" style={{margin: 'auto'}}></img>
                    </a>
                  </Text>
                  <Text variant="small" className="mt-1">
                    {AdithyaContent[0]} <br />
                    {readAditya ? AdithyaContent[1] : ""}
                  </Text>
                  {readAditya ? (
                    <button
                      onClick={readMoreAdityaData}
                      className="readmore-button"
                    >
                      Read Less <i className="icon icon-small-up" />
                    </button>
                  ) : (
                    <button
                      onClick={readMoreAdityaData}
                      className="readmore-button"
                    >
                      Read More <i className="icon icon-small-down" />
                    </button>
                  )}
                </FeatureCard>
              </Col>

              <Col md="6" lg="4">
                <FeatureCard imgSrc={pranav}>
                  <Text
                    color="heading"
                    css={`
                      font-weight: 650;
                      font-size: 2.1rem;

                      @media ${device.xs} {
                        font-size: 1.5rem;
                      }

                      @media ${device.lg} {
                        font-size: 1.8rem;
                      }
                    `}
                  >
                    You
                  </Text>
                  <Text css={{ whiteSpace: "nowrap" }}>
                    Engineering
                    <a
                      href="https://in.linkedin.com/in/pranaviyer24"
                      target="_blank"
                      className="ml-2"
                      style={{height:"20%"}}
                    >
                      <img src={linkedInIcon} height="26px" style={{margin: 'auto'}}></img>
                    </a>
                  </Text>
                  <Text variant="small" className="mt-1">
                    {PranavContent[0]} <br />
                    {readPranav ? PranavContent[1] : ""}
                  </Text>
                  {readPranav ? (
                    <button
                      onClick={readMorePranavData}
                      className="readmore-button"
                      css={{ zIndex: 2 }}
                    >
                      Read Less <i className="icon icon-small-up" />
                    </button>
                  ) : (
                    <button
                      onClick={readMorePranavData}
                      className="readmore-button"
                    >
                      Read More <i className="icon icon-small-down" />
                    </button>
                  )}
                </FeatureCard>
              </Col>
            </Row>
          </Col>
        </Row>
      </Section>

      
    </>
  );
};

export default Leadership;
