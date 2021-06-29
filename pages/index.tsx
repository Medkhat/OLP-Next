import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { dataType } from "../assets/helpers/constants";
import { customizePosts } from "../assets/helpers/helpers";
import { IBanner, IPosts } from "../assets/helpers/interfaces";
import { CourseCategoryTypes, CoursePropTypes } from "../components/Courses";
import { LatestCourses } from "../components/Courses/LatestCourses";
import { MainLayout } from "../components/Main";
import { LatestPosts } from "../components/Posts/LatestPosts";

export const getServerSideProps: GetServerSideProps = async () => {
  const coursesResponse = await fetch(
    `${process.env.CoursesServiceBaseURL}/courses`
  );
  const categoriesResponse = await fetch(
    `${process.env.CoursesServiceBaseURL}/category`
  );
  const postsResponse = await fetch(`${process.env.BlogServiceBaseURL}/news`);
  const postsData: dataType = await postsResponse
    .json()
    .then((response) => response.news);
  const coursesData: dataType = await coursesResponse.json();
  const categoriesData: dataType = await categoriesResponse.json();

  if (!coursesData && !categoriesData)
    return {
      notFound: true,
    };

  return {
    props: { coursesData, categoriesData, postsData },
  };
};

export default function Index({
  coursesData,
  categoriesData,
  postsData,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  let bannerProps: IBanner = {
    img:
      "https://static.vecteezy.com/system/resources/previews/000/180/365/original/e-learning-flat-line-illustration-vector.jpg",
    title: "Кел балалар, оқылық!",
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
  let posts: Array<IPosts> = postsData.results.map((item: any) =>
    customizePosts(item, "posts")
  );

  return (
    <MainLayout {...bannerProps}>
      <LatestPosts posts={posts} />
      <LatestCourses courses={courses} categories={categories} />
    </MainLayout>
  );
}
