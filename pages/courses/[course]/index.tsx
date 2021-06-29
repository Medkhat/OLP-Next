import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import {
  CourseDetailComponent,
  CourseItemTypes,
} from "../../../components/Courses/CourseDetail";
import { MainLayout } from "../../../components/Main";

export default function CourseDetail({
  courseData,
  levels,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  let courseItem: CourseItemTypes = {
    id: courseData.id,
    title: courseData.course_title_kk,
    author: courseData.course_author,
    certificate: false,
    img: courseData.course_image,
    description: courseData.course_desc_kk,
    price: courseData.course_price,
    completionTime: 3600,
    courseCounts: {
      lessonsNumber: 14,
      level: levels.filter((item) => item.id === courseData.level_id)[0]
        .level_title_kk,
      quizzesNumber: 5,
      tasksNumber: 9,
      studentsNumber: 23,
    },
  };

  return (
    // @ts-ignore
    <MainLayout>
      <CourseDetailComponent courseItem={courseItem} />
    </MainLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  let detailResponse = await fetch(
    `${process.env.CoursesServiceBaseURL}/courses/${params.course}`
  );
  let courseData = await detailResponse.json();
  let levelsResponse = await fetch(
    `${process.env.CoursesServiceBaseURL}/course-level`
  );
  let levelsData = await levelsResponse.json();

  return {
    props: { courseData: courseData.course, levels: levelsData.result },
  };
};
