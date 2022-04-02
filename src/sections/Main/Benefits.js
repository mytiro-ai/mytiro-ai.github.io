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
import benefit6 from "../../assets/SVG/Benefits_6.svg";

const FeatureCard = ({ imgSrc, children, ...rest }) => (
  <Box
    bg="transparent"
    mb={4}
    {...rest}
    className="d-flex align-items-baseline justify-content"
  >
    <Row>
      <Col xs={1} borderRadius="50%">
        <img src={imgSrc} className="mt-1" />
      </Col>
      <Col xs={10}>
        <Box>
          <Text
            lineHeight={1.75}
            className="ml-4 featurecard-text"
            css={{
              color: "#000",
              fontWeight: "500",
              fontSize: "1.125rem",
              fontFamily: "Roboto,sans-serif",
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
    <Section className="position-relative" id="benefits" css={``}>
      <Row className="align-items-center">
        <Col lg="7" className="order-lg-2" css={{ padding: "0 6%!important" }}>
          <div className="feature-content section-title">
            <Row className="align-items-center">
              <Col lg="0" className="order-lg-1 mb-1 ml-3 section-title-header">
                BENEFITS
              </Col>
            </Row>
            <Title className="mt-lg-4" color="black">
              Merits of myTiro
            </Title>
          </div>
          <Row className="mt-5">
            <Col md="7" sm="12">
              <FeatureCard imgSrc={benefit1}>
                <span style={{ fontWeight: 520, color: "#643992" }}>
                  Track{" "}
                </span>
                all your activities -<br />
                gives a single source of truth
              </FeatureCard>
            </Col>
            <Col md="5" sm="12">
              <FeatureCard imgSrc={benefit3}>Identifies your goals</FeatureCard>
            </Col>
            <Col md="7" sm="12">
              <FeatureCard imgSrc={benefit4}>
                <span style={{ fontWeight: 520, color: "#643992" }}>Learn</span>{" "}
                about your habits -<br />
                insights to create time and focus
              </FeatureCard>
            </Col>
            <Col md="5" sm="12">
              <FeatureCard imgSrc={benefit5}>Tracks your benefits</FeatureCard>
            </Col>
            <Col md="7" sm="12">
              <FeatureCard imgSrc={benefit2}>
                Daily productivity{" "}
                <span style={{ fontWeight: 520, color: "#643992" }}>Tweak</span>{" "}
                -<br />
                compound benefits
              </FeatureCard>
            </Col>
            <Col md="5" sm="12">
              <FeatureCard imgSrc={benefit6}>
                Works with existing apps
              </FeatureCard>
            </Col>
          </Row>
        </Col>

        <Col lg="5" className="order-lg-1 mt-5 mt-lg-0">
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
