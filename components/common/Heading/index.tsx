import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { NavLink } from "../../Navbar/style";
import { Icon } from "../styles";
import { HeadingText, HeadingWrapper } from "./style";

type HeadingPropTypes = {
  title: string;
  headingType: null | string;
  icon: IconProp;
  path: string;
  btnType?: string;
  createPath?: string;
  btnText?: string;
};

export const Heading: React.FC<HeadingPropTypes> = ({
  title,
  headingType,
  icon,
  path,
  btnType,
  createPath,
  btnText,
}) => {
  const checkHeadingType: boolean = headingType === "withButton" ? true : false;

  return (
    <HeadingWrapper>
      <HeadingText>
        <Icon headingIcon>
          <FontAwesomeIcon icon={icon} />
        </Icon>
        <span>{title}</span>
      </HeadingText>
      {checkHeadingType &&
        (btnType === "newItem" ? (
          <Link href={createPath}>
            <NavLink headingLink br>
              <Icon>
                <FontAwesomeIcon icon={faPlus} />
              </Icon>
              {btnText}
            </NavLink>
          </Link>
        ) : (
          <Link href={path}>
            <NavLink headingLink br>
              Барлығын көрсету
            </NavLink>
          </Link>
        ))}
    </HeadingWrapper>
  );
};
