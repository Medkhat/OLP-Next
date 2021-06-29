import { faUser } from "@fortawesome/free-solid-svg-icons";
import { InferGetServerSidePropsType } from "next";
import { IBanner, IUsers } from "../../assets/helpers/interfaces";
import { Heading } from "../../components/common/Heading";
import { Section } from "../../components/common/styles";
import { MainLayout } from "../../components/Main";
import { Students as StudentsComponent } from "../../components/Students";

export default function Students({
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
          title="Сіздің орталығыңыздың оқушылары"
          headingType="withoutButton"
          icon={faUser}
          path=""
        />
        {/* @ts-ignore */}
        <StudentsComponent users={data.students} />
      </Section>
    </MainLayout>
  );
}

type dataType = {
  banner: IBanner;
  students: IUsers[];
};
export const getServerSideProps = async () => {
  const response = await fetch(`${process.env.BASE_URL}/students`);
  const data: dataType = await response.json();
  if (!data)
    return {
      notFound: true,
    };

  return {
    props: { data },
  };
};
