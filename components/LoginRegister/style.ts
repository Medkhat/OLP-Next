import styled from "styled-components";
import {
  colors,
  displayFlex,
  mediaQueries,
} from "../../assets/helpers/sc-helpers";

export const LoginWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${colors.activeColor};
  ${displayFlex};
  justify-content: center;
`;
export const FormWrapper = styled.div`
  padding: 100px;
  background-color: ${colors.white};
  box-shadow: 0 10px 20px 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  width: 70%;
  ${displayFlex};
  justify-content: space-between;
  h2 {
    font-weight: 600;
    color: ${colors.activeColor};
    margin-top: 0;
    text-align: center;
  }
  ${mediaQueries("lg")`
    width: 90%;
  `}
  ${mediaQueries("sm")`
    padding: 50px;
  `}
  ${mediaQueries("xs")`
    padding: 20px;
  `}
`;
export const Info = styled.div`
  width: 50%;
  text-align: center;
  margin-right: 100px;
  ${mediaQueries("md")`
    display: none;
  `}
`;
export const Form = styled.form`
  width: 40%;
  margin: 0 auto;
  h2 {
    font-weight: 600;
    color: ${colors.activeColor};
    margin-top: 0;
    text-align: center;
  }
  .form-links {
    display: block;
    color: ${colors.activeColor};
    text-align: center;
    margin: 15px 0;
  }
  .form-button {
    display: block;
    width: 100%;
    font-size: 17px;
  }
  .btn-fg {
    margin-bottom: 0;
  }
  .sign-up-backlink {
    ${displayFlex};
    justify-content: center;
    cursor: pointer;
  }
  .sign-up-backlink span {
    margin-left: 10px;
  }
  .sign-up-backlink:hover {
    color: ${colors.activeColor};
  }
  ${mediaQueries("md")`
    width: 90%;
  `}
`;
