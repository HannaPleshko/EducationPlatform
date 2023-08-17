import { Course } from '@Interfaces';

import style from './style.module.scss';

interface CourseProps {
  courses: Course[];
}

const List: React.FC<CourseProps> = ({ courses }) => {
  return (
    <div className={style.list}>
      {courses.map(({ title, description }) => (
        <div className={style.item}>
          <div className={style.img}></div>

          <div className={style.info}>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
