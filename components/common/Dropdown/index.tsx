import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { forwardRef } from "react";
import { IHeaderDropdownLinks } from "../../../assets/helpers/interfaces";
import { Icon } from "../styles";
import { DropdownWrapper } from "./style";

export type DropdownProps = {
  links: any[];
  isActive: boolean;
  ref: React.RefObject<HTMLDivElement>;
  type: string;
};

const LinkItem: React.FC<IHeaderDropdownLinks> = ({
  href,
  text,
  icon,
  type,
  onClickHandler,
}) => {
  return (
    <Link href={href}>
      <a onClick={onClickHandler}>
        <Icon dropdownIcon>
          {type === "language" ? (
            <img src={icon} />
          ) : (
            <FontAwesomeIcon icon={icon} />
          )}
        </Icon>
        <span className={type === "language" ? "text" : ""}>{text}</span>
      </a>
    </Link>
  );
};

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  ({ links, isActive, type }, ref) => {
    let linkItems: Array<JSX.Element> = links.map(
      (item: IHeaderDropdownLinks) => (
        <LinkItem
          key={item.key}
          href={item.href}
          text={item.text}
          icon={item.icon}
          type={type}
          onClickHandler={item.onClickHandler}
        />
      )
    );

    return (
      <DropdownWrapper
        ref={ref}
        className={isActive ? "active" : ""}
        type={type}
      >
        {linkItems}
      </DropdownWrapper>
    );
  }
);
