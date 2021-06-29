import { useState } from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import { SuneditorBtnList } from "../../../common/se-button-list";
import { Button, FormButtons } from "../../../common/styles";

export const TaskAnswer: React.FC = () => {
  const [editorContent, setEditorContent] = useState<string>("");

  return (
    <div className={"student-answer"}>
      <SunEditor
        enable={true}
        setOptions={{
          buttonList: [SuneditorBtnList],
          minHeight: 200,
          height: "auto",
          stickyToolbar: "50px",
        }}
        setDefaultStyle={"font-size: 17px;"}
        placeholder={"Жауабыңызды енгізіңіз"}
        setContents={editorContent}
        onChange={(content: string) => setEditorContent(content)}
      />
      <FormButtons align={"right"}>
        <Button btnType={"light"} onClick={() => setEditorContent("")}>
          Жауапты өшіру
        </Button>
        <Button>Жіберу</Button>
      </FormButtons>
    </div>
  );
};
