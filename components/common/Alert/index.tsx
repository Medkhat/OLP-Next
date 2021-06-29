import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "../styles";
import { AlertWrapper } from "./style";
type AlertTypes = {
  text: string;
  icon: IconProp;
  bgcolor: string;
  iconColor: string;
};

export const Alert: React.FC<AlertTypes> = ({
  text,
  icon,
  bgcolor,
  iconColor,
}) => {
  return (
    <AlertWrapper style={{ backgroundColor: bgcolor }}>
      <Icon style={{ color: iconColor }}>
        <FontAwesomeIcon icon={icon} />
      </Icon>
      <p>{text}</p>
    </AlertWrapper>
  );
};
