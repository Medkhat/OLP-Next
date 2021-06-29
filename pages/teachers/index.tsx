import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { InferGetServerSidePropsType } from "next";
import { IBanner, IUsers } from "../../assets/helpers/interfaces";
import { Heading } from "../../components/common/Heading";
import { Section } from "../../components/common/styles";
import { MainLayout } from "../../components/Main";
import { Teachers as TeachersComponent } from "../../components/Teachers";

export default function Teachers({
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
          title="Сіздің орталығыңыздың оқытушылары"
          headingType="withoutButton"
          icon={faUserGraduate}
          path=""
        />
        {/* @ts-ignore */}
        <TeachersComponent users={data.teachers} />
      </Section>
    </MainLayout>
  );
}

type dataType = {
  banner: IBanner;
  teachers: IUsers[];
};
export const getServerSideProps = async () => {
  const response = await fetch(`${process.env.BASE_URL}/teachers`);
  const data: dataType = await response.json();
  if (!data)
    return {
      notFound: true,
    };

  return {
    props: { data },
  };
};
