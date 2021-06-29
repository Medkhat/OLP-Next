import styled from "styled-components";
import {
  colors,
  displayFlex,
  mediaQueries,
} from "../../../assets/helpers/sc-helpers";

export const HeadingWrapper = styled.div`
  ${displayFlex};
  justify-content: space-between;
  margin-bottom: 30px;
  ${mediaQueries("sm")`
        display: block !important;
        text-align: center;
    `}
`;
export const HeadingText = styled.h2`
  ${(props) => {
    if (props.postsDetail)
      return `
                color: ${colors.black};
                margin-top: 0;
            `;
    if (props.otherPosts)
      return `
                color: ${colors.color};
                font-size: 20px;
                margin-top: 0;
                padding-bottom: 10px;
                border-bottom: 1px solid ${colors.borderColor};
            `;
    return `color: ${colors.color};`;
  }};
  font-weight: 400;
  ${mediaQueries("sm")`
        font-size: 20px;
    `}
`;
