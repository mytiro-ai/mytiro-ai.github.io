import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../../utils";
import { Row, Col } from "react-bootstrap";
import shoaib from "../../assets/SVG/Shoaib Ahmed.svg";
import rajeev from "../../assets/SVG/Rajeev Ved.svg";
import jeniffer from "../../assets/SVG/Jeniffer Prendki.svg";
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
  <Box bg="transparent" borderRadius={10} mb={4} {...rest} css={{}}>
    <Box
      fontSize="28px"
      className="d-flex justify-content-center align-items-center"
      css={{ backgroundColor: "transparent", marginBottom: "24px" }}
    >
      <img src={imgSrc} width="90%" />
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
          <Col lg="3" className="order-lg-1">
            <div className="feature-content section-title">
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
          <Col lg="9" className="pl-lg-5 order-lg-2">
            <Row>
              <Col md="6" lg="4">
                <FeatureCard imgSrc={shoaib}>
                  <Text
                    className="mb-0"
                    css={`
                      color: black;
                      font-weight: 650;
                      font-size: 2.5rem;

                      @media ${device.xs} {
                        font-size: 1.5rem;
                      }

                      @media ${device.lg} {
                        font-size: 2.1rem;
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
                      className="ml-2"
                      style={{verticalAlign: 'middle'}}
                    >
                      <i className="icon icon-logo-linkedin"></i>
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
                      font-size: 2.5rem;

                      @media ${device.xs} {
                        font-size: 1.5rem;
                      }

                      @media ${device.lg} {
                        font-size: 2.1rem;
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
                      style={{verticalAlign: 'middle'}}
                    >
                      <i className="icon icon-logo-linkedin"></i>
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
                      font-size: 2.5rem;

                      @media ${device.xs} {
                        font-size: 1.5rem;
                      }

                      @media ${device.lg} {
                        font-size: 2.1rem;
                      }
                    `}
                  >
                    Dr. Jennifer Prendki
                  </Text>
                  <Text css={{ whiteSpace: "nowrap" }}>
                    Advisor{" "}
                    <a
                      href="https://www.linkedin.com/in/jennifer-prendki"
                      className="ml-2"
                      style={{verticalAlign: 'middle'}}                 
                      target="_blank"
                    >
                      <i className="icon icon-logo-linkedin"></i>
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
        </Row>
      </Section>

      
    </>
  );
};

export default Leadership;
