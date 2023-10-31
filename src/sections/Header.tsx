import apple from "../img/apple.svg";

//решить с сылкой а

export const Header = () => {
  return (
    <section className="px-[14px] py-[10px] flex gap-x-[10px] items-center bg-firstBgColour forDesktop:px-[102px] forDesktop:flex forDesktop:justify-between forDesktop:py-[20px] forDesktopHD:py-[32px] fullHD:px-[360px]">
      <nav className="hidden forDesktop:flex forDesktop:gap-x-[10px] forDesktopHD:gap-x-[30px]">
        <a
          className="text-mainTextColour text-[20px] font-normal forDesktopHD:text-[24px]"
          href="#"
        >
          Що нового
        </a>
        <a
          className="text-mainTextColour text-[20px] font-normal forDesktopHD:text-[24px]"
          href="#"
        >
          Колір
        </a>
        <a
          className="text-mainTextColour text-[20px] font-normal forDesktopHD:text-[24px]"
          href="#"
        >
          Замовити
        </a>
      </nav>
      <img src={apple} alt="no apple" />
      <p className="text-[16px] text-mainTextColour font-normal forDesktop:text-[20px] forDesktopHD:text-[24px]">
        +38 050-456-56-56
      </p>
      <div className="ml-auto text-white forDesktop:hidden">burger</div>
    </section>
  );
};
