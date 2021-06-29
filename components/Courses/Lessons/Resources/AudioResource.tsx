import {
  faEdit,
  faSave,
  faTimes,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";
import React, { useState } from "react";
import { AiOutlineUpload } from "react-icons/ai";
import {
  Button,
  FileUploader,
  FormButtons,
  Icon,
  Input,
} from "../../../common/styles";
import { FormGroup } from "../../Create/style";
import { ResourceTypes } from "./../LessonDetail";
import { AudioContent, SelectedFileName } from "./style";

type EditModeComponentTypes = {
  setEditMode: Function;
  title: string;
};

const EditModeComponents: React.FC<EditModeComponentTypes> = ({
  setEditMode,
  title,
}) => {
  const [lessonTitle, setLessonTitle] = useState<string>(title);
  const [audioFile, setAudioFile] = useState<File | null>(null);

  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) =>
    setLessonTitle(event.target.value);

  const onChangeAudio = (event: React.ChangeEvent<HTMLInputElement>) =>
    setAudioFile(event.target.files[0]);

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
        {!audioFile ? (
          <FileUploader>
            <Icon>
              <AiOutlineUpload />
            </Icon>
            <span>Жаңа файл жүктеу</span>
            <input
              type="file"
              name={"audio-resource"}
              style={{ display: "none" }}
              accept={"audio/*"}
              onChange={onChangeAudio}
            />
          </FileUploader>
        ) : (
          <SelectedFileName>
            <span>{audioFile.name}</span>
            <Icon className={"times"} onClick={() => setAudioFile(null)}>
              <FontAwesomeIcon icon={faTimes} />
            </Icon>
          </SelectedFileName>
        )}
      </FormGroup>
    </>
  );
};

export const AudioResource: React.FC<ResourceTypes> = ({ title, content }) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  return (
    <AudioContent>
      {editMode ? (
        <EditModeComponents title={title} setEditMode={setEditMode} />
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
          <h3> {title} </h3>
        </>
      )}
      <div className={"audio-player"}>
        <Plyr
          source={{
            type: "audio",
            sources: [
              {
                src: content,
              },
            ],
          }}
        />
      </div>
    </AudioContent>
  );
};
