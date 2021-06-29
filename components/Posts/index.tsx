import Link from "next/link";
import {
  CardsWrapper,
  Heading5,
  Icon,
  Tab,
  TabsWrapper,
} from "../common/styles";
import { IPosts } from "../../assets/helpers/interfaces";
import {
  DateViews,
  DateViewsWrapper,
  PostsCard,
  PostsImg,
  PostsInfo,
} from "./style";
import { AiOutlineEye } from "react-icons/ai";
import { ImBlog, ImNewspaper } from "react-icons/im";
import { useState } from "react";
import axios from "axios";
import { customizePosts } from "../../assets/helpers/helpers";
import Skeleton from "react-loading-skeleton";
import { PostsTypeKind } from "../../assets/helpers/constants";

export type PostsTypes = {
  posts: IPosts[];
};

const PostsItem: React.FC<IPosts> = (props) => {
  return (
    <Link
      href={`/${props.postType}/[uid]`}
      as={`/${props.postType}/${props.uid}`}
    >
      <PostsCard>
        <PostsImg src={props.img} alt={"BANNER"} />
        <PostsInfo>
          <DateViewsWrapper>
            <DateViews>{props.date}</DateViews>
            <DateViews>
              <AiOutlineEye />
              {props.views}
            </DateViews>
          </DateViewsWrapper>
          <Heading5
            mb={20}
            mt={10}
            align={"left"}
            fontSize={15}
            className={"title"}
          >
            {props.title}
          </Heading5>
        </PostsInfo>
      </PostsCard>
    </Link>
  );
};

export const Posts: React.FC<PostsTypes> = ({ posts }) => {
  const [data, setData] = useState<Array<IPosts>>(posts);
  const [changeContent, setChangeContent] = useState<string>(
    PostsTypeKind.posts
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChangeContent = async (content: string) => {
    setChangeContent(content);
    try {
      setIsLoading(true);
      let response = await axios.get(
        `${process.env.BlogServiceBaseURL}/${
          content === "posts" ? "news" : content
        }`
      );
      content === PostsTypeKind.blogs &&
        setData(
          response.data.blogs.results.map((item: any) =>
            customizePosts(item, "blogs")
          )
        );
      content === PostsTypeKind.posts &&
        setData(
          response.data.news.results.map((item: any) =>
            customizePosts(item, "posts")
          )
        );
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  return (
    <>
      <TabsWrapper>
        <Tab
          active={changeContent === PostsTypeKind.posts && 1}
          onClick={() => handleChangeContent(PostsTypeKind.posts)}
        >
          <Icon>
            <ImNewspaper />
          </Icon>
          Жаңалықтар
        </Tab>
        <Tab
          active={changeContent === PostsTypeKind.blogs && 1}
          onClick={() => handleChangeContent(PostsTypeKind.blogs)}
        >
          <Icon>
            <ImBlog />
          </Icon>
          Блогтар
        </Tab>
      </TabsWrapper>
      <CardsWrapper type={"posts"}>
        {isLoading
          ? [1, 2, 3].map((item: number) => (
              <div key={item}>
                <Skeleton
                  width={"100%"}
                  height={200}
                  style={{ marginBottom: 15 }}
                />
                <Skeleton width={"70%"} height={30} />
              </div>
            ))
          : data.map((item: IPosts) => <PostsItem key={item.uid} {...item} />)}
      </CardsWrapper>
    </>
  );
};
