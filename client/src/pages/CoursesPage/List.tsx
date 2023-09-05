import { Course } from '@Interfaces';
import image1 from './assets/course/image1.png';
import image2 from './assets/course/image2.png';
import image3 from './assets/course/image3.png';
import image4 from './assets/course/image4.png';
import image5 from './assets/course/image5.png';
import image6 from './assets/course/image6.png';
import image7 from './assets/course/image7.png';
import { Link } from 'react-router-dom';

import style from './style.module.scss';

interface CourseProps {
  courses: Course[];
}

const List: React.FC<CourseProps> = ({ courses }) => {
  const imageUrls = [image1, image2, image3, image4, image5, image6, image7];

  const getRandomImageUrl = () => {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrls[randomIndex];
  };

  return (
    <div className={style.list}>
      {courses.map(({ title, description, course_id }, index) => (
        <Link to={`/course/${course_id}`} key={index}>
          <div className={style.item}>
            <div className={style.img} style={{ backgroundImage: `url(${getRandomImageUrl()})` }}></div>

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
