import { Text } from "../components/Text"
import apple from "../img/apple.svg";

export const Footer = () => {
  return (
    <footer className="px-[14px] py-[10px] flex bg-firstBgColour items-center justify-between forDesktop:px-[102px] forDesktopHD:py-[40px] fullHD:px-[360px]">
        <Text className="text-[12px] text-mainTextColour forDesktop:text-[14px]">Політика конфіденційності</Text>
        <img src={apple} alt="no logo" />
        <Text className="text-[12px] text-mainTextColour forDesktop:text-[20px]">+38 050-456-56-56</Text>
    </footer>
  )
}
