import {
  faEdit,
  faExclamationTriangle,
  faSave,
  faTimes,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Icon, Input, Overlay } from "../common/styles";
import { IPosts } from "../../assets/helpers/interfaces";
import { useState } from "react";
import Modal from "../common/Modal";
import {
  PostsDetail,
  PostsImage,
  PostsImageWrapper,
  PostsInfoOnDetail,
} from "./style";
import { HeadingText } from "../common/Heading/style";
import { Uploader } from "../common/Upload/Uploader";
import { fileToDataUri } from "../../assets/helpers/FileToDataURI";
import { AiOutlineEye, AiOutlineCalendar } from "react-icons/ai";
import { FormGroup } from "../Courses/Create/style";
import { tinyMCEApiKey } from "../../assets/helpers/constants";
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
import { Alert } from "../common/Alert";
import { colors } from "../../assets/helpers/sc-helpers";
import loader from "../../assets/img/loader.svg";
import { NextRouter, useRouter } from "next/router";

type PostsDetailTypes = {
  postsItem?: IPosts;
  content?: string;
  handleEditorChange?: (content: string, editor: any) => void;
};
type PostsImageTypes = {
  img: string;
  setImage: Function;
  setModifiedImage: Function;
};
type ConfirmationTypes = {
  setModalState: Function;
  handleDelete: () => void;
};

const Image: React.FC<PostsImageTypes> = ({
  img,
  setImage,
  setModifiedImage,
}) => {
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files[0]) {
      setModifiedImage("");
      return;
    }
    setImage(event.target.files[0]);
    fileToDataUri(event.target.files[0]).then((dataURI) =>
      setModifiedImage(dataURI)
    );
  };
  return (
    <PostsImageWrapper>
      <Uploader onChangeHandler={onChangeHandler} />
      <PostsImage src={img} />
      <Overlay className={"overlay"} />
    </PostsImageWrapper>
  );
};

const PostsContent: React.FC<PostsDetailTypes> = ({
  content,
  handleEditorChange,
}) => {
  return (
    <FormGroup>
      <Editor
        apiKey={tinyMCEApiKey}
        id={"tinymce-editor"}
        value={content}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "insert | undo redo |  formatselect | bold italic backcolor  | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | link image",
          placeholder: "Жаңалықтың мазмұнын енгізіңіз",
          mobile: {
            theme: "mobile",
          },
          file_picker_types: "image",
          images_upload_url: "example.py",
          images_upload_handler: function (blobInfo, success, failure) {
            setTimeout(function () {
              success(
                "http://moxiecode.cachefly.net/tinymce/v9/images/logo.png"
              );
            }, 2000);
          },
        }}
        onEditorChange={handleEditorChange}
      />
    </FormGroup>
  );
};

const Confirmation: React.FC<ConfirmationTypes> = ({
  setModalState,
  handleDelete,
}) => {
  return (
    <div className={"confirm-form"}>
      <p>Сіз жоюды қалайсыз ба ?</p>
      <div className={"confirm-btns"}>
        <Button btnType={"light"} onClick={() => setModalState(false)}>
          Бас тарту
        </Button>
        <Button btnType={"danger"} onClick={handleDelete}>
          Жою
        </Button>
      </div>
    </div>
  );
};

