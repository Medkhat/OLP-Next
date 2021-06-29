import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent } from "react";
import { Icon } from "../styles";
import { FileUpload } from "./style";

type UploaderTypes = {
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Uploader: React.FC<UploaderTypes> = ({ onChangeHandler }) => {
  return (
    <FileUpload className={"uploader"}>
      <label>
        <Icon>
          <FontAwesomeIcon icon={faUpload} />
        </Icon>
        {"Жаңасын жүктеу"}
        <input
          type={"file"}
          style={{ display: "none" }}
          onChange={onChangeHandler}
        />
      </label>
    </FileUpload>
  );
};
