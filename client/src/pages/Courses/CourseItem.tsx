import { Link } from 'react-router-dom';
import style from './style.module.scss';
import { Course } from '@interface';

interface iCourseItem {
  course: Course;
}

const CourseItem: React.FC<iCourseItem> = ({ course }) => {
  return (
    <>
      <Link to={`/course/${course.course_id}`}>
        <div className={style.item}>
          <div className={style.info}>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CourseItem;
