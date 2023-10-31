import c from "classnames";

type ButtonProps = {
    children:string,
    className?:string,
    onClick?: () => void;
  }

export const Button = ({children, className, onClick}: ButtonProps) => {
    const combinedClassName = c(
        "block mx-auto font-bold",
        className
      );
  return (
    <button onClick={onClick} className={combinedClassName}>{children}</button>
  )
}
