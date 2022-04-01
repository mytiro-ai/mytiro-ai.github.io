import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { Link } from "gatsby";
import { Link as ScrollLink } from "react-scroll";
import GlobalContext from "../../context/GlobalContext";
import Offcanvas from "../Offcanvas";
import { Button } from "../Core";
import NestedMenu from "../NestedMenu";
import { device } from "../../utils";
import Logo from "../Logo";
import { menuItems } from "./menuItems";
import { trackCustomEvent } from "gatsby-plugin-google-analytics";

const SiteHeader = styled.header`
  padding: 10px 0 10px 0;
  position: absolute !important;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 999;
  @media ${device.lg} {
    position: fixed !important;
    transition: 0.4s;
    &.scrolling {
      transform: translateY(-100%);
      transition: 0.4s;
    }
    &.reveal-header {
      transform: translateY(0%);
      box-shadow: 0 12px 34px -11px rgba(65, 62, 101, 0.1);
      z-index: 9999;
      background: ${({ dark, theme }) =>
        dark ? theme.colors.dark : theme.colors.light};
    }
  }

  .navbar {
    @media ${device.md} {
      padding: 0 0;
    }
  }

  /* Bounce To Left */
  .hvr-bounce-to-left {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    position: relative;
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;
    z-index: 1;
  }

  .hvr-bounce-to-left:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #f9544b;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
    -webkit-transition-property: transform;
    -webkit-transition-property: -webkit-transform;
    transition-property: -webkit-transform;
    transition-property: transform;
    transition-property: transform, -webkit-transform;
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }

  // .hvr-bounce-to-left:hover, .hvr-bounce-to-left:focus, .hvr-bounce-to-left:active {
  //   // color: #000 !important;
  // }

  .hvr-bounce-to-left:hover:before,
  .hvr-bounce-to-left:focus:before,
  .hvr-bounce-to-left:active:before {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
    transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
  }
  .btn-red {
    font-size: 16px !important;
    width: 141px !important;
    height: 45px !important;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    border: 1px solid #c31a12;
    background: #f04037;
    color: #fff !important;
    font-family: "CircularStd", sans-serif;
    font-size: 21px;
    font-weight: 500;
    letter-spacing: -0.66px;
  }
`;

const ToggleButton = styled.button`
  color: ${({ dark, theme }) =>
    dark ? theme.colors.lightShade : theme.colors.darkShade}!important;
  border-color: ${({ dark, theme }) =>
    dark ? theme.colors.lightShade : theme.colors.darkShade}!important;
`;

const Menu = styled.ul`
  @media ${device.lg} {
    display: flex;
    justify-content: flex-end;
  }
  .dropdown-toggle {
    cursor: pointer;
  }
  > li {
    > .nav-link {
      @media ${device.lg} {
        color: ${({ dark, theme }) =>
          dark ? theme.colors.light : theme.colors.darkShade}!important;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        padding-top: 18px !important;
        padding-bottom: 18px !important;
        padding-left: 18px !important;
        padding-right: 18px !important;
      }
      &:hover {
        color: ${({ theme }) => theme.colors.primary} !important;
      }
    }
  }
  .nav-item.dropdown {
    @media ${device.lg} {
      position: relative;
      z-index: 99;
    }
    &:hover {
      > .menu-dropdown {
        @media ${device.lg} {
          top: 90%;
          opacity: 1;
          pointer-events: visible;
        }
      }
    }
  }
`;

const MenuDropdown = styled.ul`
  list-style: none;
  @media ${device.lg} {
    top: 110%;
    position: absolute;
    min-width: 227px;
    max-width: 227px;
    box-shadow: 0 52px 54px rgba(65, 62, 101, 0.3);
    border-radius: 8px;
    border: 1px solid #e5e5e5;
    background-color: #ffffff;
    padding: 15px 0px;
    z-index: 99;
    opacity: 0;
    transition: opacity 0.4s, top 0.4s;
    pointer-events: none;
    left: -90%;
    border-radius: 0 0 10px 10px;
    border: 1px solid #eae9f2;
    background-color: #ffffff;
    display: block;
    border-top: ${({ theme }) => `3px solid ${theme.colors.secondary}`};
  }
  > .drop-menu-item {
    color: ${({ theme }) => theme.colors.dark};
    font-size: 16px;
    font-weight: 300;
    letter-spacing: -0.5px;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 10px;
    padding-bottom: 10px;

    a {
      color: ${({ theme }) => theme.colors.dark};
      transition: all 0.3s ease-out;
      position: relative;
      display: flex;
      align-items: center;
      &.dropdown-toggle::after {
        display: inline-block;
        vertical-align: 0.255em;
        content: "";
        border-top: 0.325em solid;
        border-right: 0.325em solid transparent;
        border-bottom: 0;
        border-left: 0.325em solid transparent;
        position: relative;
        top: 1px;
        margin-left: auto;
        transform: rotate(-90deg);
        transition: 0.4s;
      }
    }

    &:hover {
      > a {
        color: ${({ theme }) => theme.colors.secondary};
        text-decoration: none;
        &::after {
          transform: rotate(0deg);
        }
      }
    }
    &.dropdown {
      position: relative;

      &:hover {
        > .menu-dropdown {
          @media ${device.lg} {
            top: 10px;
            opacity: 1;
            pointer-events: visible;
            transform: translateX(-100%);
          }
        }
      }
      > .menu-dropdown {
        border-top-color: ${({ theme }) => theme.colors.primary};
        @media ${device.lg} {
          top: 10px;
          left: 0%;
          opacity: 0;
          transform: translateX(-110%);
          transition: 0.4s;
          pointer-events: none;
        }
        > .drop-menu-item {
          @media ${device.lg} {
            padding-left: 30px;
            padding-right: 30px;
          }
        }
      }
    }
  }
  &.dropdown-right {
    left: auto;
    right: -90%;
  }
`;

