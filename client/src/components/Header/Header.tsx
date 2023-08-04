import { Link } from "react-router-dom";
import Options from "./Options";
import AuthButton from "./AuthButton";
import style from "./style.module.scss";

interface IHeaderOptions {
  id: number;
  item: string;
}

interface HeaderProps {
  options?: IHeaderOptions[];
  setCurrentOption?: (param: number) => void;
}

const Header: React.FC<HeaderProps> = ({ options, setCurrentOption }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <Link to="/">
          <h1> Hschool</h1>
        </Link>

        {options && setCurrentOption ? (
          <div className={style.options}>
            {options.map((el, index) => (
              <Options
                key={index}
                option={el}
                setCurrentOption={setCurrentOption}
              />
            ))}
          </div>
        ) : null}

        <AuthButton />
      </div>
    </div>
  );
};

export default Header;
