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
      <ShapeBottomLeft
        id="green-pattern-image"
        css={{ position: "absolute", bottom: "-90vh", left: "-300px" }}
      >
        <img src={greenPattern} alt="" className="img-fluid" />
      </ShapeBottomLeft>
      <Section
        className="position-relative"
        id="why"
        css={`
          margin-top: -2.6em;
          z-index: 1;
          @media ${device.lg} {
            margin-bottom: 7.8em;
          }
          @media only screen and( min-width: ${device.md}) {
            margin-bottom: 2.8em;
          }
        `}
      >
        <ShapeTopRight id="yellow-pattern-image">
          <img src={yellowPattern} alt="" className="img-fluid" />
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
              WHAT WE DO
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
                  We understand{" "}
                  <span style={{ whiteSpace: "nowrap" }}>you - </span>
                  <span
                    css={`
                      color: #643992;
                    `}
                  >
                    your context, patterns, and habits.
                  </span>
                </Text>{" "}
                <div>
                  <Text>
                    You have many demands on your time each day - emails, phone
                    calls, meetings, goals, and lists. We help you find time for
                    the focused, productive work you wish to accomplish.
                  </Text>
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
