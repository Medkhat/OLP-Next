import styled from "styled-components";
import {
  colors,
  displayFlex,
  mediaQueries,
} from "../../assets/helpers/sc-helpers";

export const PostsCard = styled.div`
  cursor: pointer;
  :hover .title {
    color: ${colors.activeColor};
  }
`;
export const PostsImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
`;
export const PostsInfo = styled.div`
  padding: 10px;
  text-align: center;
`;
export const DateViews = styled.p`
  ${displayFlex};
  justify-content: center;
  color: ${colors.color};
`;
export const DateViewsWrapper = styled.div`
  ${displayFlex};
  justify-content: space-between;
`;
export const PostsDetail = styled.div`
  padding-top: 25px;
  width: 80%;
  margin: 0 auto;
  position: relative;
  .content {
    line-height: 2em;
  }
  .content a {
    color: ${colors.activeColor};
  }
  .content p {
    margin-bottom: 10px;
  }
  .editBtns {
    ${displayFlex};
    justify-content: space-between;
    margin-bottom: 15px;
    width: 40%;
  }
  .editBtns button {
    flex: 1;
    font-size: 13px;
  }
  .editBtns button:first-child {
    margin-right: 3px;
  }
  .editBtns button:last-child {
    margin-left: 3px;
  }
  .content img {
    width: 50%;
    margin: 0 auto;
  }
  ${mediaQueries("lg")(`
        display: block;
        .right {
            width: 100%;
            margin-left: 0;
            margin-top: 50px;
        }
    `)}
`;
export const PostsInfoOnDetail = styled.div`
  ${(props) => {
    if (props.otherPosts)
      return `
                color: ${colors.color};
                p {
                    font-size: 13px;
                    margin-right: 20px;
                    display: inline-block;
                }
            `;
    if (props.postsDetail)
      return `
                color: ${colors.color};
                margin-bottom: 15px;
                p {
                    font-size: 14px;
                    margin-right: 20px;
                    display: inline-block;
                }
            `;
  }}
`;
export const PostsImageWrapper = styled.div`
  width: 100%;
  height: 380px;
  position: relative;
  margin-bottom: 50px;
  :hover > .overlay {
    opacity: 1;
    visibility: visible;
    height: 100%;
    transition: 0.3s;
    -o-transition: 0.3s;
    -moz-transition: 0.3s;
    -webkit-transition: 0.3s;
  }
  :hover .uploader {
    opacity: 1;
    visibility: visible;
  }
  ${mediaQueries("sm")`
        height: 270px;
    `}
`;
export const PostsImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -o-object-fit: cover;
`;
export const OtherPostsWrapper = styled.div`
  padding: 20px;
  background-color: ${colors.white};
  border: 1px solid ${colors.borderColor};
  border-radius: 5px;
  a {
    display: block;
  }
  li {
    font-size: 15px;
    padding-bottom: 5px;
    border-bottom: 1px solid ${colors.lightGray};
    margin-bottom: 15px;
  }
  li a {
    margin-bottom: 10px;
  }
  li a:hover {
    color: ${colors.activeColor};
  }
  ${mediaQueries("lg")`
        border: none;
    `}
`;
