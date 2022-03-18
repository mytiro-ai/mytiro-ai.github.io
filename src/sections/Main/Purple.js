import React from "react";
import styled from "styled-components";
import { Container, Col } from "react-bootstrap";
import "./Purple.css";
import { Title, Section, Box } from "../../components/Core";

import purplePattern from "../../assets/SVG/Pattern_3@2x.svg";
import purple from "../../assets/Png/Image_1@2x.png";

const ShapeTopRight = styled(Box)`
  position: absolute;
  top: 11em;
  right: -15rem;
`;

const Purple = () => (
  <>
    <div className="position-relative">
      <ShapeTopRight>
        <img src={purplePattern} alt="" className="img-fluid" />
      </ShapeTopRight>
    </div>

    <Section
      css={`
        background-image: url(${purple});
        background-size: cover;
        z-index: 1;
        height: 3.6em;
      `}
      className="position-relative ml-5 mr-5 rounded custom-purple img-fluid d-flex-column align-items-center justify-content-center"
    >
        <Box className="d-flex flex-column align-items-center text-center">
          <Col lg="6" className="order-lg-1">
            <Title color="light">
              At myTiro.ai, we help you understand what your time really looks
              like
            </Title>
          </Col>
        </Box>
    </Section>
  </>
);

export default Purple;
