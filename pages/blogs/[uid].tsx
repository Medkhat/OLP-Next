import { GetStaticProps, InferGetStaticPropsType } from "next";
import { customizePosts } from "../../assets/helpers/helpers";
import { MainLayout } from "../../components/Main";
import { PostsDetailComponent } from "../../components/Posts/PostsDetail";

export const getStaticPaths = async () => {
  const response = await fetch(`${process.env.BlogServiceBaseURL}/blogs`);
  const data = await response.json();

  const paths = data.blogs.results.map((item: any) => ({
    params: { uid: item.uid },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let detailResponse = await fetch(
    `${process.env.BlogServiceBaseURL}/blog/${params.uid}`
  );
  let blogItem = await detailResponse.json();
  return { props: { data: blogItem.blog } };
};

export default function BlogDetail({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <MainLayout>
      <PostsDetailComponent postsItem={customizePosts(data, "blogs")} />
    </MainLayout>
  );
}
