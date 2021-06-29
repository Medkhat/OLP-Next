import React, { useState } from "react";
import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";
import { ResourceTypes } from "../LessonDetail";
import {
  Button,
  FileUploader,
  FormButtons,
  Icon,
  Input,
} from "../../../common/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faSave,
  faTimes,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { AiOutlineUpload } from "react-icons/ai";
import { SelectedFileName, VideoContent } from "./style";
import { FormGroup } from "../../Create/style";

type EditModeComponentTypes = {
  setEditMode: Function;
  title: string;
  resourceType: string;
};

const EditModeComponents: React.FC<EditModeComponentTypes> = ({
  setEditMode,
  title,
  resourceType,
}) => {
  const [lessonTitle, setLessonTitle] = useState<string>(title);
  const [lessonLink, setLessonLink] = useState<string>("");
  const [videoFile, setVideoFile] = useState<File | null>(null);

  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) =>
    setLessonTitle(event.target.value);

  const onChangeLink = (event: React.ChangeEvent<HTMLInputElement>) =>
    setLessonLink(event.target.value);

  const onChangeVideo = (event: React.ChangeEvent<HTMLInputElement>) =>
    setVideoFile(event.target.files[0]);

  return (
    <>
      <FormButtons componentType={"resources"}>
        <Button type={"button"}>
          <Icon>
            <FontAwesomeIcon icon={faSave} />
          </Icon>
          <span>Сақтау</span>
        </Button>
        <Button
          type={"button"}
          btnType={"light"}
          onClick={() => setEditMode(false)}
        >
          <Icon>
            <FontAwesomeIcon icon={faTimes} />
          </Icon>
          <span>Бас тарту</span>
        </Button>
      </FormButtons>
      <FormGroup>
        <Input
          type={"text"}
          placeholder={"Сабақтың тақырыбы"}
          value={lessonTitle}
          onChange={onChangeTitle}
        />
      </FormGroup>
      <FormGroup>
        {resourceType === "youtube" ? (
          <FormGroup>
            <Input
              type={"text"}
              placeholder={"Сабақтың сілтемесін енгізіңіз"}
              value={lessonLink}
              onChange={onChangeLink}
            />
          </FormGroup>
        ) : !videoFile ? (
          <FileUploader>
            <Icon>
              <AiOutlineUpload />
            </Icon>
            <span>Жаңа файл жүктеу</span>
            <input
              type="file"
              name={"audio-resource"}
              style={{ display: "none" }}
              accept={"video/*"}
              onChange={onChangeVideo}
            />
          </FileUploader>
        ) : (
          <SelectedFileName>
            <span>{videoFile.name}</span>
            <Icon className={"times"} onClick={() => setVideoFile(null)}>
              <FontAwesomeIcon icon={faTimes} />
            </Icon>
          </SelectedFileName>
        )}
      </FormGroup>
    </>
  );
};

export const VideoResource: React.FC<ResourceTypes> = ({
  title,
  content,
  resourceType,
}) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  return (
    <VideoContent>
      {editMode ? (
        <EditModeComponents
          title={title}
          setEditMode={setEditMode}
          resourceType={resourceType}
        />
      ) : (
        <>
          <FormButtons componentType={"resources"}>
            <Button type={"button"} onClick={() => setEditMode(true)}>
              <Icon>
                <FontAwesomeIcon icon={faEdit} />
              </Icon>
              <span>Өзгерту</span>
            </Button>
            <Button type={"button"} btnType={"danger"}>
              <Icon>
                <FontAwesomeIcon icon={faTrash} />
              </Icon>
              <span>Жою</span>
            </Button>
          </FormButtons>
          <h3>{title}</h3>
        </>
      )}
      <div className={"video-player"}>
        <Plyr
          source={{
            type: "video",
            sources: [
              {
                src: content,
                provider: "youtube",
              },
            ],
          }}
        />
      </div>
    </VideoContent>
  );
};
