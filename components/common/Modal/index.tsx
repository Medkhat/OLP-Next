import { Centered, ModalWrapper } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { Icon } from "../styles";

type ModalPropTypes = {
  setModalState: Function;
  component: React.FC;
  title: string;
  modalType?: string;
  withHeader: boolean;
};

const Modal: React.FC<ModalPropTypes> = ({
  setModalState,
  title,
  component: Component,
  modalType,
  withHeader,
}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  });

  return (
    <ModalWrapper>
      <Centered className={modalType}>
        {withHeader && (
          <div className={`modal-header`}>
            <h3>{title}</h3>
            <Icon modal onClick={() => setModalState(false)}>
              <FontAwesomeIcon icon={faTimes} />
            </Icon>
          </div>
        )}
        <div className={"modal-body"}>
          <Component />
        </div>
      </Centered>
    </ModalWrapper>
  );
};

export default Modal;
