import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { InferGetServerSidePropsType } from "next";
import { IBanner } from "../../assets/helpers/interfaces";
import { Heading } from "../../components/common/Heading";
import { Section } from "../../components/common/styles";
import { MainLayout } from "../../components/Main";
import { Modules, ModulesPropTypes } from "../../components/Modules";

export default function ModularCourses({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  let bannerProps: IBanner = {
    // @ts-ignore
    img: data.banner.img,
    // @ts-ignore
    title: data.banner.title,
    // @ts-ignore
    text: data.banner.text,
  };

  return (
    <MainLayout {...bannerProps}>
      <Section>
        <Heading
          title="Курс бөлімдері"
          headingType="withoutButton"
          icon={faLayerGroup}
          path=""
        />
        {/* @ts-ignore */}
        <Modules modularCourses={data.modularCourses} />
      </Section>
    </MainLayout>
  );
}

type dataType = {
  banner: IBanner;
  modularCourses: ModulesPropTypes[];
};
export const getServerSideProps = async () => {
  const response = await fetch(`${process.env.BASE_URL}/modules`);
  const data: dataType = await response.json();
  if (!data)
    return {
      notFound: true,
    };

  return {
    props: { data },
  };
};
