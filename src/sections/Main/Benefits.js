import React from "react";
import { Row, Col } from "react-bootstrap";
import { Title, Section, Box, Text } from "../../components/Core";

import benefits from "../../assets/SVG/benefits.svg";

//5benefit images
import benefit1 from "../../assets/SVG/Benefits_1.svg";
import benefit2 from "../../assets/SVG/Benefits_2.svg";
import benefit3 from "../../assets/SVG/Benefits_3.svg";
import benefit4 from "../../assets/SVG/Benefits_4.svg";
import benefit5 from "../../assets/SVG/Benefits_5.svg";

const FeatureCard = ({ imgSrc, children, ...rest }) => (
  <Box bg="transparent" mb={4} {...rest} className="d-flex align-items-baseline">
    <Row>
      <Col
        md={1}
        borderRadius="50%"
      >
          <img src={imgSrc} className="mt-1"/>
      </Col>
      <Col md={10}>
        <Box >
          <Text
            lineHeight={1.75}
            className="ml-3 featurecard-text"
            css={{
              color: "#000",
              fontWeight: "500",
            }}
          >
            {children}
          </Text>
        </Box>
      </Col>
    </Row>
  </Box>
);

const Benefits = () => (
  <>
    <Section
      className="position-relative"
      id="benefits"
      css={`
        margin-left: 2.5em;
        margin-right: 2.5em;
      `}
    >
      <Row className="align-items-center">
        <Col lg="6" className="pl-lg-5 order-lg-2">
          <div className="feature-content section-title">
            <Row className="align-items-center">
              <Col lg="0" className="order-lg-1 mb-3 ml-3">
                BENEFITS
              </Col>
            </Row>
            <Title color="black">Merits of myTiro.ai</Title>
          </div>
          <Row className="mt-5">
            <Col md="5">
              <FeatureCard imgSrc={benefit1}>
                Single Source of Truth <br />
                About your activities
              </FeatureCard>
            </Col>
            <Col md="5">
              <FeatureCard imgSrc={benefit4}>
                Identifies your goals
              </FeatureCard>
            </Col>
            <Col md="5">
              <FeatureCard imgSrc={benefit2}>
                Insights to create time <br/> and increase your focuse
              </FeatureCard>
            </Col>
            <Col md="5">
              <FeatureCard imgSrc={benefit5}>
                Tracks your benefits
              </FeatureCard>
            </Col>
            <Col md="5">
              <FeatureCard imgSrc={benefit3}>Daily productivity tips</FeatureCard>
            </Col>
            <Col md="5">
              <FeatureCard imgSrc={benefit3}>Works with existing apps</FeatureCard>
            </Col>
          </Row>
        </Col>

        <Col lg="6" className="order-lg-1 mt-5 mt-lg-0">
          <img
            src={benefits}
            alt=""
            className="img-fluid"
            css={`
              width: 100%;
            `}
          />
        </Col>
      </Row>
    </Section>
  </>
);

export default Benefits;
