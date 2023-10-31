import React from 'react'
import { Title } from '../components/Title';
import iphones from '../img/iphones.png'
import { Button } from '../components/Button';

export const Product = () => {
  return (
    <section className='px-[14px] bg-secondBgColour pt-[40px] pb-[30px] forDesktop:pt-[60px] forDesktop:pb-[40px] forDesktopHD:pt-[70px]'>
    <Title className='text-[32px] text-mainColour mb-[20px] forDesktop:text-[44px] forDesktop:mb-[30px] forDesktopHD:text-[64px] forDesktopHD:mb-[40px]'>IPHONE 14 PRO</Title>
    <img className='w-[100%] max-w-[400px] block mx-auto forDesktop:max-w-[600px]' src={iphones} alt="no iphones" />
    <Button className='text-white bg-mainColour text-[24px] px-[50px] py-[10px] rounded-[20px] mt-[15px] forDesktop:px-[70px] forDesktop:py-[14px] forDesktop:mt-[25px]'>Обрати</Button>
    </section>
  )
}
