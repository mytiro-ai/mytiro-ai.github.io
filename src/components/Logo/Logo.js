import React from "react";
import { Link } from "gatsby";
import imgL1Logo from "../../assets/SVG/Logo.svg";
import imgL1LogoWhite from "../../assets/SVG/Logo@2x.svg";

const Logo = ({ white, height, className = "", ...rest }) => {
  return (
    <Link href="/">
      <a className={`${className}`} {...rest}>
        {white ? (
          <img src={imgL1Logo} alt="" />
        ) : (
          <img src={imgL1LogoWhite} alt="" />
        )}
      </a>
    </Link>
  );
};

export default Logo;