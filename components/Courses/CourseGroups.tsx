import { faEdit, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { colors } from "../../assets/helpers/sc-helpers";
import { Alert } from "../common/Alert";
import { Button, FormButtons, Icon, Input } from "../common/styles";
import { GroupWrapper } from "./style";
import { customSelectStyles, customSelectTheme } from "../common/styles";
import Select from "react-select";
import { FormGroup } from "./Create/style";
import {
  AiOutlineDelete,
  AiOutlineUsergroupAdd,
  AiOutlinePlus,
} from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "../common/Modal";
import { AddStudents } from "./AddStudents";

type groupTypes = {
  id: number;
  title: string;
  adviserId: string;
};

type groupTitleTypes = {
  value: string;
  groupId: number | null;
};

export type modalDataTypes = {
  id: number;
  title: string;
};

type advisersTypes = {
  value: string;
  label: string;
};

export const CourseGroups: React.FC = () => {
  const [isAvailable, setIsAvailable] = useState<boolean>(false);
  const [count, setCount] = useState<number>(1);
  const [groupFields, setGroupFields] = useState<Array<groupTypes>>([
    {
      id: 0,
      title: "",
      adviserId: "",
    },
  ]);
  const [editMode, setEditMode] = useState<boolean>(true);
  const [groupTitle, setGroupTitle] = useState<groupTitleTypes>({
    value: "",
    groupId: null,
  });
  const [isValid, setIsValid] = useState<boolean>(false);
  const [modalState, setModalState] = useState<boolean>(false);
  const [modalData, setModalData] = useState<modalDataTypes | null>(null);

  let advisers: Array<advisersTypes> = [
    { value: "adv-0", label: "Baktyar Aydar" },
    { value: "adv-1", label: "Akimbek Medkhat" },
    { value: "adv-2", label: "Otarbay Dauren" },
  ];

  const onAddGroup: Function = () => {
    let fieldIsValid = true;
    groupFields.forEach((item: groupTypes) => {
      if (item.title.length === 0 || item.adviserId.length === 0)
        fieldIsValid = false;
    });
    if (!fieldIsValid) setIsValid(true);
    else {
      setCount(count + 1);
      setGroupFields([
        ...groupFields,
        {
          id: count,
          title: "",
          adviserId: "",
        },
      ]);
      setIsValid(false);
    }
  };

  const onChangeTitle: Function = (value: string, id: number) =>
    setGroupTitle({ value, groupId: id });

  const onChangeAdviser: Function = (value: string, id: number) =>
    setGroupFields(
      groupFields.map((item: groupTypes) => {
        if (item.id === id) item.adviserId = value;
        return item;
      })
    );

  const onBlurTitle: Function = () => {
    setGroupFields(
      groupFields.map((item: groupTypes) => {
        if (item.id === groupTitle.groupId) item.title = groupTitle.value;
        return item;
      })
    );
    setGroupTitle({ value: "", groupId: null });
  };

  const onDeleteGroup: Function = (id: number) =>
    setGroupFields(groupFields.filter((item: groupTypes) => item.id !== id));

  const onSaveGroup: Function = () => {
    let fieldIsValid = true;
    groupFields.forEach((item: groupTypes) => {
      if (item.title.length === 0 || item.adviserId.length === 0)
        fieldIsValid = false;
    });

    if (!fieldIsValid) setIsValid(true);
    else {
      setIsValid(false);
      setEditMode(false);
    }
  };

  const onAddStudents: Function = (id: number, title: string) => {
    let fieldIsValid = true;
    groupFields.forEach((item: groupTypes) => {
      if (item.id === id)
        if (item.title.length === 0 || item.adviserId.length === 0)
          fieldIsValid = false;
    });

    if (!fieldIsValid) setIsValid(true);
    else {
      setIsValid(false);
      setModalState(true);
      setModalData({ id, title });
    }
  };

  let groupItems = groupFields.map(
    (item: groupTypes, index: number, array: Array<groupTypes>) => (
      <div className={"group-item"} key={item.id}>
        <FormGroup className={"giFg"}>
          <Input
            id={`group-field_${item.id}`}
            placeholder={"Топтың аты"}
            name={"groupTitle"}
            value={item.title.length > 0 ? item.title : groupTitle.value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChangeTitle(e.target.value, item.id)
            }
            onBlur={onBlurTitle}
            disabled={!editMode}
          />
        </FormGroup>
        <FormGroup className={"giFg"}>
          <Select
            options={advisers}
            theme={customSelectTheme}
            styles={customSelectStyles}
            onChange={({ value }) => onChangeAdviser(value, item.id)}
            placeholder={"Таңдаңыз"}
            isDisabled={!editMode}
          />
        </FormGroup>
        <FormGroup className={"group-item-btns"}>
          <Button
            type={"button"}
            btnType={array.length !== 1 && "light"}
            disabled={array.length === 1}
            onClick={() => onDeleteGroup(item.id)}
          >
            <Icon className={"delete-btn"}>
              <AiOutlineDelete />
            </Icon>
          </Button>
        </FormGroup>
        <FormGroup className={"group-item-btns"}>
          <Button
            type={"button"}
            btnType={"light"}
            onClick={() => onAddStudents(item.id, item.title)}
          >
            <Icon>
              <AiOutlineUsergroupAdd />
            </Icon>
          </Button>
        </FormGroup>
      </div>
    )
  );

  return (
    <GroupWrapper>
      <Alert
        bgcolor={colors.lightBlue}
        icon={faInfoCircle}
        iconColor={"#2196f3"}
        text={
          "Бұл курсты топтарға бөліп оқытатын болсаңыз, осы жерден керекті топтарды қосыңыз және оларды басқарыңыз"
        }
      />
      <div className={"group-availability"}>
        <p>Бұл курста топтар болады ма ?</p>
        <label>
          <input
            type={"radio"}
            name={"groupAvailability"}
            checked={isAvailable}
            onChange={() => setIsAvailable(true)}
          />
          <span>Иә, болады</span>
        </label>
        <label>
          <input
            type={"radio"}
            name={"groupAvailability"}
            checked={!isAvailable}
            onChange={() => setIsAvailable(false)}
          />
          <span>Жоқ, болмайды</span>
        </label>
      </div>
      {isAvailable && (
        <form className={"groups"}>
          <div className={"group-form-title"}>
            <label htmlFor={"groupTitle"}>Атын енгізіңіз</label>
            <label>Кураторын таңдаңыз</label>
            <span></span>
            <span></span>
          </div>
          {groupItems}
          {isValid && (
            <Alert
              bgcolor={colors.lightOrange}
              iconColor={colors.orange}
              icon={faInfoCircle}
              text={"Барлық өрісті толтырыңыз"}
            />
          )}
          <FormButtons componentType={"groups"} className={"gfbs"}>
            {editMode ? (
              <>
                <Button type={"button"} btnType={"light"} onClick={onAddGroup}>
                  <Icon>
                    <AiOutlinePlus />
                  </Icon>
                  Топ қосу
                </Button>
                <Button
                  type={"button"}
                  btnType={"light"}
                  onClick={() => setEditMode(false)}
                >
                  Бас тарту
                </Button>
                <Button type={"button"} onClick={onSaveGroup}>
                  Сақтау
                </Button>
              </>
            ) : (
              <Button type={"button"} onClick={() => setEditMode(true)}>
                <Icon>
                  <FontAwesomeIcon icon={faEdit} />
                </Icon>
                Өзгерту
              </Button>
            )}
          </FormButtons>
        </form>
      )}
      {modalState && (
        <Modal
          title={"Оқушыларды қосу"}
          component={() => (
            <AddStudents modalData={modalData} setModalState={setModalState} />
          )}
          setModalState={setModalState}
          modalType={"add-students-modal"}
        />
      )}
    </GroupWrapper>
  );
};
