import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Title, Section, Text } from "../../components/Core";
import privacy from "../../assets/SVG/Privacy.svg";

const Privacy = () => {
  const [read, setRead] = useState(false);
  const readMoreHandler = () => {
    setRead(!read);
  };
  const cssClasses = ["read", read ? "readMore graduallyGoDown" : "readLess"];

  let Content = [
    `Your data is fully encrypted.  No human can access your data. We make sure that your information is used to help you be mindfully productive.  

    Make your data work for you.`,
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
        `}
      >
        <Row className="align-items-center">
          <Col lg="6" className="order-lg-1" css={{padding: '0 6% !important'}}>
            <div className="feature-content section-title">
              <Row className="align-items-center">
                <Col lg="0" className="order-lg-1 mb-3 ml-3">
                  PRIVACY
                </Col>
              </Row>
              <div className="feature-content section-title">
                <Title color="black" className="mb-0" css={{margin: '5% 0'}}>
                  End-to-end security
                </Title>
                <div className="mt-5">
                  <Text
                    css={`
                      font-weight: 400;
                      font-size: 20px;
                      line-height: 30px;
                    `}
                  >
                    Your data is fully encrypted.  No human can access your data. We make sure that your information is used to help you be mindfully productive.
                    <br/><br/>
                    Make your data work for you. <br /><br/>
                  </Text>
                  {/* <Text
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
                  )} */}
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
