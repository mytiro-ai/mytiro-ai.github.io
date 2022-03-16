import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { device } from "../../utils";
import { Section, Box, Text } from "../../components/Core";
import greenPattern from "../../assets/SVG/Pattern_1@2x.svg";
import yellowPattern from "../../assets/SVG/Pattern_2@2x.svg";

const ShapeTopRight = styled(Box)`
  position: absolute;
  top: -5em;
  right: 0;
  @media ${device.sm} {
    max-width: 100%;
  }

  @media ${device.lg} {
    max-width: 100%;
  }
`;

const ShapeBottomLeft = styled(Box)`
  position: absolute;
  bottom: -10em;
  z-index: -1;
  left: -13em;
  img {
    min-width: 100%;
  }
  @media ${device.sm} {
    max-width: 100%;
  }

  @media ${device.lg} {
    max-width: 100%;
  }
`;

const Why = () => {
  let Heading = [
    "Our work is to understand you - ",
    "your ",
    " context, patterns, and habits",
    ".",
  ];

  let Content = [
    `With dozens of emails, phone calls, meetings, and lists, you
                  have many decisions to make each day. We help you spot the
                  spaces for the focused, productive work you wish to
                  accomplish.`,
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas blandit placerat massa non ultrices. Suspendisse
                    pellentesque faucibus est, sed vehicula metus facilisis ac.
                    Quisque facilisis lorem in dui blandit, eget accumsan quam
                    ullamcorper. In eget odio euismod, tempor erat quis, tempor
                    libero. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Donec quis velit a tellus facilisis feugiat vitae
                    vitae velit.`,
  ];
  // const [read, setRead] = useState(false);
  // const readMoreHandler = () => {
  //   setRead(!read);
  // };
  return (
    <>
      <ShapeBottomLeft id="green-pattern-image">
        <img src={greenPattern} alt="" className="img-fluid"/>
      </ShapeBottomLeft>
      <Section
        className="position-relative"
        id="why"
        css={`
          margin-top: -2.6em;
          margin-bottom: 7.8em;
          z-index: 1;
        `}
      >
        <ShapeTopRight  id="yellow-pattern-image">
          <img src={yellowPattern} alt="" className="img-fluid"/>
        </ShapeTopRight>

        {/* <ShapeBottomLeft>
          <img src={greenPattern} alt="" className="img-fluid" />
        </ShapeBottomLeft> */}

        <Container
          css={`
            z-index: -2;
          `}
        >
          <Row className="justify-content-center align-items-center">
            <Col lg="9" className="order-lg-1 mb-3">
              WHY WE ARE
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="9" className="order-lg-1 mt-lg-0">
              <Box>
                <Text
                  css={`
                    font-weight: 700;
                    letter-spacing: -2.5px;
                    font-size: 40px;
                    line-height: 60px;
                    margin-bottom: 16px;
                    color: black;

                    @media ${device.sm} {
                      font-size: 50px;
                      line-height: 62px;
                    }

                    @media ${device.lg} {
                      font-size: 50px;
                      line-height: 60px;
                      margin-bottom: 30px;
                    }
                  `}
                >
                  Our work is to understand <span style={{whiteSpace: 'nowrap'}}>you -</span>
                  <br />
                  your  <span
                    css={`
                      color: #643992;
                    `}
                  >
                    context, patterns, and habits.
                  </span>
                </Text>{" "}
                <div>
                  <Text>{Content[0]}</Text>
                  <Text>{Content[1]}</Text>
                  {/* <Text>{read ? Content[1] : ""}</Text>
                  {read ? (
                    <button onClick={readMoreHandler} className="mt-3">
                      Read Less <i className="icon icon-small-up" />
                    </button>
                  ) : (
                    <button onClick={readMoreHandler} className="mt-3">
                      Read More <i className="icon icon-small-down" />
                    </button>
                  )} */}
                </div>
              </Box>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Why;
