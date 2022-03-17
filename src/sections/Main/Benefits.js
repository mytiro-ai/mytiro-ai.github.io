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
  <Box bg="transparent" mb={4} {...rest} className="d-flex align-items-center">
    <Box
      size="auto"
      borderRadius="50%"
      className="d-flex justify-content-center align-items-center"
    >
      <img src={imgSrc} />
    </Box>
    <div>
      <Text
        lineHeight={1.75}
        className="ml-3"
        css={`
          color: #000;
          font-weight: 500;
        `}
      >
        {children}
      </Text>
    </div>
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
                Activities to make room <br />
                in your day for focus
              </FeatureCard>
            </Col>
            <Col md="5">
              <FeatureCard imgSrc={benefit4}>
                Sift through your workload to focus on your priorities.
              </FeatureCard>
            </Col>
            <Col md="5">
              <FeatureCard imgSrc={benefit2}>
                Understand what habits you can change.
              </FeatureCard>
            </Col>
            <Col md="5">
              <FeatureCard imgSrc={benefit5}>
                Helps you achieve better outcomes with greater efficiency.
              </FeatureCard>
            </Col>
            <Col md="5">
              <FeatureCard imgSrc={benefit3}>Schedule your tasks.</FeatureCard>
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
