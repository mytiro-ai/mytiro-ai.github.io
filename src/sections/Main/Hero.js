import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Title, Button, Section, Box, Text } from "../../components/Core";

import topCurve from "../../assets/SVG/Line@2x.svg";
import Guy from "../../assets/SVG/Banner@2x.svg";
import Banner_mobile from '../../assets/SVG/Banner_mobile.svg';

const Hero = () => {
  return (
    <>
      <Row>
        <Col>
          <img
            src={topCurve}
            alt=""
            className="mt-lg-5 img-fluid position-absolute"
            id="topcurve-image"
            css={`
              width: 100%;
              position: fixed;
            `}
          />
        </Col>
      </Row>

      <Section
        className="position-relative"
        css={`
          margin-top: 8rem;
        `}
      >
        <Container>
          <Box className="d-flex flex-column align-items-center text-center">
            <Title variant="hero" className="mb-0">
              Create Time.
            </Title>
            <Title variant="hero" color="primary">
              Increase Productivity.
            </Title>
            <Text
              color="text"
              css={`
                line-height: 1.5;
              `}
              mb="2.5rem"
            >
              An ML driven productivity platform for busy professionals
            </Text>
            <Button css={`z-index: 1;`}>Get Started</Button>
          </Box>
        </Container>
        <Container className="mobile-image-container">
            <img src={Banner_mobile} width='100%' />
        </Container>

        <img
          src={Guy}
          alt=""
          className="img-fluid"
          id="guy-image"
          css={`
            margin-top: -10rem;
            position: relative;
            width: 100%;
            left: 2em;
            z-index: 0;
          `}
        />
      </Section>
    </>
  );
};

export default Hero;
