import React from "react";
import { Title } from "../components/Title";
import { Text } from "../components/Text";
import iPhone from '../img/iPhone.png'

export const About = () => {
  return (
    <section className="px-[14px] pt-[45px] pb-[45px] forDesktop:px-[102px] forDesktop:pt-[70px] forDesktop:pb-[80px]">
      <Title>Що нового</Title>
      <div className="flex flex-col items-center justify-center gap-y-[40px]">
        <div className="mt-[40px] w-[100%] max-w-[560px]">
          <Text className="mb-[20px] forDesktop:mb-[30px]">
            Усі моделі оснащені однокристальною системою A16 Bionic,
            48-мегапіксельною основною камерою та екранами ProMotion із захистом
            Ceramic Shield і частотним діапазоном 1 - 120 Гц, а також
            прискореною пам'яттю LPDDR5. Дизайн лінійки оновлений, на
            фронтальній панелі смартфонів два вирізи.
          </Text>
          <Text className="mb-[20px] forDesktop:mb-[30px]">
            Усі iPhone 14 у США продаватимуться без лотка для SIM-карт: виробник
            заявляє, що поліпшена технологія eSIM дасть змогу перенести старі
            електронні сім-карти на нові смартфони.
          </Text>
          <Text className="mb-[20px] forDesktop:mb-[30px]">
            Оновлено фронтальну камеру (вона забезпечена автофокусом і швидше
            розпізнає користувача в умовах недостатньої освітленості) і сенсор
            основної камери.
          </Text>
          <Text className="text-[19px] font-bold leading-7">
          iPhone 14 Pro вийшов у новому дизайні - без фірмового "чубчика". Також в асортименті з'явився новий колір. У смартфоні, на відміну від "звичайних" 14-х айфонів, встановлений процесор A16 Bionic, який може за секунду виконувати 4 трлн операцій з фото.
          </Text>
        </div>
        <img src={iPhone} alt="" />
      </div>
    </section>
  );
};
