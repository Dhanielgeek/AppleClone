import React from 'react'
import {IoIosArrowForward} from 'react-icons/io'
import iMacDesk from '../assets/hero_imac__dqh65mwjj04m_medium_2x.jpg'
import iMacMobile from '../assets/hero_imac__dqh65mwjj04m_small_2x.jpg'

const OtherHero = () => {
  return (
    <div className='otherHero'>
        <div className="otherSub">
            <div className="otherHeader">
            <h1>iMac</h1>
                <p>Parked with more juice</p>
                <div className="link">
                    <span>Learn more <IoIosArrowForward/> </span>
                    <span>
                        Buy <IoIosArrowForward/>
                    </span>
                </div>
            </div>
            <div className="iMacImg">
                <img src={iMacDesk} alt="" className='num1'/>
                <img src={iMacMobile} alt="" className='num2' />
            </div>
        </div>
    </div>
  )
}

export default OtherHero