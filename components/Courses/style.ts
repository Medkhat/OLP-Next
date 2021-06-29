import styled from "styled-components";
import {
  colors,
  displayFlex,
  displayGrid,
  mediaQueries,
} from "../../assets/helpers/sc-helpers";

// Styled components

export const CourseDetailWrapper = styled.div`
  ${displayFlex};
  justify-content: space-between;
  align-items: stretch;
  padding-top: 25px;
  color: ${colors.black};
  ${mediaQueries("md")`display:block;`}
  .left {
    flex: 1;
  }
  .right-wrapper {
    width: 30%;
    margin-left: 30px;
    ${mediaQueries("md")`
            width:100%;
            margin-left: 0px;
            margin-top: 25px;
        `}
  }
  .right-wrapper .img {
    width: 100%;
    ${mediaQueries("md")`display:none;`}
  }
  .right {
    position: sticky;
    position: -webkit-sticky;
    top: 91px;
  }
  .editBtns {
    ${displayFlex};
    justify-content: space-between;
    margin-top: 15px;
    ${mediaQueries("md")`
            display:block;
        `}
  }
  .editBtns button {
    flex: 1;
    font-size: 13px;
    ${mediaQueries("md")`
            width: 100%;
            margin-bottom: 10px;
        `}
  }
  .editBtns button:first-child {
    margin-right: 3px;
    ${mediaQueries("md")`
            margin-right: 0px;
        `}
  }
  .editBtns button:last-child {
    margin-left: 3px;
    ${mediaQueries("md")`
            margin-left: 0px;
        `}
  }
  .price {
    ${displayFlex};
    justify-content: space-between;
    font-weight: 400;
  }
  .price .icon {
    color: ${colors.activeColor};
  }
  .price .tenge {
    font-size: 13px;
    font-weight: normal;
    margin-right: 0;
    margin-left: 5px;
  }
  h2,
  h3 {
    font-weight: 400;
  }
  h2 {
    margin-bottom: 30px;
    margin-top: 0;
    font-size: 28px;
  }
  .courseTitle {
    margin-bottom: 25px;
  }
  .coursePrice {
    margin-top: 20px;
  }
  .basic-info {
    font-size: 16px;
    margin-bottom: 10px;
  }
  .basic-info b {
    font-weight: 500;
  }
  .author {
    margin: 10px 0;
    cursor: pointer;
  }
  div.course-counts {
    margin-top: 40px;
    margin-bottom: 40px;
    padding: 10px 25px;
    background-color: ${colors.lightGray};
    ${displayFlex}
    justify-content: space-between;
    border-radius: 5px;
  }
  div.course-counts p {
    margin: 0;
    text-align: center;
    color: ${colors.black};
    font-size: 13px;
  }
  .level-icon {
    width: 20px;
    display: block;
    margin: auto;
  }
  .counts {
    display: block;
    font-size: 17px;
  }
  .description {
    margin-bottom: 40px;
  }
  h3 {
    margin: 0;
    margin-bottom: 20px;
    font-size: 23px;
  }
  .content {
    position: relative;
  }
  .content .parsed-text {
    height: 50px;
    overflow: hidden;
    position: relative;
  }
  .parsed-text.more {
    height: auto;
    overflow: auto;
  }
  .light-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.9) 85%
    );
  }
  .more-less-btn {
    color: ${colors.activeColor};
    cursor: pointer;
    margin-top: 15px;
    display: block;
  }
  .content p {
    margin-bottom: 10px;
    font-size: 14px;
  }
  .mobile-course-banner {
    display: none;
    width: 100%;
    margin-bottom: 25px;
  }
  .banner {
    position: relative;
    margin-bottom: 30px;
  }
  .banner:hover .overlay {
    opacity: 1;
    visibility: visible;
    height: 100%;
  }
  .banner:hover .uploader {
    overflow: 1;
    visibility: visible;
  }
  .chooser {
    ${displayFlex};
    justify-content: space-between;
    h4 {
      margin-bottom: 5px;
    }
    .author-chooser {
      margin-right: 10px;
      flex: 1;
    }
    .level-chooser {
      margin-left: 10px;
      flex: 1;
    }
  }
  .lesson-icon {
    font-size: 20px;
    margin-right: 10px;
  }
  .not-allowed {
    ${displayFlex};
    justify-content: space-between;
  }
  ${mediaQueries("md")`.mobile-course-banner {
        display: block;
    }`}
`;
export const CertWrapper = styled.div`
  .tabs {
    ${displayFlex};
    margin-top: 10px;
  }
  .content {
    margin-top: 20px;
  }
  .content h3 {
    font-weight: 400;
  }
  .defaults {
    ${displayGrid};
    gap: 10px;
    grid-template-columns: repeat(4, 1fr);
    max-height: 400px;
    overflow-y: auto;
    ${mediaQueries("md")`
            grid-template-columns: repeat(3, 1fr);
        `}
    ${mediaQueries("sm")`
            grid-template-columns: repeat(2, 1fr);
            max-height: 300px;
        `}
        ${mediaQueries("xs")`
            grid-template-columns: repeat(1, 1fr);
        `}
  }
  .defaults .image-item {
    width: 100%;
  }
  .template {
    position: relative;
  }
  .selected {
    border: 3px solid ${colors.activeColor};
  }
  .preview {
    position: absolute;
    top: 3px;
    right: 3px;
    padding: 2px 5px;
    background-color: ${colors.transparentDark};
    border: none;
    display: none;
  }
  .template:hover .preview {
    display: inline;
  }
  .from-computer {
    ${displayFlex};
    justify-content: center;
  }
  .from-computer label {
    cursor: pointer;
    color: ${colors.activeColor};
  }
  .uploaded-img-wrapper {
    position: relative;
  }
  .remove-btn {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    ${displayFlex};
    justify-content: center;
    overflow: 0;
    visibility: hidden;
  }
  .uploaded-img-wrapper:hover .overlay {
    opacity: 1;
    visibility: visible;
    height: 100%;
  }
  .uploaded-img-wrapper:hover .remove-btn {
    overflow: 1;
    visibility: visible;
  }
  .uploaded-img {
    width: 100%;
  }
  .footer {
    float: right;
    margin-top: 20px;
  }
  .footer button:last-child {
    margin-left: 10px;
  }
`;
export const GroupWrapper = styled.div`
  .group-availability,
  .group-availability label {
    ${displayFlex};
  }
  .group-availability {
    flex-wrap: wrap;
  }
  .group-availability label {
    ${displayFlex};
    padding: 10px;
    cursor: pointer;
  }
  .group-availability label:hover {
    color: ${colors.activeColor};
  }
  .group-availability span {
    flex: 1;
  }
  .group-availability input {
    width: 20px;
  }
  .groups {
    margin-top: 15px;
  }
  .group-item {
    ${displayGrid};
    gap: 10px;
    grid-template-columns: 1fr 1fr 50px 50px;
    ${mediaQueries("md")`
            grid-template-rows: 1fr 1fr;
            grid-template-columns: 1fr 1fr;
        `}
  }
  .group-item-btns button {
    ${displayFlex};
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 17px;
  }
  .delete-btn {
    color: ${colors.red};
  }
  .group-item-btns span {
    margin-right: 0;
  }
  .group-form-title {
    ${displayGrid};
    grid-template-columns: 1fr 1fr 50px 50px;
    margin-bottom: 10px;
    ${mediaQueries("md")`
            grid-template-columns: 1fr 1fr;
        `}
  }
  .group-form-title span {
    ${mediaQueries("md")`
            display: none;
        `}
  }
  .giFg {
    ${mediaQueries("md")`
            margin-bottom: 0;
        `}
  }
  .gfbs button {
    ${mediaQueries("sm")`
            display: block;
            width: 100%;
            margin-bottom: 5px;
        `}
  }
  .group-form-title label {
    display: block;
    flex: 1;
  }

  .add-students-modal {
    width: 40%;
  }
`;
export const AddStudentsWrapper = styled.div`
  padding-top: 20px;
`;
export const Categories = styled.div`
  margin-bottom: 50px;
  ${displayFlex};
  flex-wrap: wrap;
  h2 {
    margin: 5px 20px 5px 5px;
  }
  p {
    margin: 5px;
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 3px;
    border: 1px solid ${colors.borderColor};
    :hover {
      background-color: ${colors.activeColor};
      border-color: ${colors.activeColor};
      color: ${colors.white};
    }
  }
  p.active {
    background-color: ${colors.activeColor};
    border-color: ${colors.activeColor};
    color: ${colors.white};
  }
`;
