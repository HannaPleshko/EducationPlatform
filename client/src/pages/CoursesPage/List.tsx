import { Course } from '@Interfaces';

interface CourseProps {
  courses: Course[];
}

const List: React.FC<CourseProps> = ({ courses }) => {
  return (
    <div>
      {courses.map(({ title }) => (
        <div>
          <p>{title}</p>
        </div>
      ))}
    </div>
  );
};

export default List;
