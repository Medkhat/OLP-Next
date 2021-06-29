import styled from "styled-components";
import { colors, mediaQueries } from "../../assets/helpers/sc-helpers";
export const NavbarWrapper = styled.nav`
  width: 50px;
  height: 100%;
  position: fixed;
  border-right: 1px solid #ccc;
  background-color: ${colors.white};
`;
export const NavLink = styled.a`
  display: block;
  padding: 20px 0;
  position: relative;
  cursor: pointer;
  color: ${(props) => (props.headingLink ? colors.activeColor : colors.color)};
  padding: ${(props) => (props.headingLink ? "7px 15px" : "20px 0")};
  border-radius: ${(props) => (props.br ? "3px" : "0")};
  transition: background-color 0.15s;
  -webkit-transition: background-color 0.15s;
  -o-transition: background-color 0.15s;
  -moz-transition: background-color 0.15s;
  :hover {
    color: ${colors.activeColor};
    background-color: ${colors.lightGray};
    transition: background-color 0.15s;
    -webkit-transition: background-color 0.15s;
    -o-transition: background-color 0.15s;
    -moz-transition: background-color 0.15s;
  }
  &.active {
    color: ${colors.activeColor};
    background-color: ${colors.lightGray};
  }
  .text {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    background-color: ${colors.lightGray};
    padding: 3px 10px;
    color: rgb(0, 0, 0);
    border-radius: 2px;
    opacity: 0;
    visibility: hidden;
    transition: 0.15s;
    -webkit-transition: 0.15s;
    -o-transition: 0.15s;
    -moz-transition: 0.15s;
    z-index: 10;
  }
  :hover > .text {
    opacity: 1;
    visibility: visible;
    left: 60px;
    transition: 0.15s;
    -webkit-transition: 0.15s;
    -o-transition: 0.15s;
    -moz-transition: 0.15s;
  }
  ${mediaQueries("sm")`
        padding: 15px 0;
    `}
`;
