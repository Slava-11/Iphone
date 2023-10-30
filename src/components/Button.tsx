import c from "classnames";

type ButtonProps = {
    children:string,
    className?:string
  }

export const Button = ({children, className}: ButtonProps) => {
    const combinedClassName = c(
        "block mx-auto font-bold",
        className
      );
  return (
    <button className={combinedClassName}>{children}</button>
  )
}
