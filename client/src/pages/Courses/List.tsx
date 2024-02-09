import { Course } from '@interface';
import style from './style.module.scss';
import { Link } from 'react-router-dom';

interface CourseProps {
  courses: Course[];
}

const List: React.FC<CourseProps> = ({ courses }) => {
  return (
    <div className={style.list}>
      {courses.map(({ title, description, course_id }, index) => (
        <Link to={`/course/${course_id}`} key={index}>
          <div className={style.item}>
            <div className={style.info}>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default List;
