import { IBanner } from "../../assets/helpers/interfaces";
import { Section } from "../../components/common/styles";
import { MainLayout } from "../../components/Main";
import registerBanner from "../../assets/img/register-banner.jpg";
import { SignUpComponent } from "../../components/LoginRegister/Register";

export default function SignUp(): JSX.Element {
  let bannerProps: IBanner = {
    img: registerBanner,
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
        <SignUpComponent />
      </Section>
    </MainLayout>
  );
}
