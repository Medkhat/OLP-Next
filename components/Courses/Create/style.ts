import styled from "styled-components";
import { colors, displayFlex } from "../../../assets/helpers/sc-helpers";

export const Wrapper = styled.div`
  padding-top: 15px;
  h3 {
    margin-top: 0;
  }
`;
export const FormWrapper = styled.form`
  ${displayFlex};
  align-items: stretch;
  justify-content: space-between;
  .right {
    width: 30%;
    margin-left: 30px;
  }
  .left {
    flex: 1;
  }
  .formBtns {
    ${displayFlex};
    justify-content: space-between;
    position: sticky;
    position: -webkit-sticky;
    top: 60px;
  }
  .formBtns button {
    font-size: 16px;
    width: 49%;
  }
`;
export const FormGroup = styled.div`
  margin-bottom: 20px;
  position: relative;

  input {
    width: 100%;
    padding: 10px;
    font-size: 15px;
  }
  .image-position {
    ${displayFlex};
    justify-content: center;
    height: 190px;
    border: 2px dashed ${colors.borderColor};
    background-color: ${colors.lightGray};
    cursor: pointer;
    :hover {
      background-color: ${colors.borderColor};
      border-color: ${colors.white};
    }
  }
  .img {
    width: 100%;
    object-fit: cover;
    -o-object-fit: cover;
  }
  :hover .overlay,
  :hover .uploader {
    opacity: 1;
    visibility: visible;
    height: 100%;
  }
`;

export const ErrorText = styled.p`
  font-size: 14px;
  padding-left: 10px;
  margin-top: 5px;
  color: ${colors.red};
`;
