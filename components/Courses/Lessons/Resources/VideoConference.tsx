import Link from "next/link";
import React, { useState } from "react";
import { ResourceTypes } from "../LessonDetail";
import { VideoConferenceContent } from "./style";
import { FiExternalLink } from "react-icons/fi";
import { Button, FormButtons, Icon, Input } from "../../../common/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faSave,
  faTimes,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FormGroup } from "../../Create/style";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import { normalizeDate } from "../../../../assets/helpers/date-helper";
import { SuneditorBtnList } from "../../../common/se-button-list";

type EditModeComponentTypes = {
  setEditMode: Function;
  title: string;
  content: string;
  description: string;
  startDate: string;
  startTime: string;
};

const EditModeComponents: React.FC<EditModeComponentTypes> = ({
  setEditMode,
  title,
  content,
  description,
  startDate,
  startTime,
}) => {
  const [lessonTitle, setLessonTitle] = useState<string>(title);
  const [conferenceLink, setConferenceLink] = useState<string>(content);
  const [conferenceStartDate, setConferenceStartDate] = useState<string>(
    normalizeDate(startDate)
  );
  const [conferenceStartTime, setConferenceStartTime] = useState<string>(
    startTime
  );

  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) =>
    setLessonTitle(event.target.value);

  const onChangeConferenceLink = (event: React.ChangeEvent<HTMLInputElement>) =>
    setConferenceLink(event.target.value);

  const onChangeDate = (event: React.ChangeEvent<HTMLInputElement>) =>
    setConferenceStartDate(event.target.value);

  const onChangeTime = (event: React.ChangeEvent<HTMLInputElement>) =>
    setConferenceStartTime(event.target.value);

  return (
    <>
      <FormButtons componentType={"resources"}>
        <Button type={"button"}>
          <Icon>
            <FontAwesomeIcon icon={faSave} />
          </Icon>
          <span>????????????</span>
        </Button>
        <Button
          type={"button"}
          btnType={"light"}
          onClick={() => setEditMode(false)}
        >
          <Icon>
            <FontAwesomeIcon icon={faTimes} />
          </Icon>
          <span>?????? ??????????</span>
        </Button>
      </FormButtons>
      <FormGroup>
        <Input
          type={"text"}
          placeholder={"???????????????? ????????????????"}
          value={lessonTitle}
          onChange={onChangeTitle}
        />
      </FormGroup>
      <FormGroup>
        <Input
          type={"text"}
          placeholder={"???????????????????? ???????????????????? ??????????????????"}
          value={conferenceLink}
          onChange={onChangeConferenceLink}
        />
      </FormGroup>
      <FormGroup>
        <SunEditor
          enable={true}
          setOptions={{
            buttonList: [SuneditorBtnList],
            minHeight: 300,
            height: "auto",
            stickyToolbar: "50px",
          }}
          lang={"ru"}
          setContents={description}
          setDefaultStyle={"font-size: 15px;"}
        />
      </FormGroup>
      <p className={"dt-wrapper edit-mode"}>
        <span>?????????????? ????????:</span>
        <Input
          type={"date"}
          placeholder={"???????????????????? ?????????? ??????????????????"}
          value={conferenceStartDate}
          onChange={onChangeDate}
        />
      </p>
      <p className={"dt-wrapper edit-mode"}>
        <span>?????????????? ????????????:</span>
        <Input
          type={"time"}
          placeholder={"???????????????????? ?????????????? ??????????????????"}
          value={conferenceStartTime}
          onChange={onChangeTime}
        />
      </p>
    </>
  );
};

export const VideoConference: React.FC<ResourceTypes> = ({
  title,
  content,
  startDate,
  startTime,
  description,
}) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  return (
    <VideoConferenceContent>
      {editMode ? (
        <EditModeComponents
          content={content}
          title={title}
          description={description}
          startDate={startDate}
          startTime={startTime}
          setEditMode={setEditMode}
        />
      ) : (
        <>
          <FormButtons componentType={"resources"}>
            <Button type={"button"} onClick={() => setEditMode(true)}>
              <Icon>
                <FontAwesomeIcon icon={faEdit} />
              </Icon>
              <span>??????????????</span>
            </Button>
            <Button type={"button"} btnType={"danger"}>
              <Icon>
                <FontAwesomeIcon icon={faTrash} />
              </Icon>
              <span>??????</span>
            </Button>
          </FormButtons>
          <Link href={content}>
            <a target={"_blank"}>
              <h3>
                {title}{" "}
                <Icon>
                  <FiExternalLink />
                </Icon>
              </h3>
            </a>
          </Link>
          <div
            className={"description"}
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
          <p className={"dt-wrapper"}>
            <span>?????????????? ????????:</span>{" "}
            <span className={"date-time"}>{startDate}</span>
          </p>
          <p className={"dt-wrapper"}>
            <span>?????????????? ????????????:</span>{" "}
            <span className={"date-time"}>{startTime}</span>
          </p>
        </>
      )}
    </VideoConferenceContent>
  );
};
