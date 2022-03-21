import React from "react";
import styled from "styled-components";
import { Title, Section, Box } from "../../components/Core";
import { device } from "../../utils";
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
      <ShapeTopRight id="purple-pattern">
        <img src={purplePattern} alt="" className="img-fluid" />
      </ShapeTopRight>
    </div>

    <Section
      css={`
        background-image: url(${purple});
        background-size: cover;
        z-index: 1;
        padding: 2% 6%;
        border-radius: 32px;
        margin: 0 4%;
        height: auto!important;
        overflow: hidden;
        @media ${device.md} {
          padding: 11% 6%;
        }
      `}
      className="position-relative img-fluid d-flex-column align-items-center justify-content-center"
    >
      <div className="d-flex flex-column justify-content-center align-items-center">
        <Title color="light">
          At myTiro.ai, we help you understand<br /> what your time really looks like
        </Title>
      </div>
    </Section>
  </>
);

export default Purple;
