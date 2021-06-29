import styled from "styled-components";
import { colors, mediaQueries } from "../../../assets/helpers/sc-helpers";

export const DropdownWrapper = styled.div`
  ${(props) => {
    if (props.type === "language")
      return `
                top: 47px;
                left: 0;
                right: 0;
                width: 100%;
            `;
    else if (props.type === "profile")
      return `
                top: 54px;
                left: auto;
                right: 5px;
                width: auto;
                ${mediaQueries("sm")`
                    top: 55px;
                `}
            `;
  }};
  display: block;
  position: absolute;
  background-color: ${colors.white};
  padding: 10px 0;
  border: 1px solid ${colors.borderColor};
  border-radius: 5px;
  margin-left: 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  -webkit-transform: translateY(-10px);
  -moz-transform: translateY(-10px);
  -ms-transform: translateY(-10px);
  transition: transform 0.2s ease-out;
  -webkit-transition: transform 0.2s ease-out;
  -o-transition: transform 0.2s ease-out;
  -moz-transition: transform 0.2s ease-out;
  &.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
  }
  a {
    display: block;
    text-align: center;
    padding: 5px 15px;
    transition: background-color 0.15s;
    -webkit-transition: background-color 0.15s;
    -o-transition: background-color 0.15s;
    -moz-transition: background-color 0.15s;
    &:hover {
      background-color: ${colors.lightGray};
      transition: background-color 0.15s;
      -webkit-transition: background-color 0.15s;
      -o-transition: background-color 0.15s;
      -moz-transition: background-color 0.15s;
    }
  }
  ${mediaQueries("sm")`
        .text {
            display: none;
        }
    `}
`;
