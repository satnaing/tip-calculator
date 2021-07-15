import { FC } from "react";
import "./Input.scss";

type Props = {
  inputId?: string;
  icon: string;
  type?: string;
  error?: boolean;
  extraClass?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  value?: number | string;
  dataTestId?: string;
};

const Input: FC<Props> = ({
  inputId = "",
  icon,
  type = "number",
  error = false,
  extraClass = "",
  onChange,
  value,
  dataTestId,
}) => {
  return (
    <div className={`input__container ${extraClass}`}>
      <i className={`bx ${icon} input__icon`}></i>
      <input
        data-testid={dataTestId}
        type={type}
        id={inputId}
        className={`${error ? "input__error" : ""}`}
        onChange={onChange}
        value={value}
        min="0"
        step="any"
      />
    </div>
  );
};

// icon = bx-dollar | bxs-user

export default Input;
