import styled from "styled-components";
import {
  colors,
  displayFlex,
  mediaQueries,
} from "../../../assets/helpers/sc-helpers";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.transparentDark};
  z-index: 9;
  ${displayFlex};
  justify-content: center;
`;
export const Centered = styled.div`
  ${(props) => {
    if (props.className === "confirm")
      return `
                width: 20%;
                ${mediaQueries("md")`width: 40%`};
                ${mediaQueries("sm")`width: 60%`};
                ${mediaQueries("xs")`width: 90%`};
            `;
    if (props.className === "certModal")
      return `
                width: 50%;
                ${mediaQueries("md")`width: 75%`};
                ${mediaQueries("sm")`width: 85%`};
                ${mediaQueries("xs")`width: 95%`};
            `;
  }}
  padding: 10px;
  border-radius: 5px;
  background-color: ${colors.white};
  .modal-header {
    padding-bottom: 10px;
    border-bottom: 1px solid ${colors.borderColor};
    ${displayFlex};
    justify-content: space-between;
    h3 {
      margin: 0;
      font-weight: 400;
      font-size: 20px;
    }
  }
  .modal-body {
    padding: 0 10px 10px;
  }
  .confirm-form p {
    margin: 10px 0 20px;
    font-size: 17px;
    font-weight: 600;
  }
  .confirm-form .confirm-btns {
    text-align: center;
  }
  .confirm-form .confirm-btns button:first-child {
    margin-right: 10px;
  }
`;
