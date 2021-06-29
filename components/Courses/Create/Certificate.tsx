import { useState } from "react";
import { CertWrapper } from "../style";
import temp1 from "../../../assets/img/certTemplates/temp1.jpg";
import temp2 from "../../../assets/img/certTemplates/temp2.jpg";
import temp3 from "../../../assets/img/certTemplates/temp3.jpg";
import temp4 from "../../../assets/img/certTemplates/temp4.jpg";
import temp5 from "../../../assets/img/certTemplates/temp5.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faInfoCircle,
  faSearch,
  faTrash,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { Alert } from "../../common/Alert";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import { fileToDataUri } from "../../../assets/helpers/FileToDataURI";
import {
  Icon,
  Button,
  Overlay,
  OverlayButton,
  Tab,
  TabsWrapper,
} from "../../common/styles";
import { colors } from "../../../assets/helpers/sc-helpers";

type CertTempTypes = {
  id?: number;
  img: string;
  title: string;
};

type DefaultCertsTypes = {
  selectedCert: number | null;
  setSelectedCert: Function;
};

type FromComputerTypes = {
  fileFromComputer: string | null;
  setFileFromComputer: Function;
};

const DefaultCerts: React.FC<DefaultCertsTypes> = ({
  selectedCert,
  setSelectedCert,
}) => {
  const [activeImage, setActiveImage] = useState<CertTempTypes | null>(null);

  let certTemplates = [
    { id: 0, img: temp1, title: "Template 1" },
    { id: 1, img: temp2, title: "Template 2" },
    { id: 2, img: temp3, title: "Template 3" },
    { id: 3, img: temp4, title: "Template 4" },
    { id: 4, img: temp5, title: "Template 5" },
  ] as Array<CertTempTypes>;

  let certTempImages = certTemplates.map((item: CertTempTypes) => (
    <div
      key={item.id}
      className={`template ${selectedCert === item.id && "selected"}`}
      onClick={() => setSelectedCert(item.id)}
    >
      <img src={item.img} className={"image-item"} />
      <Button
        className={"preview"}
        onClick={() => setActiveImage({ img: item.img, title: item.title })}
      >
        <FontAwesomeIcon icon={faSearch} />
      </Button>
    </div>
  ));

  return (
    <div className={"defaults"}>
      {certTempImages}
      {activeImage && (
        <Lightbox
          image={activeImage.img}
          title={activeImage.title}
          onClose={() => setActiveImage(null)}
        />
      )}
    </div>
  );
};

const FromComputer: React.FC<FromComputerTypes> = ({
  fileFromComputer,
  setFileFromComputer,
}) => {
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files[0]) {
      setFileFromComputer("");
      return;
    }
    fileToDataUri(event.target.files[0]).then((dataURI) =>
      setFileFromComputer(dataURI)
    );
  };

  return (
    <div className={"from-computer"}>
      <label>
        {!fileFromComputer ? (
          <>
            <Icon>
              <FontAwesomeIcon icon={faUpload} />
            </Icon>
            Файлдарды ашу
            <input
              type={"file"}
              style={{ display: "none" }}
              onChange={onChangeHandler}
            />
          </>
        ) : (
          <div className={"uploaded-img-wrapper"}>
            <div className={"remove-btn"}>
              <OverlayButton onClick={() => setFileFromComputer(null)}>
                <Icon>
                  <FontAwesomeIcon icon={faTrash} />
                </Icon>
                <span>{"Суретті өшіру"}</span>
              </OverlayButton>
            </div>
            <img src={fileFromComputer} className={"uploaded-img"} />
            <Overlay className={"overlay"} />
          </div>
        )}
      </label>
    </div>
  );
};

export const Certificate: React.FC = () => {
  const [changeContent, setChangeContent] = useState<string>("defaults");
  const [selectedCert, setSelectedCert] = useState<number | null>(null);
  const [fileFromComputer, setFileFromComputer] = useState<string | null>(null);

  const handleChangeContent: Function = (content: string) => {
    setSelectedCert(null);
    setFileFromComputer(null);
    setChangeContent(content);
  };

  return (
    <CertWrapper>
      <TabsWrapper>
        <Tab
          active={changeContent === "defaults" && 1}
          onClick={() => handleChangeContent("defaults")}
        >
          <Icon>
            <FontAwesomeIcon icon={faCheck} />
          </Icon>
          Шаблоннан таңдау
        </Tab>
        <Tab
          active={changeContent === "fromComputer" && 1}
          onClick={() => handleChangeContent("fromComputer")}
        >
          <Icon>
            <FontAwesomeIcon icon={faUpload} />
          </Icon>
          Компьютерден жүктеу
        </Tab>
      </TabsWrapper>
      <div className={"content"}>
        {changeContent === "defaults" ? (
          <>
            <Alert
              bgcolor={colors.lightBlue}
              icon={faInfoCircle}
              iconColor={colors.blue}
              text={"Өзіңізге ұнаған шаблонды таңдаңыз"}
            />
            <DefaultCerts
              selectedCert={selectedCert}
              setSelectedCert={setSelectedCert}
            />
          </>
        ) : (
          <>
            <Alert
              bgcolor={colors.lightBlue}
              icon={faInfoCircle}
              iconColor={colors.blue}
              text={"Өзіңіздің сертификатыңызды жүктеңіз"}
            />
            <FromComputer
              fileFromComputer={fileFromComputer}
              setFileFromComputer={setFileFromComputer}
            />
          </>
        )}
      </div>
      <div className={"footer"}>
        <Button type={"button"} btnType={"light"}>
          Бас тарту
        </Button>
        <Button type={"button"} disabled={!selectedCert && !fileFromComputer}>
          Сақтау
        </Button>
      </div>
    </CertWrapper>
  );
};
