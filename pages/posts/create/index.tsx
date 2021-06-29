import { MainLayout } from "../../../components/Main";
import { PostsForm } from "../../../components/Posts/Create";

export default function CreateBlog(): JSX.Element {
  return (
    <MainLayout>
      <PostsForm />
    </MainLayout>
  );
}
