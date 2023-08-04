import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';
import style from './style.module.scss';

function Header({ options, setCurrentOption }) {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <Link to="/">
          <h1> Hschool</h1>
        </Link>

        {options ? (
          <div className={style.options}>
            {options.map((el, index) => (
              <p onClick={() => setCurrentOption(el.id)} key={index}>
                {el.item}
              </p>
            ))}
          </div>
        ) : null}

        <div className={style.btns}>
          {!isAuthenticated ? (
            <>
              <Link to="/auth">
                <div className={style.login}>Login →</div>
              </Link>

              <Link to="/reg">
                <div className={style.sign}>Sign Up</div>
              </Link>
            </>
          ) : (
            <div
              onClick={() => {
                logout();
                navigate('/');
              }}
            >
              <div className={style.sign}>Sign Out</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
