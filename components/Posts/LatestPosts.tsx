import { PostsTypes, Posts } from "./index";
import { Heading } from "../common/Heading";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { Section } from "../common/styles";

export const LatestPosts: React.FC<PostsTypes> = ({ posts }) => {
  return (
    <Section first>
      <Heading
        title="Соңғы жаңалықтар"
        headingType="withButton"
        icon={faNewspaper}
        path="/posts"
      />
      <Posts posts={posts} />
    </Section>
  );
};
