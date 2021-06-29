import {
  faEdit,
  faSave,
  faTimes,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import { SuneditorBtnList } from "../../../common/se-button-list";
import { Button, FormButtons, Icon, Input } from "../../../common/styles";
import { FormGroup } from "../../Create/style";
import { ResourceTypes } from "./../LessonDetail";
import { TextContent } from "./style";
import { TaskAnswer } from "./TaskResource";

type EditModeComponentTypes = {
  content: string;
  setEditMode: Function;
  title: string;
};

const EditModeComponents: React.FC<EditModeComponentTypes> = ({
  content,
  setEditMode,
  title,
}) => {
  const [lessonTitle, setLessonTitle] = useState<string>(title);
  const [editorContent, setEditorContent] = useState<string>(content);

  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) =>
    setLessonTitle(event.target.value);

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
      <SunEditor
        enable={true}
        setOptions={{
          buttonList: [SuneditorBtnList],
          minHeight: 300,
          height: "auto",
          stickyToolbar: "50px",
        }}
        setContents={editorContent}
        onChange={(content: string) => setEditorContent(content)}
        setDefaultStyle={"font-size: 15px;"}
      />
    </>
  );
};

export const TextResource: React.FC<ResourceTypes> = ({
  content,
  title,
  resourceType,
}) => {
  const [editMode, setEditMode] = useState<boolean>(false);

  return (
    <TextContent>
      {editMode ? (
        <EditModeComponents
          content={content}
          setEditMode={setEditMode}
          title={title}
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
          <div
            dangerouslySetInnerHTML={{ __html: content }}
            className={"resource-content"}
          ></div>
          {resourceType === "task" && <TaskAnswer />}
        </>
      )}
    </TextContent>
  );
};
