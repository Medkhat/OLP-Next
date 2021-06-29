import Link from "next/link";
import React from "react";
import { Icon } from "../../common/styles";
import LessonsList from "./LessonsList";
import { Left, Right, ContentWrapper } from "./style";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { NextRouter, useRouter } from "next/router";
import { TextResource } from "./Resources/TextResource";
import { PDFResource } from "./Resources/PDFResource";
import { DocsResource } from "./Resources/DocsResource";
import { AudioResource } from "./Resources/AudioResource";
import { VideoResource } from "./Resources/VideoResource";
import { TestResource } from "./Resources/TestResource";
import { VideoConference } from "./Resources/VideoConference";
import { useData } from "../../../assets/helpers/data-fetching";
import Skeleton from "react-loading-skeleton";

export type TestAnswerTypes = {
  variant: string;
  content: string;
};

export type TestResourceTypes = {
  id: number;
  question: string;
  correctAnswer: string;
  answers: Array<TestAnswerTypes>;
};

export type ResourceTypes = {
  id: number;
  resourceType: string;
  content: string;
  title: string;
  description: string;
  startDate?: string;
  startTime?: string;
  questions?: Array<TestResourceTypes>;
};

type LessonResourceTypes = {
  resourceType: string;
  data: ResourceTypes;
};

type UsedDataTypes = {
  data: ResourceTypes;
  isLoading: boolean;
};

const LessonResource: React.FC<LessonResourceTypes> = ({
  resourceType,
  data,
}) => {
  switch (resourceType) {
    case "text":
    case "task":
      return <TextResource {...data} />;
    case "pdf":
      return <PDFResource {...data} />;
    case "docs":
      return <DocsResource {...data} />;
    case "audio":
      return <AudioResource {...data} />;
    case "video":
    case "youtube":
      return <VideoResource {...data} />;
    case "test":
      return <TestResource {...data} />;
    case "videoconference":
      return <VideoConference {...data} />;
    default:
      return null;
  }
};

export const LessonDetailComponent: React.FC = () => {
  const router: NextRouter = useRouter();

  let lessonId: null | string = null;

  if (router.query.lesson) lessonId = router.query.lesson[1];

  const { data, isLoading }: UsedDataTypes = useData(`lessons/${lessonId}`);

  return (
    <ContentWrapper>
      <Left>
        <div className={"sticky-left"}>
          <Link
            href={"/courses/[course]"}
            as={`/courses/${router.query.course}`}
          >
            <a className={"backlink"}>
              <Icon>
                <AiOutlineArrowLeft />
              </Icon>
              <span> Курсқа қайту </span>
            </a>
          </Link>
          <LessonsList />
        </div>
      </Left>
      <Right>
        {isLoading ? (
          <Skeleton width={"100%"} height={"100%"} />
        ) : (
          <LessonResource resourceType={data.resourceType} data={data} />
        )}
      </Right>
    </ContentWrapper>
  );
};
