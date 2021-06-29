import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { Icon } from "../common/styles";
import { NavbarWrapper, NavLink } from "./style";
import { AiOutlineHome, AiOutlinePlayCircle } from "react-icons/ai";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { ImNewspaper } from "react-icons/im";
import { IconType } from "react-icons";

type NavItemProps = {
  href: string;
  text: string;
  icon: IconType;
  key: number;
};

const NavItem: React.FC<NavItemProps> = ({ href, text, icon: InnerIcon }) => {
  const router: NextRouter = useRouter();
  return (
    <Link href={href}>
      <NavLink className={router.pathname === href && "active"}>
        <Icon navIcon>
          <InnerIcon />
        </Icon>
        <span className={"text"}>{text}</span>
      </NavLink>
    </Link>
  );
};

export const Navbar: React.FC = () => {
  let navLinks = [
    { href: "/", text: "Басты", icon: AiOutlineHome, key: 0 },
    // {
    //   href: "/modules",
    //   text: "Модульдер",
    //   icon: faLayerGroup,
    //   key: 2,
    // },
    { href: "/courses", text: "Курстар", icon: AiOutlinePlayCircle, key: 1 },
    {
      href: "/teachers",
      text: "Мұғалімдер",
      icon: FaChalkboardTeacher,
      key: 2,
    },
    { href: "/students", text: "Оқушылар", icon: FiUsers, key: 3 },
    { href: "/posts", text: "Жаңалықтар", icon: ImNewspaper, key: 4 },
  ] as Array<NavItemProps>;

  let navItems: Array<JSX.Element> = navLinks.map((link) => (
    <NavItem
      key={link.key}
      href={link.href}
      text={link.text}
      icon={link.icon}
    />
  ));

  return <NavbarWrapper>{navItems}</NavbarWrapper>;
};
