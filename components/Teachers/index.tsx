import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { IUsers } from "../../assets/helpers/interfaces";
import { Icon } from "../common/styles";
import { UsersWrapper } from "./style";

export type UsersType = {
  users: IUsers[];
};

const TeacherItem: React.FC<IUsers> = (props) => {
  return (
    <tr className={"user-item"}>
      <td>
        <img src={props.img} alt={"USER_IMAGE"} />
      </td>
      <td>
        <Link href={`/teachers/[id].tsx`} as={`/teachers/${props.id}`}>
          <a>
            {props.firstName} {props.lastName}
          </a>
        </Link>
      </td>
      <td>{props.subject}</td>
      <td>{props.rating}</td>
      <td>
        <Icon>
          <FontAwesomeIcon icon={faEdit} />
        </Icon>
        <Icon>
          <FontAwesomeIcon icon={faTrash} />
        </Icon>
      </td>
    </tr>
  );
};

export const Teachers: React.FC<UsersType> = ({ users }) => {
  let teacherItems: Array<JSX.Element> = users.map((item: IUsers) => (
    <TeacherItem
      key={item.id}
      id={item.id}
      firstName={item.firstName}
      lastName={item.lastName}
      subject={item.subject}
      img={item.img}
      rating={item.rating}
    />
  ));

  return (
    <UsersWrapper>
      <table>
        <thead>
          <tr>
            <th>Суреті</th>
            <th>Аты-жөні</th>
            <th>Мамандығы</th>
            <th>Рейтинг</th>
            <th>Өзгерту</th>
          </tr>
        </thead>
        <tbody>{teacherItems}</tbody>
      </table>
    </UsersWrapper>
  );
};
