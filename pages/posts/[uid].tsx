import { GetStaticProps, InferGetStaticPropsType } from "next";
import { customizePosts } from "../../assets/helpers/helpers";
import { MainLayout } from "../../components/Main";
import { PostsDetailComponent } from "../../components/Posts/PostsDetail";

export const getStaticPaths = async () => {
  const response = await fetch(`${process.env.BlogServiceBaseURL}/news`);
  const data = await response.json();

  const paths = data.news.results.map((item: any) => ({
    params: { uid: item.uid },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let detailResponse = await fetch(
    `${process.env.BlogServiceBaseURL}/news/${params.uid}`
  );
  let postsItem = await detailResponse.json();
  return { props: { data: postsItem.news } };
};

export default function PostsDetail({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <MainLayout>
      <PostsDetailComponent postsItem={customizePosts(data, "posts")} />
    </MainLayout>
  );
}
