import c from "classnames";

type ButtonProps = {
    children:string,
    className?:string
  }

export const Text = ({children, className}: ButtonProps) => {
    const combinedClassName = c(
        "text-[14px] font-normal text-firstBgColour leading-5",
        className
      );
  return (
    <p className={combinedClassName}>{children}</p>
  )
}
