import styled from "styled-components";
import { colors, displayFlex } from "../../../assets/helpers/sc-helpers";

export const ContentWrapper = styled.div`
  ${displayFlex};
  gap: 10px;
  justify-content: space-between;
  align-items: stretch;
  padding-top: 20px;
  .header {
    font-size: 15px;
  }
  .body {
    padding: 5px 10px;
    font-size: 15px;
  }
  .backlink {
    display: block;
    padding: 5px 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    cursor: pointer;
  }
  .backlink:hover {
    background-color: ${colors.lightGray};
  }
`;
export const Left = styled.div`
  width: 30%;
  position: relative;
  .not-allowed {
    ${displayFlex};
    justify-content: space-between;
  }
  .active-resource {
    background-color: ${colors.lightGray};
  }
  .sticky-left {
    position: sticky;
    top: 70px;
  }
`;
export const Right = styled.div`
  flex: 1;
  padding: 0 30px;
`;
export const ResourceChanger = styled.div`
  ${displayFlex};
  justify-content: space-between;
  margin-top: 30px;
  button {
    font-size: 17px;
    padding: 10px 20px;
    ${displayFlex}
  }
  .right-icon {
    margin-left: 5px;
  }
`;
