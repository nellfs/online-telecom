import { ButtonHTMLAttributes, ReactNode } from "react";
import "./index.css";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  theme: "default" | "outline" | "red";
}

const Button = (props: IButton) => {
  switch (props.theme) {
    case "outline":
      return <button className="outline__button" {...props}></button>;
      break;
    case "red":
      return <button className="red__button" {...props}></button>;
      break;
    default:
      return <button className="default__button" {...props}></button>;
      break;
  }
};
export default Button;
