import { Link } from 'react-router-dom';
import style from './style.module.scss';
import { Button } from '@mui/material';

const Navigation: React.FC = () => {
  return (
    <div className={style.navigation}>
      <Link to="/">
        <Button className={style.btn} variant="text">
          Courses
        </Button>
      </Link>
      <Link to="*">
        <Button className={style.btn} variant="text">
          Profile
        </Button>
      </Link>
      <Link to="*">
        <Button className={style.btn} variant="text">
          Settings
        </Button>
      </Link>
      <Link to="*">
        <Button className={style.btn} variant="text">
          Notifications
        </Button>
      </Link>
      <Link to="*">
        <Button className={style.btn} variant="text">
          What's New?
        </Button>
      </Link>
    </div>
  );
};

export default Navigation;
