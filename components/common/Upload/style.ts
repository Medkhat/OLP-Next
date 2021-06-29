import styled from "styled-components";
import { colors, displayFlex } from "../../../assets/helpers/sc-helpers";
export const FileUpload = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  ${displayFlex};
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  z-index: 2;
  color: ${colors.white};
  label {
    cursor: pointer;
  }
`;
