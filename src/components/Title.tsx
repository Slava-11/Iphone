import c from "classnames";

type TitleProps = {
  children:string,
  className?:string
}

export const Title = ({children, className} : TitleProps) => {
  const combinedClassName = c(
    className,
    "text-center text-[28px] text-mainTextColour uppercase font-bold forDesktop:text-[32px]",
  );
  return (
    <h2 className={combinedClassName}>{children}</h2>
  )
}
