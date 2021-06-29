import styled from "styled-components";
import {
  colors,
  displayFlex,
  mediaQueries,
} from "../../../assets/helpers/sc-helpers";

export const AccordionCard = styled.div`
  border: 1px solid ${colors.borderColor};
  background-color: #fff;
  width: 100%;
  &:first-child {
    border-radius: 5px 5px 0 0;
  }
  &:last-child {
    border-radius: 0 0 5px 5px;
  }
  &:not(:last-child) {
    border-bottom: none;
  }
  .header {
    cursor: pointer;
    user-select: none;
    ${displayFlex};
    justify-content: space-between;
    padding: 10px 20px;
    font-size: 18px;
    ${mediaQueries("md")`font-size: 15px;`}
  }
  .body {
    border-top: 1px solid ${colors.borderColor};
    padding: 20px;
    font-size: 17px;
    ${mediaQueries("md")`font-size: 14px;`}
  }
  a,
  p {
    ${displayFlex};
    padding: 10px 20px;
    margin-bottom: 5px;
    border-radius: 5px;
  }
  a:hover,
  p:hover {
    background-color: ${colors.lightGray};
  }
`;
