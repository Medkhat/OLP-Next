import { IBanner } from "../../assets/helpers/interfaces";
import { MainWrapper } from "../Main/style";
import {
  BannerInfo,
  BannerText,
  BannerWrapper,
  BannerBg,
  BannerContent,
} from "./style";

export const Banner: React.FC<IBanner> = ({ img, title, text }) => {
  return (
    <MainWrapper type="banner">
      <BannerWrapper>
        <BannerInfo>
          <BannerText>{title}</BannerText>
          <BannerContent>{text}</BannerContent>
        </BannerInfo>
        <BannerBg img={img} />
      </BannerWrapper>
    </MainWrapper>
  );
};
