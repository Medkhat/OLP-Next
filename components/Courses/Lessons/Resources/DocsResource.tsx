import {
  faEdit,
  faSave,
  faTimes,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, FormButtons, Icon, Input } from "../../../common/styles";
import { FormGroup } from "../../Create/style";
import { ResourceTypes } from "../LessonDetail";
import { DocsContent } from "./style";

type EditModeComponentTypes = {
  setEditMode: Function;
  title: string;
};

const EditModeComponents: React.FC<EditModeComponentTypes> = ({
  setEditMode,
  title,
}) => {
  const [lessonTitle, setLessonTitle] = useState<string>(title);
  const [docsLink, setDocsLink] = useState<string>("");

  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) =>
    setLessonTitle(event.target.value);

  const onChangeDocs = (event: React.ChangeEvent<HTMLInputElement>) =>
    setDocsLink(event.target.value);

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
        <Input
          type={"text"}
          placeholder={"Құжаттың сілтемесін енгізіңіз"}
          value={docsLink}
          onChange={onChangeDocs}
        />
      </FormGroup>
    </>
  );
};

export const DocsResource: React.FC<ResourceTypes> = ({ title, content }) => {
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
