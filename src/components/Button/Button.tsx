import { FC } from "react";
import "./Button.scss";

type Props = {
  reset?: boolean;
  selected?: boolean;
  extraClass?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const Button: FC<Props> = ({
  reset = false,
  selected = false,
  extraClass = "",
  onClick,
  children,
}) => {
  return (
    <button
      className={`btn ${reset ? "reset__btn" : "tip__btn"} ${
        selected ? "tip__selected" : ""
      } ${extraClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// reset reset__btn {tip__btn}

export default Button;