export const PostsDetailComponent: React.FC<PostsDetailTypes> = ({
  postsItem,
}) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [modalState, setModalState] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [alertState, setAlertState] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(postsItem.title);
  const [img, setImage] = useState<File | null>(null);
  const [modifiedImage, setModifiedImage] = useState<string>(postsItem.img);
  const [content, setContent] = useState<string>(postsItem.content);

  const router: NextRouter = useRouter();

  const onTitleChange: Function = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setTitle(event.target.value);

  const onEditBtnClick = () => setEditMode(true);

  const cancelEditMode: Function = () => setEditMode(false);

  const showModal: Function = () => setModalState(true);

  const handleEditorChange = (content: string, editor) => setContent(content);

  const handleDelete = async () => {
    try {
      await axios.delete(
        `${process.env.BlogServiceBaseURL}/${
          postsItem.postType === "blogs" ? "blog" : "news"
        }/${postsItem.uid}`
      );
      router.replace("/posts");
    } catch (error) {
      console.error(error);
    }
  };

  const handleSavePost = async () => {
    if (content.length > 0 && title.length > 0 && img) {
      setAlertState(false);
      setIsLoading(true);
      let formData = new FormData();
      formData.set("title", title);
      formData.set("content", content);
      formData.append("banner", img);
      formData.set("organization_id", "68261770-0a85-4606-a2d1-25604785c480");
      formData.set("adder_id", "51a9b1b3-efe4-457b-b45a-116e17e21518");

      try {
        let response = await axios.put(
          `${process.env.BlogServiceBaseURL}/${
            postsItem.postType === "blogs" ? "blog" : "news"
          }/${postsItem.uid}`,
          formData,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setIsLoading(false);
        console.log(response);
      } catch (error) {
        setIsLoading(false);
        console.error(error);
      }
    } else setAlertState(true);
  };

  return (
    <>
      <PostsDetail>
        {!editMode ? (
          <div className={`editBtns`}>
            <Button type={"button"} onClick={onEditBtnClick}>
              <Icon>
                <FontAwesomeIcon icon={faEdit} />
              </Icon>
              <span>Өзгерту</span>
            </Button>
            <Button type={"button"} btnType={"danger"} onClick={showModal}>
              <Icon>
                <FontAwesomeIcon icon={faTrash} />
              </Icon>
              <span>Жою</span>
            </Button>
          </div>
        ) : (
          <div className={`editBtns`}>
            <Button type={"button"} onClick={handleSavePost}>
              {!isLoading ? (
                <>
                  <Icon>
                    <FontAwesomeIcon icon={faSave} />
                  </Icon>
                  <span>Сақтау</span>
                </>
              ) : (
                <img src={loader} alt={"LOADER"} style={{ width: 35 }} />
              )}
            </Button>
            <Button type={"button"} btnType={"light"} onClick={cancelEditMode}>
              <Icon>
                <FontAwesomeIcon icon={faTimes} />
              </Icon>
              <span>Бас тарту</span>
            </Button>
          </div>
        )}
        {alertState && (
          <FormGroup>
            <Alert
              text={"Барлық өрісті толтыру міндетті"}
              icon={faExclamationTriangle}
              bgcolor={colors.lightOrange}
              iconColor={colors.orange}
            />
          </FormGroup>
        )}
        <HeadingText postsDetail>
          {!editMode ? (
            <span>{postsItem.title}</span>
          ) : (
            <Input
              type={"text"}
              value={title}
              name={"postsTitle"}
              placeholder={"Жазбаның тақырыбы"}
              onChange={onTitleChange}
              pd={"10px 15px"}
              fontSize={16}
            />
          )}
        </HeadingText>
        <PostsInfoOnDetail postsDetail>
          <p>
            <Icon postsIcon>
              <AiOutlineEye />
            </Icon>
            <span>{postsItem.views}</span>
          </p>
          <p>
            <Icon postsIcon>
              <AiOutlineCalendar />
            </Icon>
            <span>{postsItem.date}</span>
          </p>
        </PostsInfoOnDetail>
        {editMode ? (
          <Image
            img={modifiedImage}
            setModifiedImage={setModifiedImage}
            setImage={setImage}
          />
        ) : (
          <PostsImageWrapper>
            <PostsImage src={postsItem.img} />
          </PostsImageWrapper>
        )}
        {!editMode ? (
          <div
            className={"content"}
            dangerouslySetInnerHTML={{
              __html: postsItem.content,
            }}
          ></div>
        ) : (
          <PostsContent
            content={content}
            handleEditorChange={handleEditorChange}
          />
        )}
      </PostsDetail>
      {modalState ? (
        <Modal
          setModalState={setModalState}
          title={"Confirm"}
          component={() => (
            <Confirmation
              setModalState={setModalState}
              handleDelete={handleDelete}
            />
          )}
          modalType={"confirm"}
          withHeader={false}
        />
      ) : null}
    </>
  );
};
