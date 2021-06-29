import styled from "styled-components";
import { mediaQueries } from "../../assets/helpers/sc-helpers";

export const MainWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  ${mediaQueries("xl")`
        padding: 0 20px;
    `};
`;
