import { TestAnswerTypes } from "../../components/Courses/Lessons/LessonDetail";
import { FieldsNames } from "../../components/LoginRegister/types";
import { PostsTypeKind } from "./constants";

export function shuffle(array: Array<TestAnswerTypes>): Array<TestAnswerTypes> {
  let currentIndex: number = array.length,
    temporaryValue: TestAnswerTypes,
    randomIndex: number;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

export const normalizeDate: (date: string) => string = (date: string) =>
  date.split("-").reverse().join("-");

export function modifyNumbers(numbers: number) {
  let str: Array<string> = numbers.toString().split(".");
  if (str[0].length >= 5) {
    str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1 ");
  }
  if (str[1] && str[1].length >= 5) {
    str[1] = str[1].replace(/(\d{3})/g, "$1 ");
  }

  return str.join(".");
}

export const validateOnChange = (value: string, fieldName: string) => {
  switch (fieldName) {
    case FieldsNames.mobile:
      if (value.match(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/))
        return true;
      else return false;
    case FieldsNames.password:
      if (value.length > 6) return true;
      else return false;
    case FieldsNames.firstName:
      if (value.length > 0) return true;
      else return false;
    case FieldsNames.lastName:
      if (value.length > 0) return true;
      else return false;
    case FieldsNames.code:
      if (value.match(/^\d+$/) && value.length === 4) return true;
      else return false;
    case FieldsNames.email:
      let pattern: RegExp = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (pattern.test(value)) return true;
      else return false;
    default:
      break;
  }
};

export const customizePosts = (
  item: any,
  postType: keyof typeof PostsTypeKind
) => {
  let date: Date = new Date(item.published_date);
  let monthIndex: number = date.getMonth() + 1;
  let month: string = monthIndex <= 9 ? `0${monthIndex}` : `${monthIndex}`;

  return {
    id: item.id,
    uid: item.uid,
    title: item.title,
    date: `${date.getDate()}-${month}-${date.getFullYear()}`,
    img: process.env.ResourcesURL + item.banner,
    views: item.views_count,
    content: item.content,
    adderId: item.adder_id,
    organizationId: item.organization_id,
    postType,
  };
};
