import { faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";
import { Heading } from "../../components/common/Heading";
import { Section } from "../../components/common/styles";
import { MainLayout } from "../../components/Main";
import {
  CoursePropTypes,
  CourseCategoryTypes,
  Courses as CoursesComponent,
} from "../../components/Courses";
import { IBanner } from "../../assets/helpers/interfaces";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { dataType } from "../../assets/helpers/constants";

export const getServerSideProps: GetServerSideProps = async () => {
  const coursesResponse = await fetch(
    `${process.env.CoursesServiceBaseURL}/courses`
  );
  const categoriesResponse = await fetch(
    `${process.env.CoursesServiceBaseURL}/category`
  );
  const coursesData: dataType = await coursesResponse.json();
  const categoriesData: dataType = await categoriesResponse.json();

  if (!coursesData && !categoriesData)
    return {
      notFound: true,
    };

  return {
    props: { coursesData, categoriesData },
  };
};

export default function Courses({
  coursesData,
  categoriesData,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  let bannerProps: IBanner = {
    img:
      "https://image.freepik.com/free-vector/online-course-education-illustration_9041-171.jpg",
    title: "Орталықтың курстары",
    text:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  };

  let courses: Array<CoursePropTypes> = coursesData.results.map(
    (item: any) => ({
      id: item.id,
      img: item.course_image,
      title: item.course_title_kk,
      price: item.course_price,
      author: item.course_author,
      level: item.level.level_title_kk,
    })
  );
  let categories: Array<CourseCategoryTypes> = categoriesData.results.map(
    (item: any) => ({
      id: item.id,
      title: item.category_title_kk,
    })
  );

  return (
    <MainLayout {...bannerProps}>
      <Section>
        <Heading
          title="Осы орталықтың курстары"
          headingType="withButton"
          btnType={"newItem"}
          icon={faChalkboardTeacher}
          path={"/courses"}
          createPath={"/courses/create"}
          btnText={"Жаңа курс қосу"}
        />
        <CoursesComponent courses={courses} categories={categories} />
      </Section>
    </MainLayout>
  );
}
