import { Text } from "../components/Text"
import apple from "../img/apple.svg";

export const Footer = () => {
  return (
    <footer className="px-[14px] py-[10px] flex bg-firstBgColour items-center justify-between forDesktop:px-[102px]">
        <Text className="text-[12px] text-mainTextColour">Політика конфіденційності</Text>
        <img src={apple} alt="" />
        <Text className="text-[12px] text-mainTextColour">+38 050-456-56-56</Text>
    </footer>
  )
}
