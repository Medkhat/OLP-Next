import styled from "styled-components";
import {
  colors,
  displayFlex,
  mediaQueries,
} from "../../assets/helpers/sc-helpers";

export const BannerWrapper = styled.div`
  width: 100%;
  z-index: -1;
  color: ${colors.black};
  ${displayFlex};
  justify-content: space-between;
  padding-top: 50px;
  padding-bottom: 50px;
  ${mediaQueries("md")`
        display: block;
    `}
`;
export const BannerInfo = styled.div`
  width: 45%;
  ${mediaQueries("md")`
        width: 100%;
        text-align: center;
        margin-bottom: 50px;
    `}
`;
export const BannerBg = styled.div`
  width: 45%;
  height: 300px;
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  ${mediaQueries("md")`
        width: 100%;
    `}
`;
export const BannerText = styled.h1`
  font-size: 35px;
  font-weight: 500;

  ${mediaQueries("xs")`
        font-size: 25px;
    `}
`;
export const BannerContent = styled.p`
  font-size: 17px;
  ${mediaQueries("xs")`
        font-size: 14px;
    `}
`;
