import React, { useState, useContext } from "react";
import styled from "styled-components";
import { ListGroup, Collapse } from "react-bootstrap";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import { Link } from "gatsby";
import GlobalContext from "../../context/GlobalContext";
import { Link as ScrollLink } from "react-scroll";
import { Button } from "../Core";

const NestedMenuContainer = styled.div`
  a {
    color: ${({ theme }) => theme.colors.dark} !important;
    transition: all 0.3s ease-out;
    font-weight: 700;
    text-transform: capitalize;

    &:hover,
    &:active {
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: none;
    }
  }

  .list-group-item {
    font-weight: 700;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.dark};
    &:hover,
    &:active,
    &.active {
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: none;
      background-color: transparent;
      border-bottom: 1px solid rgba(22, 28, 45, 0.125);
    }

    & + .collapse:not(.show) {
      .list-group-item {
        border: none !important;
        border-width: 0 !important;
      }
    }
    & + .collapse.show {
      .list-group-item {
        &:first-child {
          border-top: none !important;
        }
      }
    }
  }
  .collapse + .list-group-item {
    border-top-width: 0;
  }
  /* .list-group-flush:last-child .list-group-item:last-child {
    border-bottom-width: 1px;
  } */
`;

const defaultMenuItems = [{}];

const MenuItem = ({
  label,
  isExternal = false,
  name,
  items,
  depthStep = 20,
  depth = 0,
  ...rest
}) => {
  const [open, setOpen] = useState(false);
  const hasSubItems = Array.isArray(items);

  const gContext = useContext(GlobalContext);

  return (
    <>
      {hasSubItems ? (
        <ListGroup.Item
          {...rest}
          css={`
            padding-left: ${depth * depthStep}px !important;
            padding-right: 0 !important;
            cursor: pointer;yarn 
          `}
          onClick={() => setOpen(!open)}
          className={`d-flex align-items-center justify-content-between ${
            open ? "active" : ""
          }`}
        >
          <span>{label}</span>
          <span>{open ? <FaAngleDown /> : <FaAngleRight />}</span>
        </ListGroup.Item>
      ) : (
        <ListGroup.Item
          {...rest}
          css={`
            padding-left: ${depth * depthStep}px !important;
            padding-right: 0 !important;
          `}
        >
          {isExternal ? (
            <a
              href={`${name}`}
              onClick={() => {
                if (gContext.visibleOffCanvas) {
                  gContext.toggleOffCanvas();
                }
              }}
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
              onClick={() => {
                if (gContext.visibleOffCanvas) {
                  gContext.toggleOffCanvas();
                }
              }}
            >
              {label}
            </ScrollLink>
          )}
        </ListGroup.Item>
      )}

      {hasSubItems ? (
        <Collapse in={open}>
          <ListGroup>
            {items.map((subItem) => (
              <MenuItem
                key={subItem.name}
                depth={depth + 1}
                depthStep={depthStep}
                {...subItem}
              />
            ))}
          </ListGroup>
        </Collapse>
      ) : null}
    </>
  );
};

const NestedMenu = ({ menuItems = defaultMenuItems }) => {
  return (
    <NestedMenuContainer>
      <ListGroup variant="flush">
        {menuItems.map((menuItem, index) => (
          <MenuItem
            key={`${menuItem.name}${index}`}
            depthStep={20}
            depth={0}
            {...menuItem}
          />
        ))}
      </ListGroup>
      <div className="header-btns header-btns-menu ml-auto ml-lg-0">
        <Link href="/">
          <a
            className="ml-lg-5 mr-lg-1"
            css={`
              margin-bottom: 3em;
            `}
          >
            Sign in
          </a>
        </Link>
        <br />
        <Link href="/">
          <Button className="ml-lg-3 mt-3">Join us</Button>
        </Link>
      </div>
    </NestedMenuContainer>
  );
};

export default NestedMenu;
