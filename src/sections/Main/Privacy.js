import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Title, Section, Text } from "../../components/Core";
import privacy from "../../assets/SVG/privacy.svg";

const Privacy = () => {
  const [read, setRead] = useState(false);
  const readMoreHandler = () => {
    setRead(!read);
  };
  const cssClasses = ["read", read ? "readMore graduallyGoDown" : "readLess"];

  let Content = [
    `In your life on the internet, data is always used to divert
                  your attention away from your priorities. We make sure that
                  your data is not only absolutely secure but used only to help
                  you focus. We will never sell your data, or use it without
                  your permission.`,
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas blandit placerat massa non ultrices. Suspendisse
                    pellentesque faucibus est, sed vehicula metus facilisis ac.
                    Quisque facilisis lorem in dui blandit, eget accumsan quam
                    ullamcorper. In eget odio euismod, tempor erat quis, tempor
                    libero. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Donec quis velit a tellus facilisis feugiat vitae
                    vitae velit.`,
  ];
  return (
    <>
      <Section
        className="position-relative overflow-hidden"
        id="privacy"
        css={`
          margin-top: -10em;
          margin-left: 2.5em;
          margin-right: 2.5em;
        `}
      >
        <Row className="align-items-center">
          <Col lg="6" className="pl-lg-5 order-lg-1">
            <div className="feature-content section-title">
              <Row className="align-items-center">
                <Col lg="0" className="order-lg-1 mb-3 ml-3">
                  PRIVACY
                </Col>
              </Row>
              <div className="feature-content section-title">
                <Title color="black" className="mb-0">
                  End-to-end security
                </Title>
                <Text
                  color="primary"
                  variant="strong"
                  css={`
                    font-weight: 700;
                    font-size: 24px;
                    line-height: 30px;
                  `}
                >
                  We believe in 100% data privacy
                </Text>
                <div className="mt-3">
                  <Text
                    css={`
                      font-weight: 400;
                      font-size: 20px;
                      line-height: 30px;
                    `}
                  >
                    {Content[0]}
                  </Text>
                  <Text
                    css={`
                      font-weight: 400;
                      font-size: 20px;
                      line-height: 30px;
                    `}
                  >
                    {read ? Content[1] : ""}
                  </Text>
                  {read ? (
                    <button onClick={readMoreHandler} className="mt-3">
                      Read Less <i className="icon icon-small-up" />
                    </button>
                  ) : (
                    <button onClick={readMoreHandler} className="mt-3">
                      Read More <i className="icon icon-small-down" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </Col>

          <Col lg="6" className="order-lg-2 mt-5 mt-lg-0">
            <img
              src={privacy}
              alt=""
              className="img-fluid"
              css={`
                width: 100vw;
              `}
            />
          </Col>
        </Row>
      </Section>
    </>
  );
};

export default Privacy;
