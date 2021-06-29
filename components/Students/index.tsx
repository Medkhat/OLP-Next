import {
  Card,
  CardBody,
  CardsWrapper,
  CardTitle,
  CardImg,
  CardImgWrapper,
  GrayText,
} from "../common/styles";
import Link from "next/link";
import { IUsers } from "../../assets/helpers/interfaces";
import { UsersType } from "../Teachers";

const StudentItem: React.FC<IUsers> = (props) => {
  return (
    <Card>
      <CardImgWrapper>
        <CardImg src={props.img} alt="TEACHER_IMG" />
      </CardImgWrapper>
      <CardBody>
        <Link href={"/students/" + props.id}>
          <CardTitle>
            {props.lastName} {props.firstName}
          </CardTitle>
        </Link>
        <GrayText>{props.subject}</GrayText>
      </CardBody>
    </Card>
  );
};

export const Students: React.FC<UsersType> = ({ users }) => {
  let studentItems: Array<JSX.Element> = users.map((item: IUsers) => (
    <StudentItem
      key={item.id}
      id={item.id}
      firstName={item.firstName}
      lastName={item.lastName}
      subject={item.subject}
      img={item.img}
    />
  ));

  return <CardsWrapper type={"users"}>{studentItems}</CardsWrapper>;
};
