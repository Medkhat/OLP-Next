import { faTenge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { modifyNumbers } from "../../assets/helpers/helpers";
import {
  Card,
  CardBody,
  CardFooter,
  CardsWrapper,
  CardTitle,
  GrayText,
} from "../common/styles";
import { Categories } from "./style";

export type CoursePropTypes = {
  id: string;
  img: string;
  title: string;
  price: number;
  author: string;
  level: string;
};

export type CourseCategoryTypes = {
  id: string;
  title: string;
};

export type CoursesTypes = {
  courses?: CoursePropTypes[];
  categories?: CourseCategoryTypes[];
};

const CourseCategories: React.FC<CoursesTypes> = ({ categories }) => {
  return (
    <Categories>
      <h2>Категориялар: </h2>
      <p className={"active"}>Барлығы</p>
      {categories.map((item: CourseCategoryTypes) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </Categories>
  );
};

const Course: React.FC<CoursePropTypes> = (props) => {
  return (
    <Card>
      <img src={props.img} className={"image"} alt="COURSE_BANNER" />
      <CardBody>
        <p className={"author"}>
          <FaRegUserCircle />
          <span>{props.author}</span>
        </p>
        <Link href={"/courses/[id]"} as={`/courses/${props.id}`}>
          <CardTitle type={"courses"}>{props.title}</CardTitle>
        </Link>
        <CardFooter>
          <GrayText>{props.level}</GrayText>
          <GrayText>
            <span className={"price"}>{modifyNumbers(props.price)}</span>
            <FontAwesomeIcon icon={faTenge} />
          </GrayText>
        </CardFooter>
      </CardBody>
    </Card>
  );
};

export const Courses: React.FC<CoursesTypes> = ({ courses, categories }) => (
  <>
    <CourseCategories categories={categories} />
    <CardsWrapper type={"courses"}>
      {courses.map((item: CoursePropTypes) => (
        <Course key={item.id} {...item} />
      ))}
    </CardsWrapper>
  </>
);
