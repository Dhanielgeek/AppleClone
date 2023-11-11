import React from 'react'
import {IoIosArrowForward} from 'react-icons/io'
import MacBook from '../assets/hero_mbp__fx6ku12vgw2m_medium_2x.jpg'
import MoblieMac from '../assets/hero_mbp__fx6ku12vgw2m_small_2x (1).jpg'

const Hero = () => {
  return (
    <div className='FirstHero'>
        <div className="FirstSub">
            <div className="TopHeader">
                <h1>MacBook Pro</h1>
                <p>Mind-blowing. Head-turning.</p>
                <div className="link">
                    <span>Learn more <IoIosArrowForward/> </span>
                    <span>
                        Buy <IoIosArrowForward/>
                    </span>
                </div>
            </div>
            <div className="MacImg">
                <img src={MacBook} alt="" className='num1' />
                <img src={MoblieMac} alt="" className='num2' />
            </div>
        </div>
    </div>
  )
}

export default Hero