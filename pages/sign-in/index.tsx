import { IBanner } from "../../assets/helpers/interfaces";
import { Section } from "../../components/common/styles";
import { SignInComponent } from "../../components/LoginRegister/Login";
import { MainLayout } from "../../components/Main";
import loginBanner from "../../assets/img/login-banner.svg";

export default function SignIn(): JSX.Element {
  let bannerProps: IBanner = {
    img: loginBanner,
    title: "Dala Academy Online Education Platform",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat.`,
    bgSize: "contain",
  };
  return (
    <MainLayout {...bannerProps}>
      <Section>
        <SignInComponent />
      </Section>
    </MainLayout>
  );
}
