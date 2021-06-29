import styled from "styled-components";
import {
  colors,
  displayFlex,
  mediaQueries,
} from "../../assets/helpers/sc-helpers";

// React-select styles
export const customSelectTheme = (theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary: colors.activeColor,
    primary25: colors.lightGray,
    primary50: colors.lightGray,
  },
});

export const customSelectStyles = {
  control: (styles) => {
    return { ...styles, boxShadow: "none" };
  },
  option: (provided, state) => {
    return {
      ...provided,
      fontSize: 14,
    };
  },
  singleValue: (provided, state) => ({
    ...provided,
    fontSize: 14,
  }),
};

// ==> ==> ==> App Main Wrappers <== <== <==
export const Section = styled.div`
  margin-top: 60px;
`;
export const Heading3 = styled.div`
  font-size: 23px;
  font-weight: 400;
  margin-bottom: ${({ mb }) => mb}px;
  margin-top: ${({ mt }) => mt}px;
  text-align: ${({ align }) => align};
`;
export const Heading5 = styled.div`
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: 400;
  margin-bottom: ${({ mb }) => mb}px;
  margin-top: ${({ mt }) => mt}px;
  text-align: ${({ align }) => align};
`;
export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  background-color: ${colors.transparentDark};
  ${(props) => {
    if (props.type === "posts") return "height: 0%;border-radius:10px;";
  }}
`;
export const OverlayButton = styled.button`
  color: ${colors.white};
  cursor: pointer;
  padding: 5px 20px;
  border: 2px solid ${colors.white};
  border-radius: 5px;
  background-color: transparent;
  z-index: 1;
`;

export const Icon = styled.span`
  margin-right: 5px;
  vertical-align: middle;
  ${(props) => {
    if (props.headingIcon) return "margin-right: 20px;";
    if (props.dropdownIcon)
      return `
                color: ${colors.activeColor};
                img {
                    width: 20px;
                    vertical-align: middle;
                }
            `;
    if (props.navIcon)
      return `
                display: block;
                text-align: center;
                font-size: 20px;
                margin-right: 0;
                ${mediaQueries("sm")`
                    font-size: 17px;
                `}
            `;
    if (props.modal)
      return `
                cursor: pointer;
            `;
    if (props.langIcon)
      return `
            margin-left: 5px;
            `;
    if (props.courseDetail)
      return `
                color: ${colors.activeColor};
            `;
  }}
`;

// ==> ==> ==> Cards component (START) <== <== <==
export const CardsWrapper = styled.div`
  display: grid;
  display: -ms-grid;
  display: -moz-grid;
  gap: 20px;
  ${(props) => {
    if (
      props.type === "posts" ||
      props.type === "courses" ||
      props.type === "modules"
    )
      return `
                grid-template-columns: repeat(3, 1fr);
            `;
    if (props.type === "users") return "grid-template-columns: repeat(4, 1fr);";
  }};

  ${mediaQueries("md")`
        grid-template-columns: repeat(2, 1fr);
    `}
  ${mediaQueries("sm")`
        grid-template-columns: repeat(1, 1fr);
    `}
`;
export const Card = styled.div`
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  transition: 0.3s;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  -moz-transition: 0.3s;
  &:hover {
    box-shadow: 0 10px 35px 15px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
    transition: 0.3s;
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    -moz-transition: 0.3s;
  }
  .image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    -o-object-fit: cover;
    border-radius: 10px 10px 0 0;
  }
`;
export const CardImgWrapper = styled.div`
  overflow: hidden;
  height: 260px;
  border-radius: 10px 10px 0 0;
`;
export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -o-object-fit: cover;
  border-radius: 10px 10px 0 0;
  transition: 0.3s;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  -moz-transition: 0.3s;
  &:hover {
    transform: scale(1.5);
    -webkit-transform: scale(1.5);
    -moz-transform: scale(1.5);
    -ms-transform: scale(1.5);
    -o-transform: scale(1.5);
    transition: 0.3s;
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    -moz-transition: 0.3s;
  }
`;
export const CardBody = styled.div`
  padding: 10px 20px;
  p.author {
    margin: 10px 0;
    ${displayFlex};
    gap: 10px;
    color: ${colors.color};
  }
`;
export const CardTitle = styled.a`
  cursor: pointer;
  overflow: hidden;
  margin-bottom: 30px;
  display: block;
  &:hover {
    color: ${colors.activeColor};
  }
  ${(props) => {
    if (props.type === "courses")
      return "font-weight: 500;font-size: 17px;height: 55px;";
    if (props.type === "button")
      return `
        margin-bottom:0;
        padding: 7px 17px;
        border-radius: 3px;
        font-weight: 400;
        background-color: ${colors.lightGray};
        span {
            margin-right: 10px;
            color: ${colors.black};
        }
        &:hover span {
            color: ${colors.activeColor}
        }
    `;
  }}
`;
export const CardFooter = styled.div`
  ${displayFlex};
  justify-content: space-between;
  margin-top: auto;
`;
export const GrayText = styled.p`
  font-size: 14px;
  color: ${colors.color};
  ${(props) => {
    if (props.type === "module-desc") return "margin-bottom: 20px;";
  }}
  .price {
    margin-right: 5px;
  }
`;
// ==> ==> ==> Cards component (END) <== <== <==

