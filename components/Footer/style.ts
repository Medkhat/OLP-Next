import styled from "styled-components";
import {
  colors,
  displayFlex,
  mediaQueries,
} from "../../assets/helpers/sc-helpers";

export const FooterWrapper = styled.footer`
  padding: 40px 0;
  margin-top: 100px;
  background-color: ${colors.lightGray};
`;
export const FooterGridLayout = styled.div`
  display: grid;
  display: -ms-grid;
  display: -moz-grid;
  gap: 0 30px;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 40px;
  ${mediaQueries("md")`
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;
    `}
  ${mediaQueries("sm")`
        grid-template-columns: repeat(1, 1fr);
        gap: 30px;
    `}
`;
export const FooterColumn = styled.div`
  a {
    display: block;
    margin-bottom: 5px;
    padding-left: 10px;
  }
  a:hover {
    color: ${colors.activeColor};
  }
  a,
  p {
    font-size: 14px;
    color: ${colors.color};
  }
  h3 {
    color: ${colors.activeColor};
  }
  h5 {
    font-weight: 500;
    font-size: 16px;
  }
  h3,
  h5 {
    margin-top: 0;
    margin-bottom: 15px;
  }
  form {
    margin-top: 15px;
    position: relative;
  }
`;
export const CopyRightWrapper = styled.div`
  padding-top: 20px;
  border-top: 1px solid ${colors.borderColor};
  color: ${colors.color};
  ${displayFlex};
  justify-content: space-between;
  a {
    margin: 0 5px;
  }
  ${mediaQueries("sm")`
        display: block !important;
        p:first-child {
            margin-bottom: 20px;
        }
    `}
`;
