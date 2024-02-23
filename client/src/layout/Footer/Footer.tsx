import { Link } from 'react-router-dom';
import style from './style.module.scss';

const Footer: React.FC = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <nav>
          <div className={style.navigation}>
            {['Home', 'Textbook', 'Statistics', 'Sprint'].map((el, index) => (
              <Link to={'*'} key={index}>
                <p>{el}</p>
              </Link>
            ))}
          </div>

          <div className={style.navigation}>
            <p>Hanna</p>
            <p>Stas</p>
          </div>
        </nav>

        <div className={style.lineSeparator}></div>

        <nav>
          <div className={style.logoImgs}>
            <Link to={'https://github.com/HannaPleshko'}>
              <div className={style.logoGit}></div>
            </Link>
            <Link to={'*'}>
              <div className={style.logoGT}></div>
            </Link>
            <Link to={'*'}>
              <div className={style.logoYouTube}></div>{' '}
            </Link>
          </div>
          <p>©2023 Hschool. Project for Hschool.</p>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
