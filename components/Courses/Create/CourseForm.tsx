import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { BannerUploader, Button, Input, Overlay } from "../../common/styles";
import { ErrorText, FormGroup, FormWrapper } from "./style";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import { useState } from "react";
import { Uploader } from "../../common/Upload/Uploader";
import { fileToDataUri } from "../../../assets/helpers/FileToDataURI";
import { Alert } from "../../common/Alert";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { colors } from "../../../assets/helpers/sc-helpers";
import { SuneditorBtnList } from "../../common/se-button-list";

const validation = Yup.object({
  title: Yup.string().max(50, "Too long!").required("Required!"),
  price: Yup.string().required("Required!"),
  banner: Yup.mixed()
    .required("You need to provide a file")
    .test(
      "fileSize",
      "The file is too large",
      (value) => value && value[0].size <= 2000000
    ),
});

export const CourseForm: React.FC = ({}) => {
  const [description, setDescription] = useState<string>("");
  const [banner, setBanner] = useState<string | null>(null);
  const [bannerToSend, setBannerToSend] = useState<File | null>(null);
  const { handleSubmit, control, errors, register, reset } = useForm({
    resolver: yupResolver(validation),
  });

  const onSubmit = (data) => {
    let formData = new FormData();
    formData.set("title", data.title);
    formData.set("price", data.price);
    formData.set("description", description);
    formData.append("banner", bannerToSend);
  };

  const onReset = () => {
    setBannerToSend(null);
    setBanner(null);
    setDescription("");
    reset();
  };

  const handleDescriptionChange = (content: string) => {
    setDescription(content);
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files[0]) {
      setBanner("");
      return;
    }
    setBannerToSend(event.target.files[0]);
    fileToDataUri(event.target.files[0]).then((dataURI) => setBanner(dataURI));
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <div className={"left"}>
        <Alert
          text={"Барлық өрісті толтыру міндетті"}
          icon={faExclamationTriangle}
          bgcolor={colors.lightOrange}
          iconColor={colors.orange}
        />
        <FormGroup>
          <Controller
            as={Input}
            name={"title"}
            control={control}
            defaultValue={""}
            placeholder={"Курс тақырыбын енгізіңіз"}
            error={errors.title}
          />
          <ErrorText>{errors.title?.message}</ErrorText>
        </FormGroup>
        <FormGroup>
          <SunEditor
            enable={true}
            setOptions={{
              buttonList: [SuneditorBtnList],
              minHeight: 200,
              height: "auto",
              stickyToolbar: "50px",
            }}
            lang={"ru"}
            width={"100%"}
            setContents={description}
            setDefaultStyle={"font-size: 16px;border-radius:5px;"}
            placeholder={"Курстың қысқаша сипаттамасын енгізіңіз"}
            onChange={handleDescriptionChange}
          />
        </FormGroup>
      </div>
      <div className={"right"}>
        <FormGroup>
          {!banner ? (
            <BannerUploader height={190}>
              Баннерді жүктеу
              <input
                type={"file"}
                style={{ display: "none" }}
                onChange={onChangeHandler}
                name={"banner"}
                ref={register}
              />
            </BannerUploader>
          ) : (
            <>
              <img src={banner} alt={"BANNER"} className={"img"} />
              <Uploader onChangeHandler={onChangeHandler} />
              <Overlay className={"overlay"} />
            </>
          )}
        </FormGroup>

        <FormGroup>
          <Controller
            as={Input}
            name={"price"}
            control={control}
            defaultValue={""}
            placeholder={"Курс бағасын енгізіңіз"}
            error={errors.price}
          />
          <ErrorText>{errors.price?.message}</ErrorText>
        </FormGroup>

        <div className={"formBtns"}>
          <Button type={"submit"}>Курсты қосу</Button>
          <Button type={"button"} btnType={"light"} onClick={onReset}>
            Тазалау
          </Button>
        </div>
      </div>
    </FormWrapper>
  );
};
