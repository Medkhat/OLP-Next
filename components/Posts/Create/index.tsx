import React from "react";
import dynamic from "next/dynamic";
import {
  Heading3,
  Heading5,
  BannerUploader,
  Input,
  FormButtons,
  Button,
  Overlay,
  customSelectStyles,
  customSelectTheme,
} from "../../common/styles";
import { FormGroup } from "../../Courses/Create/style";
import { PostsFormWrapper } from "./style";
import { BsUpload } from "react-icons/bs";
import "suneditor/dist/css/suneditor.min.css";
import { useState } from "react";
import { fileToDataUri } from "../../../assets/helpers/FileToDataURI";
import { Uploader } from "../../common/Upload/Uploader";
import { Editor } from "@tinymce/tinymce-react";
import { Alert } from "../../common/Alert";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { colors } from "../../../assets/helpers/sc-helpers";
import axios from "axios";
import loader from "../../../assets/img/loader.svg";
import { tinyMCEApiKey } from "../../../assets/helpers/constants";
const Select = dynamic(() => import("react-select"), { ssr: false });

type PostsTypeTypes = {
  value: string;
  label: string;
};

export const PostsForm: React.FC = () => {
  const [content, setContent] = useState<string>("");
  const [banner, setBanner] = useState<File | null>(null);
  const [modidiedBanner, setModifiedBanner] = useState<string | null>(null);
  const [title, setTitle] = useState<string>("");
  const [alertState, setAlertState] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [postType, setPostsType] = useState<string>("posts");

  const onChangeBanner = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBanner(event.target.files[0]);
    fileToDataUri(event.target.files[0]).then((dataURI) =>
      setModifiedBanner(dataURI)
    );
  };

  const handleEditorChange = (content: string, editor) => setContent(content);

  const handleSubmit = async () => {
    if (content.length > 0 && title.length > 0 && banner) {
      setAlertState(false);
      setIsLoading(true);
      let formData = new FormData();
      formData.set("title", title);
      formData.set("content", content);
      formData.append("banner", banner);
      formData.set("organization_id", "68261770-0a85-4606-a2d1-25604785c480");
      formData.set("adder_id", "51a9b1b3-efe4-457b-b45a-116e17e21518");

      try {
        let response = await axios.post(
          `${process.env.BlogServiceBaseURL}/${postType}`,
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

  const handleReset = () => {
    setContent("");
    setTitle("");
    setBanner(null);
    setModifiedBanner(null);
  };

  const handlePostsTypeChange = (postType: PostsTypeTypes) =>
    setPostsType(postType.value);

  let postTypeOptions: Array<PostsTypeTypes> = [
    { value: "posts", label: "Жаңалық жазу" },
    { value: "blogs", label: "Блог жазу" },
  ];

  return (
    <PostsFormWrapper>
      <Heading3 mb={40}>Жаңа жазбаны қосу</Heading3>
      <form id={"posts-form"}>
        <div className={"post-type-banner"}>
          <div className={"post-type"}>
            <Heading5 mb={10}>Жазбаның типін таңдаңыз:</Heading5>
            <Select
              options={postTypeOptions}
              defaultValue={postTypeOptions[0]}
              isSearchable={false}
              theme={customSelectTheme}
              styles={customSelectStyles}
              id={"post-type-select"}
              onChange={handlePostsTypeChange}
            />
          </div>
          <FormGroup className={"banner-wrapper"}>
            {modidiedBanner ? (
              <>
                <img src={modidiedBanner} alt={"BANNER"} className={"banner"} />
                <Uploader onChangeHandler={onChangeBanner} />
                <Overlay className={"overlay"} />
              </>
            ) : (
              <BannerUploader height={250}>
                <BsUpload />
                <span className={"uploader-text"}>Баннерді жүктеу</span>
                <input
                  type={"file"}
                  style={{ display: "none" }}
                  onChange={onChangeBanner}
                />
              </BannerUploader>
            )}
          </FormGroup>
        </div>
        <FormGroup>
          <Input
            value={title}
            type={"text"}
            name={"title"}
            placeholder={"Тақырыбын енгізіңіз"}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setTitle(event.target.value)
            }
          />
        </FormGroup>
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
        <FormButtons align={"right"} fontSize={17}>
          <Button type={"button"} onClick={handleSubmit}>
            {!isLoading ? (
              "Жариялау"
            ) : (
              <img src={loader} alt={"LOADER"} style={{ width: 35 }} />
            )}
          </Button>
          <Button type={"button"} btnType={"light"} onClick={handleReset}>
            {" "}
            Тазарту{" "}
          </Button>
        </FormButtons>
      </form>
    </PostsFormWrapper>
  );
};
