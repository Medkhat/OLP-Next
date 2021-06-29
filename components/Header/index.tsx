import ava from "../../assets/img/ava.png";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCog,
  faSignOutAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "../common/Dropdown";
import { IHeaderDropdownLinks } from "../../assets/helpers/interfaces";
import { useDetectOutsideClick } from "../common/Dropdown/useDetectOutsideClick";
import Link from "next/link";
import {
  ActiveLang,
  HeaderInfo,
  HeaderPhoto,
  HeaderWrapper,
  LangWrapper,
  Logo,
  SearchWrapper,
  SignInSignOut,
} from "./style";
import kz from "../../assets/icons/kazakhstan.svg";
import usa from "../../assets/icons/united-states.svg";
import ru from "../../assets/icons/russia.svg";
import { Button, Icon, Input } from "../common/styles";
import { AiOutlineGlobal } from "react-icons/ai";
import { accessToken, refreshToken } from "../../assets/helpers/constants";

type HeaderPropTypes = {
  logo: string;
};
export const Header: React.FC<HeaderPropTypes> = ({ logo }) => {
  let langLinks = [
    { href: "/", text: "Қаз", key: 1, icon: kz },
    { href: "/", text: "Рус", key: 2, icon: ru },
    { href: "/", text: "Eng", key: 3, icon: usa },
  ] as Array<IHeaderDropdownLinks>;

  let profileLinks = [
    {
      href: "/profile",
      text: "Профиль",
      key: 1,
      icon: faUser,
      onClickHandler: null,
    },
    {
      href: "/settings",
      text: "Баптаулар",
      key: 2,
      icon: faCog,
      onClickHandler: null,
    },
    {
      href: "/sign-in",
      text: "Шығу",
      key: 3,
      icon: faSignOutAlt,
      onClickHandler: () => {
        localStorage.removeItem(accessToken);
        localStorage.removeItem(refreshToken);
      },
    },
  ] as Array<IHeaderDropdownLinks>;

  const [keyWord, setKeyword] = useState<string>("");
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const dropdownRefofLang = useRef<HTMLDivElement>(null);

  const [langIsActive, setLangIsActive] = useDetectOutsideClick(
    dropdownRefofLang,
    false
  );

  const dropdownRefofUserProfileLinks = useRef<HTMLDivElement>(null);
  const [userProfieIsActive, setUserProfileIsActive] = useDetectOutsideClick(
    dropdownRefofUserProfileLinks,
    false
  );

  const searchInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  useEffect(() => {
    if (localStorage.getItem(accessToken)) setIsAuth(true);
  }, [setIsAuth]);

  const toggleLangHandler: Function = () => setLangIsActive(!langIsActive);

  const toggleUserMenuHandler: Function = () =>
    setUserProfileIsActive(!userProfieIsActive);

  return (
    <>
      <HeaderWrapper>
        <Logo>
          <Link href={"/"}>{logo}</Link>
        </Logo>
        <HeaderInfo>
          <SearchWrapper autoComplete="off">
            <Input
              type="search"
              name="search"
              onChange={searchInputHandler}
              placeholder="Search"
              value={keyWord}
            />
          </SearchWrapper>
          <LangWrapper>
            <ActiveLang onClick={toggleLangHandler}>
              <Icon>
                <AiOutlineGlobal />
              </Icon>
              <span className={"text"}>Қаз</span>
              <Icon langIcon>
                <FontAwesomeIcon icon={faCaretDown} />
              </Icon>
            </ActiveLang>

            <Dropdown
              ref={dropdownRefofLang}
              links={langLinks}
              isActive={langIsActive}
              type="language"
            />
          </LangWrapper>
          {isAuth ? (
            <HeaderPhoto onClick={toggleUserMenuHandler}>
              <img src={ava} alt="AVA" />
              <Dropdown
                ref={dropdownRefofUserProfileLinks}
                links={profileLinks}
                isActive={userProfieIsActive}
                type="profile"
              />
            </HeaderPhoto>
          ) : (
            <SignInSignOut>
              <Link href={"/sign-in"}>
                <a>Sign In</a>
              </Link>{" "}
              |{" "}
              <Link href={"/sign-up"}>
                <a>Sign Up</a>
              </Link>
            </SignInSignOut>
          )}
        </HeaderInfo>
      </HeaderWrapper>
    </>
  );
};
