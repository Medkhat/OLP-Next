import {
  faEdit,
  faSave,
  faTimes,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
import { ResourceTypes } from "../LessonDetail";
import { DocsContent, SelectedFileName } from "./style";

type EditModeComponentTypes = {
  setEditMode: Function;
  title: string;
};

const EditModeComponents: React.FC<EditModeComponentTypes> = ({
  setEditMode,
  title,
}) => {
  const [lessonTitle, setLessonTitle] = useState<string>(title);
  const [pdfFile, setPdfFile] = useState<File | null>(null);

  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) =>
    setLessonTitle(event.target.value);

  const onChangePdf = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPdfFile(event.target.files[0]);

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
        {!pdfFile ? (
          <FileUploader>
            <Icon>
              <AiOutlineUpload />
            </Icon>
            <span>Жаңа файл жүктеу</span>
            <input
              type="file"
              name={"audio-resource"}
              style={{ display: "none" }}
              accept={".pdf"}
              onChange={onChangePdf}
            />
          </FileUploader>
        ) : (
          <SelectedFileName>
            <span>{pdfFile.name}</span>
            <Icon className={"times"} onClick={() => setPdfFile(null)}>
              <FontAwesomeIcon icon={faTimes} />
            </Icon>
          </SelectedFileName>
        )}
      </FormGroup>
    </>
  );
};

export const PDFResource: React.FC<ResourceTypes> = ({ title, content }) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  return (
    <DocsContent>
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
      <iframe src={content} allowFullScreen></iframe>
    </DocsContent>
  );
};
