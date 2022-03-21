import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Box } from "../Core";
import Logo from "../Logo";
import { Link as ScrollLink } from "react-scroll";

import fb_logo from "../../assets/SVG/facebook_icon.svg";
import ig_logo from "../../assets/SVG/Instagram Default.svg";
import linkedin_logo from "../../assets/SVG/LinkedIn Default.svg";

const UlStyled = styled.ul`
  margin-left: 1em;
  padding: 0;
  list-style: none;
  li {
    line-height: 2.25;
    a {
      color: ${({ theme, color }) => theme.colors[color]} !important;
      &:hover {
        text-decoration: none;
        color: ${({ theme, color }) => theme.colors.primary} !important;
      }
    }
  }
`;

const CopyRightArea = styled.div`
  padding: 15px 0;
  align-items: stretch;
  p {
    color: ${({ dark, theme }) =>
      dark ? theme.colors.lightShade : theme.colors.darkShade};
    font-size: 13px;
    font-weight: 300;
    margin-bottom: 0;
    white-space: nowrap;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: inline-flex;
    a {
      color: ${({ dark, theme }) =>
        dark ? theme.colors.light : theme.colors.dark} !important;
      font-size: 16px;
      transition: 0.4s;
      padding: 0 3px;
      margin: 0 2.5px;
      &:visited {
        text-decoration: none;
      }
      &:hover {
        text-decoration: none;
        color: ${({ theme, color }) => theme.colors.secondary} !important;
      }
    }
  }
`;
const Footer = ({ isDark = true }) => {
  return (
    <>
      <Box bg={isDark ? "dark" : "light"}>
        <Box
          css={`
            padding: 80px 0 60px;
            margin-left: 2.5em;
            margin-right: 2.5em;
          `}
        >
          <Row className="justify-content-center">
            <Col lg="2" md="4">
              <Logo white={isDark} />
            </Col>
            <Col lg="10" md="8" className="mt-5 mt-lg-0">
              <Row>
                <Col xs="6" lg="3">
                  <div className="mb-5 mb-lg-4">
                    <UlStyled color={isDark ? "lightShade" : "darkShade"}>
                      <li>
                        <ScrollLink
                          activeClass="active"
                          to={"why"}
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          Why we are
                        </ScrollLink>
                      </li>
                      <li>
                        <ScrollLink
                          activeClass="active"
                          to={"benefits"}
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          Benefits
                        </ScrollLink>
                      </li>
                      <li>
                        <ScrollLink
                          activeClass="active"
                          to={"privacy"}
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          Privacy
                        </ScrollLink>
                      </li>
                      <li>
                        <ScrollLink
                          activeClass="active"
                          to={"team"}
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          Team
                        </ScrollLink>
                      </li>
                    </UlStyled>
                  </div>
                </Col>
                <Col xs="6" lg="3">
                  <div className="mb-5 mb-lg-4">
                    <UlStyled color={isDark ? "lightShade" : "darkShade"}>
                      <li>
                        <a href="/#" target="_blank">
                          Help
                        </a>
                      </li>
                      <li>
                        <a href="/#" target="_blank">
                          Contact us
                        </a>
                      </li>
                      <li>
                        <a href="/#" target="_blank">
                          Terms & conditons
                        </a>
                      </li>
                    </UlStyled>
                  </div>
                </Col>
                <Col xs="6" lg="3"></Col>
                <Col xs="6" lg="3">
                  <CopyRightArea dark={isDark ? 1 : 0}>
                    <Row className="align-items-left ml-1">
                      <Col sm="6" className="text-sm-left">
                        <ul className="social-icons">
                          <li>
                            <a href="/#" target="_blank">
                              <img src={fb_logo}/>
                            </a>
                          </li>

                          <li>
                            <a href="/#" target="_blank">
                            <img src={ig_logo}/>
                            </a>
                          </li>
                          <li>
                            <a href="/#" target="_blank">
                            <img src={linkedin_logo}/>
                            </a>
                          </li>
                        </ul>
                      </Col>
                    </Row>
                    <Col className="text-sm-left mb-sm-0">
                      <p style={{whitespace: 'nowrap !important'}}>&copy; 2022 myTiro.ai, All Rights Reserved</p>
                    </Col>
                  </CopyRightArea>
                </Col>
              </Row>
            </Col>
          </Row>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
