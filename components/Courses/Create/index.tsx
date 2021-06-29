import { CourseForm } from "./CourseForm";
import { Wrapper } from "./style";

export const NewCourse: React.FC = () => {
  return (
    <Wrapper>
      <h3>Жаңа курс қосу</h3>
      <CourseForm />
    </Wrapper>
  );
};
