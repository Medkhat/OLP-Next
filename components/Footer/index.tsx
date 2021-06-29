import {
  faFacebook,
  faInstagram,
  faTelegram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import { Button, Input } from "../common/styles";
import { MainWrapper } from "../Main/style";
import {
  CopyRightWrapper,
  FooterColumn,
  FooterGridLayout,
  FooterWrapper,
} from "./style";

type FooterPropTypes = {
  logo: string;
};

export const Footer: React.FC<FooterPropTypes> = ({ logo }) => {
  const [email, setEmail] = useState<string>("");

  // This function will be execute when the search field is changed
  const footerInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <FooterWrapper>
      <MainWrapper>
        <FooterGridLayout>
          <FooterColumn>
            <h3>{logo}</h3>
            <p>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs.
            </p>
          </FooterColumn>
          <FooterColumn>
            <h5>System sections</h5>
            <div>
              <Link href={"/"}>
                <a>Басты</a>
              </Link>
              <Link href={"/courses"}>
                <a>Курстар</a>
              </Link>
              <Link href={"/teachers"}>
                <a>Мұғалімдер</a>
              </Link>
              <Link href={"/students"}>
                <a>Оқушылар</a>
              </Link>
              <Link href={"/posts"}>
                <a>Жаңалықтар</a>
              </Link>
            </div>
          </FooterColumn>
          <FooterColumn>
            <h5>Useful links</h5>
            <div>
              <Link href={"/privacy-policy"}>
                <a>Privacy Policy</a>
              </Link>
              <Link href={"/terms-of-service"}>
                <a>Terms of Service</a>
              </Link>
              <Link href={"/enterprice-terms-of-service"}>
                <a>Enterprice terms of Service</a>
              </Link>
            </div>
          </FooterColumn>
          <FooterColumn>
            <h5>Postsletter</h5>
            <p>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs.{" "}
            </p>
            <form>
              <Input
                type={"email"}
                name={"postsletter"}
                placeholder={"Email"}
                value={email}
                onChange={footerInputHandler}
                required
              />
              <Button type={"button"} btnType={"footer"}>
                <FontAwesomeIcon icon={faPaperPlane} />
              </Button>
            </form>
          </FooterColumn>
        </FooterGridLayout>
        <CopyRightWrapper>
          <p>&copy; {new Date().getFullYear()}. Барлық құқықтар қорғалған.</p>
          <p>
            <Link href="https://www.facebook.com/">
              <a target="_blank">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </Link>
            <Link href="https://www.instagram.com/">
              <a target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </Link>
            <Link href="https://www.youtube.com/">
              <a target="_blank">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </Link>
            <Link href="https://www.telegram.org/">
              <a target="_blank">
                <FontAwesomeIcon icon={faTelegram} />
              </a>
            </Link>
          </p>
        </CopyRightWrapper>
      </MainWrapper>
    </FooterWrapper>
  );
};
