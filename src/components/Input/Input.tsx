import { FC } from "react";
import "./Input.scss";

type Props = {
  inputId?: string;
  icon: string;
  type?: string;
  error?: boolean;
};

const Input: FC<Props> = ({
  inputId = "",
  icon,
  type = "text",
  error = false,
}) => {
  return (
    <div className="input__container">
      <i className={`bx ${icon} input__icon`}></i>
      <input
        type={type}
        id={inputId}
        className={`${error ? "input__error" : ""} `}
      />
    </div>
  );
};

// icon = bx-dollar | bxs-user

export default Input;
