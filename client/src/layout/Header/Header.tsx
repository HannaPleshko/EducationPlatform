import React from 'react';

import { Link } from 'react-router-dom';
import Options from './Options';
import AuthButton from './AuthButton';

import style from './style.module.scss';

interface HeaderProps {
  options?: any;
  setCurOption?: (param: string) => void;
}

const Header: React.FC<HeaderProps> = ({ options, setCurOption }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <Link to="/">
          <h1>HSCHOOL.</h1>
        </Link>

        {options && setCurOption ? (
          <div className={style.options}>
            {options.map((el: any, index: number) => (
              <Options key={index} option={el} setCurOption={setCurOption} />
            ))}
          </div>
        ) : null}

        <AuthButton />
      </div>
    </div>
  );
};

export default Header;
