import { CourseDetailWrapper } from "./style";
import { customSelectStyles, customSelectTheme, TabsWrapper } from "./../common/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faClock,
  faEdit,
  faMoneyBillAlt,
  faSave,
  faTenge,
  faTimes,
  faTrash,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import level from "../../assets/icons/level.svg";
import LessonsList from "./Lessons/LessonsList";
import { useEffect, useState } from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import Modal from "../common/Modal";
import Select from "react-select";
import { Certificate } from "./Create/Certificate";
import { fileToDataUri } from "../../assets/helpers/FileToDataURI";
import { Icon, Input, Overlay, Button, Tab } from "../common/styles";
import { Uploader } from "../common/Upload/Uploader";
import { CourseGroups } from "./CourseGroups";
import { AiOutlineUsergroupAdd, AiOutlineAlignLeft } from "react-icons/ai";
import { SuneditorBtnList } from "../common/se-button-list";
import { FormGroup } from "./Create/style";
import { FaRegUserCircle } from "react-icons/fa";
import { modifyNumbers } from "../../assets/helpers/helpers";

export type CourseItemTypes = {
  id: string;
  img: string;
  title: string;
  price: number;
  author: string;
  completionTime: number;
  certificate: boolean;
  courseCounts: {
    level: string;
    studentsNumber: number;
    lessonsNumber: number;
    quizzesNumber: number;
    tasksNumber: number;
  };
  description: string;
};

type CourseDetailTypes = {
  courseItem: CourseItemTypes;
  editMode?: boolean;
  setEditMode?: Function;
  setBanner?: Function;
};

type CertTypes = {
  certModalState: boolean;
  setCertModalState: Function;
};

type CourseBannerTypes = {
  banner: string;
  setBanner: Function;
  editMode: boolean;
};

const Counts: React.FC<CourseDetailTypes> = ({ courseItem, editMode }) => {
  let courseCounts = courseItem.courseCounts;

  let levelOptions = [
    { value: 0, label: "Beginner" },
    { value: 1, label: "Intermediate" },
    { value: 2, label: "Advanced" },
  ];
  let authorOptions = [
    { value: 0, label: "Baktyar Aydar" },
    { value: 1, label: "Akimbek Medkhat" },
    { value: 2, label: "Otarbay Dauren" },
  ];

  return (
    <>
      {editMode && (
        <div className={"chooser"}>
          <div className={"author-chooser"}>
            <h4>Choose author</h4>
            <Select
              options={authorOptions}
              defaultValue={authorOptions[2]}
              theme={customSelectTheme}
              styles={customSelectStyles}
            />
          </div>
          <div className={"level-chooser"}>
            <h4>Choose level</h4>
            <Select
              options={levelOptions}
              defaultValue={levelOptions[0]}
              theme={customSelectTheme}
              styles={customSelectStyles}
            />
          </div>
        </div>
      )}
      <div className={"course-counts"}>
        <p>
          <img src={level} alt={"LEVEL_ICON"} className={"level-icon"} />
          <span>{courseCounts.level}</span>
        </p>
        <p>
          <span className={"counts"}>{courseCounts.lessonsNumber}</span>
          <span>Lessons</span>
        </p>
        <p>
          <span className={"counts"}>{courseCounts.quizzesNumber}</span>
          <span>Quizzes</span>
        </p>
        <p>
          <span className={"counts"}>{courseCounts.studentsNumber}</span>
          <span>Students</span>
        </p>
        <p>
          <span className={"counts"}>{courseCounts.tasksNumber} </span>
          <span>Tasks</span>
        </p>
      </div>
    </>
  );
};

const CertificateStatus: React.FC<CertTypes> = ({
  certModalState,
  setCertModalState,
}) => {
  const [certStatus, setCertStatus] = useState<boolean>(false);

  useEffect(() => {
    if (!certModalState) setCertStatus(false);
  }, [certModalState, setCertModalState]);

  return (
    <>
      <span>
        <label style={{ margin: "0 20px" }}>
          <input
            type={"radio"}
            name={"certStatus"}
            checked={certStatus}
            value={"Yes"}
            onChange={() => {
              setCertStatus(true);
              setCertModalState(true);
            }}
          />{" "}
          Yes
        </label>
        <label>
          <input
            type={"radio"}
            name={"certStatus"}
            checked={!certStatus}
            value={"No"}
            onChange={() => setCertStatus(false)}
          />{" "}
          No
        </label>
      </span>
    </>
  );
};

const RightInfo: React.FC<CourseDetailTypes> = ({
  courseItem,
  editMode,
  setEditMode,
  setBanner,
}) => {
  const [price, setPrice] = useState<number>(courseItem.price);
  const onEditBtnClick = () => setEditMode(true);

  const onEditPriceChange: Function = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setPrice(parseInt(event.target.value));
  
  const onCancelBtnClick = () => {
    setBanner(courseItem.img);
    setEditMode(false);
  };

  return (
    <div className={"right"}>
      <p className={"price"}>
        <span>
          <Icon className={"icon"}>
            <FontAwesomeIcon icon={faMoneyBillAlt} />
          </Icon>
          Price:
        </span>
        <span>
          {modifyNumbers(courseItem.price)}
          <Icon className={"tenge"}>
            <FontAwesomeIcon icon={faTenge} />
          </Icon>
        </span>
      </p>
      <div>
        {editMode && (
          <FormGroup>
            <Input
              type={"text"}
              value={price}
              name={"coursePrice"}
              placeholder={"Жазбаның тақырыбы"}
              onChange={onEditPriceChange}
              className={"coursePrice"}
            />
          </FormGroup>
        )}
      </div>
      {!editMode ? (
        <div className={`editBtns`}>
          <Button type={"button"} onClick={onEditBtnClick}>
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
        </div>
      ) : (
        <div className={`editBtns`}>
          <Button type={"button"}>
            <Icon>
              <FontAwesomeIcon icon={faSave} />
            </Icon>
            <span>Сақтау</span>
          </Button>
          <Button type={"button"} btnType={"light"} onClick={onCancelBtnClick}>
            <Icon>
              <FontAwesomeIcon icon={faTimes} />
            </Icon>
            <span>Бас тарту</span>
          </Button>
        </div>
      )}
    </div>
  );
};

