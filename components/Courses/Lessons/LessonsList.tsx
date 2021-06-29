import Link from "next/link";
import React, { useState } from "react";
import { useData } from "../../../assets/helpers/data-fetching";
import Accordion from "../../common/Accordion";
import Card from "../../common/Accordion/Card";
import { Icon } from "../../common/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleUp,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import { Alert } from "../../common/Alert";
import { colors } from "../../../assets/helpers/sc-helpers";
import { BsCardText } from "react-icons/bs";
import {
  AiOutlineAudio,
  AiOutlineCheckCircle,
  AiOutlineFileDone,
  AiOutlineFilePdf,
  AiOutlineFileWord,
  AiOutlineLock,
  AiOutlinePlayCircle,
  AiOutlineVideoCameraAdd,
  AiOutlineYoutube,
} from "react-icons/ai";
import { NextRouter, useRouter } from "next/router";

type LessonsContentType = {
  id: number;
  title: string;
  isOpen: boolean;
  resourceType: string;
};

type LessonsListTypes = {
  id: number;
  title: string;
  resources: Array<LessonsContentType>;
  courseId: number;
};
type LessonsListPropTypes = {
  editMode?: boolean;
};

type LessonResource = {
  resourceType: string;
};

const LessonResourceIcon: React.FC<LessonResource> = ({ resourceType }) => {
  switch (resourceType) {
    case "text":
      return <BsCardText />;
    case "pdf":
      return <AiOutlineFilePdf />;
    case "docs":
      return <AiOutlineFileWord />;
    case "audio":
      return <AiOutlineAudio />;
    case "video":
      return <AiOutlinePlayCircle />;
    case "youtube":
      return <AiOutlineYoutube />;
    case "task":
      return <AiOutlineFileDone />;
    case "test":
      return <AiOutlineCheckCircle />;
    case "videoconference":
      return <AiOutlineVideoCameraAdd />;
    default:
      return null;
  }
};

const LessonsList: React.FC<LessonsListPropTypes> = ({ editMode }) => {
  const { data, isLoading } = useData("lesson-detail");
  const router: NextRouter = useRouter();
  const [activeEventKey, setActiveEventKey] = useState<number>(0);

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      {editMode && (
        <Alert
          text={"Сабақтарды өзгерту үшін сол сабаққа кіріңіз"}
          icon={faExclamationTriangle}
          bgcolor={colors.lightOrange}
          iconColor={colors.orange}
        />
      )}
      {!data || data.lessons.length === 0 ? (
        <Alert
          text={"Бұл курсқа сабақтар қосылмады"}
          icon={faExclamationTriangle}
          bgcolor={colors.lightOrange}
          iconColor={colors.orange}
        />
      ) : (
        <Accordion
          element={"div"}
          activeEventKey={activeEventKey}
          onToggle={setActiveEventKey}
        >
          {data.lessons.map((item: LessonsListTypes, index: number) => (
            <Card key={index}>
              <Accordion.Toggle element={Card.Header} eventKey={index}>
                <span>
                  {item.id + 1}. {item.title}
                </span>
                {activeEventKey !== index && (
                  <Icon>
                    <FontAwesomeIcon icon={faAngleDown} />
                  </Icon>
                )}
                {activeEventKey === index && (
                  <Icon>
                    <FontAwesomeIcon icon={faAngleUp} />
                  </Icon>
                )}
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={index} element={Card.Body}>
                {item.resources.map((resourceItem: LessonsContentType) => {
                  let asPath = `/courses/${data.courseId}/lessons/${item.id}/${resourceItem.id}`;
                  return (
                    <div key={resourceItem.id}>
                      {resourceItem.isOpen ? (
                        <Link
                          href={`/courses/[course]/lessons/[...lesson].tsx`}
                          as={asPath}
                        >
                          <a
                            className={
                              router.asPath === asPath ? "active-resource" : ""
                            }
                          >
                            <Icon className={"lesson-icon"}>
                              <LessonResourceIcon
                                resourceType={resourceItem.resourceType}
                              />
                            </Icon>
                            <span>{resourceItem.title}</span>
                          </a>
                        </Link>
                      ) : (
                        <p className={"not-allowed"}>
                          <span>
                            <Icon className={"lesson-icon"}>
                              <LessonResourceIcon
                                resourceType={resourceItem.resourceType}
                              />
                            </Icon>
                            <span>{resourceItem.title}</span>
                          </span>
                          <Icon className={"lesson-icon"}>
                            <AiOutlineLock />
                          </Icon>
                        </p>
                      )}
                    </div>
                  );
                })}
              </Accordion.Collapse>
            </Card>
          ))}
        </Accordion>
      )}
    </>
  );
};

export default LessonsList;
