import { CoursesTypes, Courses } from "./index";
import { Heading } from "../common/Heading";
import { faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";
import { Section } from "../common/styles";

export const LatestCourses: React.FC<CoursesTypes> = ({
  courses,
  categories,
}) => {
  return (
    <Section>
      <Heading
        title="Соңғы курстар"
        headingType="withButton"
        icon={faChalkboardTeacher}
        path="/courses"
      />
      <Courses courses={courses} categories={categories} />
    </Section>
  );
};
