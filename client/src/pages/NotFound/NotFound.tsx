import Header from '@layout/Header/Header';
import style from './style.module.scss';
import Footer from '@layout/Footer/Footer';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <div className={style.info}>
          <p>Error 404</p>
          <h1>Hey Buddy</h1>
          <p>We can’t seem to find the page you are looking for.</p>

          <Link to={'/'}>
            <Button className={style.btn} variant="outlined">
              Go Home
            </Button>
          </Link>
        </div>

        <div className={style.img}></div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