const CourseBanner: React.FC<CourseBannerTypes> = ({
  banner,
  setBanner,
  editMode,
}) => {
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files[0]) {
      setBanner("");
      return;
    }
    fileToDataUri(event.target.files[0]).then((dataURI) => setBanner(dataURI));
  };
  return (
    <div className={"banner"}>
      <img src={banner} alt={"BANNER"} className={"img"} />
      {editMode && (
        <>
          <Uploader onChangeHandler={onChangeHandler} />
          <Overlay className={"overlay"} />
        </>
      )}
    </div>
  );
};

const CourseContent: React.FC<CourseDetailTypes> = ({
  courseItem,
  editMode,
}) => {
  const [isMore, setIsMore] = useState<boolean>(false);
  return (
    <div className={"description"}>
      <h3>Course Overview</h3>
      {!editMode ? (
        <div className={"content"}>
          <div className={`parsed-text ${isMore && "more"}`}>
            <div
              className={"light-overlay"}
              style={isMore ? { display: "none" } : { display: "block" }}
            ></div>
            <div
              dangerouslySetInnerHTML={{
                __html: courseItem.description,
              }}
            ></div>
          </div>

          <p className={"more-less-btn"} onClick={() => setIsMore(!isMore)}>
            {isMore ? "Жасыру" : "Толық көрсету"}
          </p>
        </div>
      ) : (
        <SunEditor
          enable={true}
          setOptions={{
            buttonList: [SuneditorBtnList],
            minHeight: 300,
            height: "auto",
            stickyToolbar: "50px",
          }}
          setContents={courseItem.description}
          setDefaultStyle={"font-size: 15px;"}
        />
      )}
    </div>
  );
};

export const CourseDetailComponent: React.FC<CourseDetailTypes> = ({
  courseItem,
}) => {
  const [certModalState, setCertModalState] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(courseItem.title);
  const [banner, setBanner] = useState<string>(courseItem.img);
  const [changeContent, setChangeContent] = useState<string>("content");

  const handleChangeContent: Function = (content: string) =>
    setChangeContent(content);

  const onEditTitleChange: Function = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setTitle(event.target.value);

  return (
    <>
      <CourseDetailWrapper>
        <div className={"left"}>
          {!editMode ? (
            <h2> {courseItem.title} </h2>
          ) : (
            <FormGroup>
              <Input
                type={"text"}
                value={title}
                name={"courseTitle"}
                placeholder={"Жазбаның тақырыбы"}
                onChange={onEditTitleChange}
                className={"courseTitle"}
              />
            </FormGroup>
          )}
          <img
            src={courseItem.img}
            alt={"COURSE_BANNER"}
            className={"mobile-course-banner"}
          />
          <p className={"basic-info"}>
            <Icon courseDetail>
              <FontAwesomeIcon icon={faClock} />
            </Icon>
            <span>Completion time: </span>
            <span>{courseItem.completionTime / 60}h</span>
          </p>
          <p className={"basic-info"}>
            <Icon courseDetail>
              <FontAwesomeIcon icon={faAward} />
            </Icon>
            <span>Certificate: </span>
            {!editMode ? (
              <span>{courseItem.certificate ? "Yes" : "No"}</span>
            ) : (
              <CertificateStatus
                certModalState={certModalState}
                setCertModalState={setCertModalState}
              />
            )}
          </p>
          <p className={"basic-info"}>
            <Icon courseDetail>
              <FontAwesomeIcon icon={faUserGraduate} />
            </Icon>
            <span>Author: </span>
            <span className={"author"}>
              <span>{courseItem.author}</span>
            </span>
          </p>
          <Counts courseItem={courseItem} editMode={editMode} />
          <div className={"course-content"}>
            <TabsWrapper>
              <Tab
                active={changeContent === "content" && 1}
                onClick={() => handleChangeContent("content")}
              >
                <Icon>
                  <AiOutlineAlignLeft />
                </Icon>
                Course content
              </Tab>
              <Tab
                active={changeContent === "groups" && 1}
                onClick={() => handleChangeContent("groups")}
              >
                <Icon>
                  <AiOutlineUsergroupAdd />
                </Icon>
                Course groups
              </Tab>
            </TabsWrapper>
            <div className={"tab-content"}>
              {changeContent === "content" ? (
                <>
                  <CourseContent courseItem={courseItem} editMode={editMode} />

                  <div className={"lessons"}>
                    <h3>Course lessons</h3>
                    <LessonsList editMode={editMode} />
                  </div>
                </>
              ) : (
                <CourseGroups />
              )}
            </div>
          </div>
        </div>
        <div className={"right-wrapper"}>
          <CourseBanner
            editMode={editMode}
            banner={banner}
            setBanner={setBanner}
          />
          <RightInfo
            courseItem={courseItem}
            editMode={editMode}
            setEditMode={setEditMode}
            setBanner={setBanner}
          />
        </div>
      </CourseDetailWrapper>

      {certModalState && (
        <Modal
          setModalState={setCertModalState}
          title={"Сертификат таңдаңыз"}
          component={Certificate}
          modalType={"certModal"}
        />
      )}
    </>
  );
};
