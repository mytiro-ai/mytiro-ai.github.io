import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Title, Button, Section, Box, Text } from "../../components/Core";
import { Link } from "gatsby";
import topCurve from "../../assets/SVG/Line.svg";
import Guy from "../../assets/SVG/Banner.svg";
import Banner_mobile from "../../assets/SVG/Banner_mobile.svg";
import { trackCustomEvent } from "gatsby-plugin-google-analytics";
import { device } from "../../utils";
import banner from "../../assets/Png/trackLearnTweakBanner.png";
const Hero = () => {
  const handleClick = (e) => {
    // To stop the page reloading
    e.preventDefault();
    // Lets track that custom click
    trackCustomEvent({
      // string - required - The object that was interacted with (e.g.video)
      category: "Join Waitlist button",
      // string - required - Type of interaction (e.g. 'play')
      action: "Click",
      // string - optional - Useful for categorizing events (e.g. 'Spring Campaign')
      label: "Waitlist form for myTiro",
    });
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdFM9Qpdd_3NSsneAHKNeC8kIAhpyKd1B9CW5OltilgCbiPFw/viewform"
    );
  };

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
              position: fixed;
              width: 100%;
              top: -1rem;
              @media ${device.xl} {
                top: -4.4rem;
              }
            `}
          />
        </Col>
      </Row>

      <Section
        className="position-relative"
        id="hero"
        css={`
          margin-top: 5rem;
          @media ${device.lg} {
            margin-top: 8rem;
          }
          @media ${device.xl} {
            margin-top: 8rem;
          }
        `}
      >
        <Container>
          <Box className="d-flex flex-column align-items-center text-center mt-5">
            <Title variant="hero" color="primary">
              Track. Learn. Tweak.
            </Title>
            {/* <img width="850px" src={banner}></img> */}
            <Text
              color="text"
              css={`
                margin-top: 1%;
                color: #050505;
                font-weight: 500;
              `}
              mb="2.5rem"
            >
              myTiro is the most comprehensive personal time, activity and focus
              tracker.
            </Text>
            <Link>
              <Button
                className="mt-lg-4"
                css={`
                  z-index: 1;
                `}
                onClick={handleClick}
              >
                Try myTiro
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
            margin-top: -10rem;
            position: relative;
            width: 96%;
            left: 2em;
            z-index: 0;
            @media ${device.xl} {
              margin-top: -8rem;
            }
          `}
        />
      </Section>
    </>
  );
};

export default Hero;
