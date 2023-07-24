import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth.hook';
import style from './style.module.scss';

function Header() {
  const navigate = useNavigate();
  const { token, logout } = useAuth();
  const isAuthenticated = !!token;

  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <h1>Hschool</h1>

        <nav>
          {!isAuthenticated ?
            <>
              <Link to="/auth">
                <div className={style.login}>Login →</div>
              </Link>

              <Link to="/reg">
                <div className={style.sign}>Sign Up</div>
              </Link>
            </> :
            <div onClick={() => {
              logout();
              navigate('/');
            }}>
              <div className={style.sign}>Sign Out</div>
            </div>}
        </nav>
      </div>
    </div>
  );
}

export default Header;
