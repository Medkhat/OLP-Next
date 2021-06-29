import styled from "styled-components";
import { displayFlex } from "../../../assets/helpers/sc-helpers";

export const PostsFormWrapper = styled.div`
  padding: 30px 0;
  .post-type-banner {
    ${displayFlex};
    justify-content: space-between;
  }
  .post-type {
    width: 40%;
    margin-right: 30px;
  }
  .banner-wrapper {
    width: 40%;
    position: relative;
  }
  .banner {
    width: 100%;
  }
  .se-placeholder {
    font-size: 16px !important;
  }
`;