const Header = ({ isDark = false }) => {
  const gContext = useContext(GlobalContext);
  const [showScrolling, setShowScrolling] = useState(false);
  const [showReveal, setShowReveal] = useState(false);

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < 0) {
      setShowScrolling(true);
    } else {
      setShowScrolling(false);
    }
    if (currPos.y < 0) {
      setShowReveal(true);
    } else {
      setShowReveal(false);
    }
  });

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
    window.open("https://forms.gle/yhfK15wAEx71m6AGA");
  };

  return (
    <>
      <SiteHeader
        className={`sticky-header ${showScrolling ? "scrolling" : ""} ${
          showReveal ? "reveal-header" : ""
        }`}
        dark={isDark ? 1 : 0}
      >
        <Container fluid css={{ padding: "0 2.5em !important" }}>
          <nav className="navbar site-navbar offcanvas-active navbar-expand-lg navbar-light">
            <ScrollLink
              className="brand-logo"
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              key={-1}
              css={{
                cursor: "pointer",
              }}
            >
              <Logo white={isDark} />
            </ScrollLink>
            <div className="collapse navbar-collapse">
              <div className="navbar-nav ml-lg-auto mr-3">
                <Menu
                  className="navbar-nav d-none d-lg-flex"
                  dark={isDark ? 1 : 0}
                >
                  {menuItems.map(
                    (
                      { label, isExternal = false, name, items, ...rest },
                      index
                    ) => {
                      const hasSubItems = Array.isArray(items);
                      return (
                        <React.Fragment key={name + index}>
                          {hasSubItems ? (
                            ""
                          ) : (
                            <li className="nav-item ml-2 mr-4" {...rest}>
                              {isExternal ? (
                                <a
                                  className="nav-link"
                                  href={`${name}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {label}
                                </a>
                              ) : (
                                <ScrollLink
                                  activeClass="active"
                                  to={name}
                                  spy={true}
                                  smooth={true}
                                  offset={-70}
                                  duration={500}
                                  key={index}
                                  css={{
                                    cursor: "pointer",
                                  }}
                                >
                                  {label}
                                </ScrollLink>
                              )}
                            </li>
                          )}
                        </React.Fragment>
                      );
                    }
                  )}
                </Menu>
              </div>
            </div>
            <div className="header-btns ml-auto d-none d-md-block">
              <Link href="/">
                <a className="ml-lg-5 ">Sign in</a>
              </Link>
              <Link>
                <Button className="ml-md-3" onClick={handleClick} css={{textTransform: "none", fontSize: "0.8em"}}>
                  Join the Waitlist
                </Button>
              </Link>
            </div>
            <ToggleButton
              className={`navbar-toggler btn-close-off-canvas ml-3 ${
                gContext.visibleOffCanvas ? "collapsed" : ""
              }`}
              type="button"
              data-toggle="collapse"
              data-target="#mobile-menu"
              aria-controls="mobile-menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={gContext.toggleOffCanvas}
              dark={isDark ? 1 : 0}
              style={{ marginLeft: "auto" }}
            >
              {/* <i className="icon icon-simple-remove icon-close"></i> */}
              <i className="icon icon-menu-34 icon-burger d-block"></i>
            </ToggleButton>
          </nav>
        </Container>
      </SiteHeader>
      <Offcanvas
        show={gContext.visibleOffCanvas}
        onHideOffcanvas={gContext.toggleOffCanvas}
      >
        <NestedMenu menuItems={menuItems} />
      </Offcanvas>
    </>
  );
};
export default Header;
