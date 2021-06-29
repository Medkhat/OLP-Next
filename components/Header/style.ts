import styled from "styled-components";
import {
  colors,
  displayFlex,
  mediaQueries,
} from "../../assets/helpers/sc-helpers";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 10px;
  border-bottom: 1px solid #ccc;
  ${displayFlex};
  justify-content: space-between;
  position: fixed;
  background-color: #fff;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  ${mediaQueries("sm")`
        height: 50px;
    `}
`;
export const Logo = styled.h3`
  font-size: 20px;
  margin: 0;
  font-weight: 400;
  color: ${colors.activeColor};
  ${mediaQueries("md")`font-size:24px;`}
  ${mediaQueries("xs")`font-size:20px;`}
`;
export const HeaderInfo = styled.div`
  ${displayFlex};
  justify-content: flex-end;
  width: 50%;
  & > div {
    margin-left: 30px;
    ${mediaQueries("sm")`
            margin-left: 10px;
        `}
    ${mediaQueries("xs")`
            margin-left: 0px;
            font-size: 13px;
        `}
  }
  ${mediaQueries("lg")`
        width: 70%;
    `}
`;
export const SearchWrapper = styled.form`
  flex: 1;
  text-align: right;
`;
export const LangWrapper = styled.div`
  position: relative;
`;
export const ActiveLang = styled.div`
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 3px;
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
  img {
    width: 20px;
    vertical-align: middle;
    margin-right: 5px;
  }
  ${mediaQueries("sm")`
        .text {
            display: none;
        }
    `}
`;
export const HeaderPhoto = styled.div`
  width: 50px;
  height: 100%;
  cursor: pointer;
  padding: 5px;
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
  img {
    width: 100%;
    border-radius: 50%;
    vertical-align: middle;
  }
  ${mediaQueries("sm")`
        width: 43px;
    `}
`;
export const SignInSignOut = styled.div`
  margin-left: 30px;
  a {
    color: ${colors.activeColor};
  }
`;
