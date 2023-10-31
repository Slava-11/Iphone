import { Title } from '../components/Title';
import { Card } from '../components/Card';
import { iphones } from '../data/data';

export const Directory = () => {
  return (
    <section className='px-[14px] forDesktop:px-[102px] forDesktop:pt-[40px] forDesktop:pt-[150px]'>
        <Title>ВИБЕРИ СВІЙ КОЛІР</Title>
        <div className='flex flex-wrap items-center justify-centre justify-center gap-y-[40px] gap-x-[80px] py-[50px] forDesktop:pb-[150px]'>
            {iphones.map((card) => (
                <Card img={card.img} text={card.text}>{card.model}</Card>
            ))}
        </div>
    </section>
  )
}
