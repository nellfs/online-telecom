import { ButtonHTMLAttributes } from "react";
import "./index.css";
import UserIcon from "../../assets/utils/user_icon.png";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}
const Button = (props: IButton) => {
  return (
    <button className="default__button" {...props}>
      <img src={UserIcon}></img>
      Minha Online
    </button>
  );
};
export default Button;
