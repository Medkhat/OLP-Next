import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { customizePosts } from "../../assets/helpers/helpers";
import { IBanner, IPosts } from "../../assets/helpers/interfaces";
import { Heading } from "../../components/common/Heading";
import { Section } from "../../components/common/styles";
import { MainLayout } from "../../components/Main";
import { Posts as PostsComponent } from "../../components/Posts";

type dataType = {
  total: number;
  pages: number;
  next: string;
  prev: string;
  results: any;
};

export type responseType = {
  news: dataType;
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`${process.env.BlogServiceBaseURL}/news`);

  const data: responseType = await response.json();
  const posts: dataType = data.news;
  if (!data)
    return {
      notFound: true,
    };

  return {
    props: { data: posts },
  };
};

export default function Posts({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  let bannerProps: IBanner = {
    img:
      "https://mlabnrincht3.i.optimole.com/1YuVonE-7tzrRAha/w:1024/h:786/q:90/https://digitalfineprint.com/wp-content/uploads/2019/08/blogger-min.png",
    title: "Блогтар және жаңалықтар",
    text:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  };

  let posts: Array<IPosts> = data.results.map((item: any) =>
    customizePosts(item, "posts")
  );

  return (
    <MainLayout {...bannerProps}>
      <Section>
        <Heading
          title={"Сіздің орталығыңыздың жазбалары"}
          headingType={"withButton"}
          btnType={"newItem"}
          icon={faNewspaper}
          path=""
          createPath={"/posts/create"}
          btnText={"Жаңа жазба қосу"}
        />
        <PostsComponent posts={posts} />
      </Section>
    </MainLayout>
  );
}
