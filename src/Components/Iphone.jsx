import React from 'react'
import {IoIosArrowForward} from 'react-icons/io'
import Iphonedesk from '../assets/hero_iphone15pro__i70z9oz3hj2i_large.jpg'
import iphonemobile from '../assets/hero_iphone15pro__i70z9oz3hj2i_small_2x.jpg'

const Iphone = () => {
  return (
    <div className='IphoneContainer'>
       <div className="otherSub">
            <div className="otherHeader">
            <h1>iPhone 15 Pro</h1>
                <p>Titanium.So strong.So light.So Pro</p>
                <div className="link">
                    <span>Learn more <IoIosArrowForward/> </span>
                    <span>
                        Buy <IoIosArrowForward/>
                    </span>
                </div>
            </div>
            <div className="iMacImg">
                <img src={Iphonedesk} alt="" className='num1'/>
                <img src={iphonemobile} alt="" className='num2' />
            </div>
        </div>
    </div>
  )
}

export default Iphone