import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useContext,
  useRef,
} from "react";

import styled, { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";
import AOS from "aos";

import Header from "../Header";
import Footer from "../Footer";

import GlobalContext from "../../context/GlobalContext";

import GlobalStyle from "../../utils/globalStyle";

import imgFavicon from "../../assets/favicon.png";

import "../../assets/fonts/icon-font/fonts/avasta.ttf";
import "../../assets/fonts/icon-font/fonts/Grayic.ttf";
import "../../assets/fonts/icon-font/css/style.css";

import "./bootstrap-custom.scss";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "../../../node_modules/aos/dist/aos.css";

import "../../assets/fonts/icon-font/css/style.css";

import { get, merge } from "lodash";

// the full theme object
import { theme as baseTheme } from "../../utils";

const Loader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #fff;
  z-index: 9999999999;
  opacity: 1;
  visibility: visible;
  transition: all 1s ease-out 1.5s;
  &.inActive {
    opacity: 0;
    visibility: hidden;
  }
`;

// options for different color modes
const modes = { light: "light", dark: "dark" };

// merge the color mode with the base theme
// to create a new theme object
const getTheme = (mode) =>
  merge({}, baseTheme, {
    colors: get(baseTheme.colors.modes, mode, baseTheme.colors),
  });

const Layout = ({ children, pageContext }) => {
  const gContext = useContext(GlobalContext);

  const [visibleLoader, setVisibleLoader] = useState(true);

  useLayoutEffect(() => {
    AOS.init();
    setVisibleLoader(false);
  }, []);

  // Navbar style based on scroll
  const eleRef = useRef();

  if (pageContext.layout === "bare") {
    return (
      <ThemeProvider
        theme={
          gContext.themeDark ? getTheme(modes.dark) : getTheme(modes.light)
        }
      >
        <GlobalStyle />
        <Helmet>
          <title>myTiro - Track. Learn. Tweak</title>
          <link rel="icon" type="image/png" href={imgFavicon} />
          <meta
            name="description"
            content="The most comprehensive personal time, activity and focus tracker."
          />
          <meta
            name="image"
            content="/static/Logo-0bb592d2045106ef6d15946d57144df1.svg"
          />
          <meta
            name="keywords"
            content="productivity, time, tracker, learn, goals, tips, calendar"
          />
          <meta property="og:title" content="myTiro - Track. Learn. Tweak" />
          <meta
            property="og:description"
            content="The most comprehensive personal time, activity and focus tracker."
          />
          <meta
            property="og:image"
            content="/static/Logo-0bb592d2045106ef6d15946d57144df1.svg"
          />
          <meta property="og:url" content="https://mytiro.ai" />
        </Helmet>
        <Loader id="loading" className={visibleLoader ? "" : "inActive"}>
          <div className="load-circle">
            <span className="one"></span>
          </div>
        </Loader>
        <div className="site-wrapper overflow-hidden" ref={eleRef}>
          {children}
        </div>
      </ThemeProvider>
    );
  }

  return (
    <>
      <ThemeProvider
        theme={
          gContext.themeDark ? getTheme(modes.dark) : getTheme(modes.light)
        }
      >
        <GlobalStyle />
        <Helmet>
          <title>myTiro - Track. Learn. Tweak</title>
          <link rel="icon" type="image/png" href={imgFavicon} />
          <meta
            name="description"
            content="The most comprehensive personal time, activity and focus tracker."
          />
          <meta
            name="image"
            content="/static/Logo-0bb592d2045106ef6d15946d57144df1.svg"
          />
          <meta
            name="keywords"
            content="productivity, time, tracker, learn, goals, tips, calendar"
          />
          <meta property="og:title" content="myTiro - Track. Learn. Tweak" />
          <meta
            property="og:description"
            content="The most comprehensive personal time, activity and focus tracker."
          />
          <meta
            property="og:image"
            content="/static/Logo-0bb592d2045106ef6d15946d57144df1.svg"
          />
          <meta property="og:url" content="https://mytiro.ai" />
        </Helmet>
        <Loader id="loading" className={visibleLoader ? "" : "inActive"}>
          <div className="load-circle">
            <span className="one"></span>
          </div>
        </Loader>
        <div className="site-wrapper overflow-hidden" ref={eleRef}>
          <Header isDark={gContext.headerDark} />
          {children}

          <Footer isDark={gContext.footerDark} />
        </div>
      </ThemeProvider>
    </>
  );
};

export default Layout;
