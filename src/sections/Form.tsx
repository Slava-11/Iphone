import { Title } from '../components/Title';
import {Text} from '../components/Text'
import bigIphone from '../img/bigIphone.png'
import { Button } from '../components/Button';
//может подправить input

export const Form = () => {
  return (
    <section className='flex flex-col forDesktop:flex-row forDesktop:flex-wrap forDesktop:justify-center'>
        <form className='w-[100%] max-w-[600px] bg-thirdBgColour px-[14px] py-[50px] forDesktop:px-[92px] forDesktop:py-[137px]' action="">
            <Title className='text-white'>ХОЧЕШ IPHONE 14 PRO?</Title>
            <input className='text-secondTextColour block w-[100%] max-w-[400px] bg-thirdBgColour mt-[40px] border-solid border-b-[1px] border-secondTextColour pb-[10px] forDesktop:mt-[72px]' placeholder="Ваше ім'я" type="text" />
            <input className='text-secondTextColour block w-[100%] max-w-[400px] bg-thirdBgColour mt-[20px] border-solid border-b-[1px] border-secondTextColour pb-[10px] forDesktop:mt-[30px]' placeholder="Номер телефону" type="text" />
            <Text className='text-center text-secondTextColour mt-[30px]'>Найближчим часом наш менеджер зв'яжеться з Вами</Text>
            <Button className='text-mainColour text-[24px] px-[50px] py-[10px] rounded-[20px] bg-white mt-[30px] forDesktop:px-[70px] forDesktop:py-[14px]'>Замовити</Button>
        </form>
        <img className='w-[100%] max-w-[600px]' src={bigIphone} alt="no bigIphone" />
    </section>
  )
}
