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
import hasan from "../../assets/SVG/Moh_Hasan.svg";
import you from "../../assets/SVG/You.svg";
import { Title, Section, Box, Text } from "../../components/Core";
import pattern4 from "../../assets/SVG/Pattern_4@2x.svg";
import linkedInIcon from "../../assets/SVG/LinkedIn_icon.svg";
import pattern from "../../assets/Png/Pattern_5.png";
import { OutboundLink } from "gatsby-plugin-google-analytics";

const ShapeBottomLeft = styled(Box)`
  position: absolute;
  // top: 0em;
  bottom: -187rem;
  left: -13rem;
  img {
    min-width: 100%;
  }
`;

const ShapeBottom = styled(Box)`
  position: absolute;
  bottom: -18.5vw;
  right: -2.5em;
  width: 18vw;
`;

const FeatureCard = ({ imgSrc, name, children, ...rest }) => (
  <Box
    bg="transparent"
    borderRadius={10}
    mb={4}
    {...rest}
    css={{}}
    className="mr-md-4"
  >
    <Box
      fontSize="28px"
      className="d-flex align-items-center"
      css={{ backgroundColor: "transparent", marginBottom: "4%" }}
    >
      <img src={imgSrc} width="70%" style={{ maxWidth: "285px" }} />
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
  const [readHasan, setreadHasan] = useState(false);

  const ShoaibContent = [
    `Shoaib is an experienced technology executive whose long term and persistent effort to automate mundane tasks through deep tech led him to myTiro.`,
    `He has been part of the founding team of multiple projects harnessing large datasets and ML. He was recently with GE, working to optimize their power business through large dataset analytics`,
  ];
  const RajeevContent = [
    `Rajeev started myTiro because he could not find a simple tool or technique that told him where, when and how he was spending his time and how he could improve his productivity daily.`,
    `He has been part of the founding team of two tech startups and one hedge fund. He has 20+ years of experience across US & India, including 8 years as CEO.`,
  ];

  const JenifferContent = [
    `Dr Prendki, PhD from Sorbonne, is advising myTiro on how to scale high-performance ML and build a data-driven approach.`,
    `She is the founder and CEO of Alectio. Previously, she was the VP of Machine Learning at Figure Eight, the Chief Data Scientist at Atlassian and a Senior Manager of Data Science in the Search Team at Walmart.`,
  ];
  const AdithyaContent = [
    `Aditya is a technology enthusiast with a keen interest in designing and architecting backend systems and a love for logic and mathematics.`,
    `He joined myTiro in search of a challenge that would be in equal parts technical and intellectual. Prior to joining myTiro, Aditya worked on the engineering team at Citrix R&D for 2 years.`,
  ];
  const PranavContent = [
    `A versatile developer, Pranav is always looking at better ways to manage his time.`,
    `He has previously worked on mobile network software at Samsung R&D and is passionate about all things UI.`,
  ];
  const RithvikContent = [
    `Rithvik is an enthusiastic developer who fell in love with the idea of myTiro.`,
    `Dynamic and passionate, he aspires to bring this productivity tool to every professional’s device.`,
  ];

  const HasanContent = [
    `Hasan is a developer passionate about building technology that simplifies people's lives.`,
    `At myTiro, he hopes to make use of his skills to create the next big productivity tool.`,
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

  const readMoreHasanData = () => {
    setreadHasan(!readHasan);
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
        <ShapeBottom id="join-pattern">
          <img src={pattern} alt="" className="img-fluid" />
        </ShapeBottom>
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
              <div className="feature-content section-title leadership-title">
                <Title color="black" className="mb-4 ">
                  Team & Advisors
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
                      <img
                        src={linkedInIcon}
                        height="24px"
                        style={{ margin: "auto" }}
                      ></img>
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
                      style={{ height: "20%" }}
                    >
                      <img
                        src={linkedInIcon}
                        height="24px"
                        style={{ margin: "auto" }}
                      ></img>
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
                    Dr Jennifer Prendki
                  </Text>
                  <Text css={{ whiteSpace: "nowrap" }}>
                    Advisor{" "}
                    <a
                      href="https://www.linkedin.com/in/jennifer-prendki"
                      className="ml-1"
                      target="_blank"
                    >
                      <img src={linkedInIcon} height="24px"></img>
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
                      <img
                        src={linkedInIcon}
                        height="24px"
                        style={{ margin: "auto" }}
                      ></img>
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
                      style={{ height: "20%" }}
                    >
                      <img
                        src={linkedInIcon}
                        height="24px"
                        style={{ margin: "auto" }}
                      ></img>
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
                      <img src={linkedInIcon} height="24px"></img>
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
              <Col md="6" lg="4">
                <FeatureCard imgSrc={hasan}>
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
                      href="https://www.linkedin.com/in/mohammad-hasan-1aab24193/"
                      target="_blank"
                      className="ml-1"
                    >
                      <img
                        src={linkedInIcon}
                        height="24px"
                        style={{ margin: "auto" }}
                      ></img>
                    </a>
                  </Text>
                  <Text variant="small" className="mt-1">
                    {HasanContent[0]} <br />
                    {readHasan ? HasanContent[1] : ""}
                  </Text>
                  {readHasan ? (
                    <button
                      onClick={readMoreHasanData}
                      className="readmore-button"
                    >
                      Read Less <i className="icon icon-small-up" />
                    </button>
                  ) : (
                    <button
                      onClick={readMoreHasanData}
                      className="readmore-button"
                    >
                      Read More <i className="icon icon-small-down" />
                    </button>
                  )}
                </FeatureCard>
              </Col>

              <Col md="6" lg="4">
                <FeatureCard imgSrc={you}>
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
                    You?
                  </Text>
                  <Text css={{ whiteSpace: "nowrap" }}>Team Member</Text>
                  <Text variant="small" className="mt-1">
                    Looking for a technical challenge and meaningful work?{" "}
                    <br />
                    <div style={{ marginTop: "3%" }}>
                      <OutboundLink
                        href="https://drive.google.com/file/d/1QyLnbnqPtgH64KsqakdtvpO0yi5is7Jo/view?usp=sharing"
                        target="_blank"
                      >
                        Join our team
                      </OutboundLink>
                    </div>
                  </Text>
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
