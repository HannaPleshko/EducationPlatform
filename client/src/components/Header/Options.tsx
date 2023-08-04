interface IHeaderOptions {
  id: number;
  item: string;
}

interface HeaderProps {
  option: IHeaderOptions;
  setCurrentOption: (param: number) => void;
}

const Options: React.FC<HeaderProps> = ({ option, setCurrentOption }) => {
  return <p onClick={() => setCurrentOption(option.id)}>{option.item}</p>;
};

export default Options;
