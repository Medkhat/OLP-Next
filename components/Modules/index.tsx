import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
  Card,
  CardBody,
  CardFooter,
  CardsWrapper,
  CardTitle,
  GrayText,
} from "../common/styles";

export type ModulesPropTypes = {
  id: number;
  img: string;
  title: string;
  description: string;
  modules: number;
};

type modularCourses = {
  modularCourses: ModulesPropTypes[];
};

const Module: React.FC<ModulesPropTypes> = ({
  id,
  img,
  title,
  description,
  modules,
}) => {
  return (
    <Card>
      <img src={img} className={"image"} alt="COURSE_BANNER" />
      <CardBody type={"module"}>
        <Link href={`/modules/${id}`}>
          <CardTitle type={"module"}>{title}</CardTitle>
        </Link>
        <GrayText type={"module-desc"}>{description}</GrayText>
        <CardFooter>
          <GrayText>{modules} модуль</GrayText>
          <Link href={`/modules/${id}`}>
            <CardTitle type={"button"}>
              <span>Бастау</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </CardTitle>
          </Link>
        </CardFooter>
      </CardBody>
    </Card>
  );
};

export const Modules: React.FC<modularCourses> = ({ modularCourses }) => {
  let moduleItems: Array<JSX.Element> = modularCourses.map((item) => (
    <Module
      key={item.id}
      id={item.id}
      img={item.img}
      title={item.title}
      description={item.description}
      modules={item.modules}
    />
  ));

  return <CardsWrapper type={"modules"}>{moduleItems}</CardsWrapper>;
};
