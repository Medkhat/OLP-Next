import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Select from "react-select";
import { colors } from "../../assets/helpers/sc-helpers";
import { Alert } from "../common/Alert";
import {
  Button,
  customSelectStyles,
  customSelectTheme,
  FormButtons,
} from "../common/styles";
import { modalDataTypes } from "./CourseGroups";
import { FormGroup } from "./Create/style";
import { AddStudentsWrapper } from "./style";

type AddStudentsTypes = {
  modalData: modalDataTypes;
  setModalState: Function;
};

type StudentsListTypes = {
  value: string;
  label: string;
};

export const AddStudents: React.FC<AddStudentsTypes> = ({
  modalData,
  setModalState,
}) => {
  const [selectedStudents, setSelectedStudents] = useState<Array<string>>([]);

  const onChangeStudents = (e: Array<StudentsListTypes>) => {
    setSelectedStudents(
      Array.isArray(e) && e.map((item: StudentsListTypes) => item.value)
    );
  };

  const onSaveStudents = () =>
    console.log({ groupId: modalData.id, students: selectedStudents });

  let students: Array<StudentsListTypes> = [
    { value: "std-1", label: "Dauren Otarbay" },
    { value: "std-2", label: "Medkhat Akimbek" },
    { value: "std-3", label: "Baktyar Aydar" },
    { value: "std-4", label: "Bakhytov Yerniaz" },
    { value: "std-5", label: "Zhanat Qyran" },
    { value: "std-6", label: "Abilkhanov Aibek" },
  ];

  return (
    <AddStudentsWrapper>
      <Alert
        iconColor={colors.blue}
        bgcolor={colors.lightBlue}
        icon={faInfoCircle}
        text={`${modalData.title} тобына оқушыларды тіркеңіз`}
      />
      <form className={"add-student-form"}>
        <FormGroup>
          <Select
            isMulti
            options={students}
            theme={customSelectTheme}
            styles={customSelectStyles}
            onChange={onChangeStudents}
            placeholder={"Таңдаңыз"}
            defaultValue={selectedStudents}
          />
        </FormGroup>
        <FormButtons componentType={"students"}>
          <Button
            type={"button"}
            btnType={"light"}
            onClick={() => setModalState(false)}
          >
            Бас тарту
          </Button>
          <Button type={"button"} onClick={onSaveStudents}>
            Сақтау
          </Button>
        </FormButtons>
      </form>
    </AddStudentsWrapper>
  );
};
