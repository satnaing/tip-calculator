import { FC } from "react";
import "./Button.scss";

type Props = {
  reset?: boolean;
  selected?: boolean;
};

const Button: FC<Props> = ({ reset = false, selected = false, children }) => {
  return (
    <button
      className={`btn ${reset ? "reset__btn" : "tip__btn"} ${
        selected ? "tip__selected" : ""
      }`}
    >
      {children}
    </button>
  );
};

// reset reset__btn {tip__btn}

export default Button;