// ==> ==> ==> Form components (START) <== <== <==
export const Input = styled.input`
  outline: none;
  padding: ${({ pd }) => pd || "5px 15px"};
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: ${({ fontSize }) => fontSize || 14}px;
  transition: 0.05s ease-in-out;
  -webkit-transition: 0.05s ease-in-out;
  -o-transition: 0.05s ease-in-out;
  -moz-transition: 0.05s ease-in-out;
  &:hover {
    background-color: ${colors.lightGray};
  }
  &:focus {
    border-color: ${colors.activeColor};
    background-color: ${colors.white};
    transition: 0.05s ease-in-out;
    -webkit-transition: 0.05s ease-in-out;
    -o-transition: 0.05s ease-in-out;
    -moz-transition: 0.05s ease-in-out;
  }
  ${(props) => {
    if (props.name === "search") {
      return `
        width: 50%;
        ${mediaQueries("md")(`
            display: none;
        `)}
      `;
    }
    if (props.error === true) {
      return `border-color:${colors.red}`;
    }
    return `width: 100%`;
  }}
`;
export const Button = styled.button`
  padding: 6px 20px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  transition: transform 0.3s;
  -webkit-transition: transform 0.3s;
  -o-transition: transform 0.3s;
  -moz-transition: transform 0.3s;
  :hover {
    box-shadow: 0 7px 10px -4px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
    transition: transform 0.3s;
    -webkit-transition: transform 0.3s;
    -o-transition: transform 0.3s;
    -moz-transition: transform 0.3s;
  }
  ${(props) => {
    if (props.btnType === "footer")
      return `
        position: absolute;
        top: 3px;
        right: 4px;
        background-color: ${colors.activeColor};
        color: ${colors.white};
        padding: 3px 16px;
      `;
    if (props.btnType === "light") {
      return `
          background-color: ${colors.lightGray};
          color: ${colors.black};
      `;
    }
    if (props.btnType === "danger") {
      return `
          background-color: ${colors.danger};
          color: ${colors.white};
      `;
    }
    if (props.disabled) {
      return `
        background-color: ${colors.disabled};
        color: ${colors.white};
        cursor: not-allowed;
        &:hover {
            box-shadow: none;
            transform: none;
        }
    `;
    }
    return `
      width: auto;
      background-color: ${colors.activeColor};
      color: ${colors.white};
  `;
  }}
`;
export const FormButtons = styled.div`
  button {
    font-size: ${({ fontSize }) => fontSize}px;
    margin-right: 10px;
  }
  button:last-child {
    margin-right: 0;
  }
  text-align: ${({ align }) => align};
`;

export const FileUploader = styled.label`
  color: ${colors.activeColor};
  ${displayFlex};
  justify-content: center;
  margin: 10px;
  text-align: center;
  cursor: pointer;
  .uploader-text {
    margin-left: 20px;
  }
`;
export const BannerUploader = styled.label`
  ${displayFlex};
  justify-content: center;
  height: ${({ height }) => height}px;
  border: 2px dashed ${colors.borderColor};
  background-color: ${colors.lightGray};
  cursor: pointer;
  :hover {
    background-color: ${colors.borderColor};
    border-color: ${colors.white};
  }
  .uploader-text {
    margin-left: 10px;
  }
`;
// ==> ==> ==> Form components (END) <== <== <==
export const TabsWrapper = styled.div`
  ${displayFlex};
  justify-content: space-between;
  flex: 1;
  margin-bottom: 30px;
  span {
    font-size: 22px;
  }
`;
export const Tab = styled.p`
  border-radius: 5px 5px 0 0;
  flex: 1;
  text-align: center;
  padding-bottom: 10px;
  cursor: pointer;
  ${displayFlex};
  justify-content: center;
  ${(props) =>
    props.active &&
    `
        border-bottom: 2px solid ${colors.activeColor};
        span {
            color: ${colors.activeColor}
        }
    `}
`;
