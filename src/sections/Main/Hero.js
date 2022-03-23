import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Title, Button, Section, Box, Text } from "../../components/Core";
import { Link } from "gatsby";
import topCurve from "../../assets/SVG/Line@2x.svg";
import Guy from "../../assets/SVG/Banner.svg";
import Banner_mobile from "../../assets/SVG/Banner_mobile.svg";

const Hero = () => {
  return (
    <>
      <Row>
        <Col>
          <img
            src={topCurve}
            alt=""
            className="mt-lg-4 img-fluid position-absolute"
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
          <Box className="d-flex flex-column align-items-center text-center mt-4">
            <Title variant="hero" color="primary">
            Track. Learn. Change
            </Title>
            <Text
              color="text"
              css={`
                margin-top: 1%;
                color: #050505;
              `}
              mb="2.5rem"
            >
              MyTiro is the most comprehensive personal time, activity and focus tracker.
            </Text>
            <Link>
              <Button
                className="mt-lg-4"
                css={`
                  z-index: 1;
                `}
                onClick = {()=> window.open("https://forms.gle/yhfK15wAEx71m6AGA")}
              >
                Join the waitlist
              </Button>
            </Link>
          </Box>
        </Container>
        <Container className="mobile-image-container mt-4">
          <img src={Banner_mobile} width="90%" />
        </Container>

        <img
          src={Guy}
          alt=""
          className="img-fluid"
          id="guy-image"
          css={`
            margin-top: -5rem;
            position: relative;
            width: 96%;
            left: 2em;
            z-index: 0;
          `}
        />
      </Section>
    </>
  );
};

export default Hero;
