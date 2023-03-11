import React from 'react'
import { stats } from '../constants';
import styles from '../style';
const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat) => (
      <div key={stat.id} className={`flec-1 flex justify-start items-center flex-row m-3`}>
        <h4 className='font-poppins font-semibold xs:text-[30px] xs:leading-[53px] leading-[43px] text-white'>{stat.value}</h4>
        <p className='font-poppins font-normal xs:text-[20px] xs:leading-[15px] leading-[ 21px] text-gradient uppercase ml-2'>{stat.title}</p>

      </div>
    ))}
  </section>
)


export default Stats