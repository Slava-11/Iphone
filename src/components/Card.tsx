
type CardProps = {
    img: string,
    children: string,
    text: string,
}

export const Card = ({img, children, text}: CardProps) => {
  return (
    <div>
        <img className="block mx-auto" src={img} alt="no iphone" />
        <h3 className='text-center text-[20px] font-bold leading-7 mt-[20px]'>{children}</h3>
        <p className='text-center text-[14px] font-normal leading-5 mt-[10px]'>{text}</p>
    </div>
  )
}
