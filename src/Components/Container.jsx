import React from 'react'
import {IoIosArrowForward} from 'react-icons/io'
import CardLo from '../assets/logo__dcojfwkzna2q_small_2x.png'
import TradeLo from '../assets/logo_tradein__d1fpktgipvki_small_2x.png'
import Watchlo from '../assets/promo_logo_apple_watch_series_9__ckz0hbex0yeu_small_2x.png'
import camerarimg from '../assets/promo_iphone15_announce__fmxxi8r9fkuy_small_2x.jpg'
import presents from '../assets/holiday_2023_promo__dirvdl6a3r2a_small_2x.jpg'
import Dblwatch from '../assets/promo_apple_watch_series_9_order__b3u85rm9zf6u_small_2x.jpg'
import Airpods from '../assets/promo_airpods_pro_order__d8xv36p4uwae_small_2x.jpg'
import carddeb from '../assets/tile__cauwwcyyn9hy_small_2x.jpg'
import swap from '../assets/promo_iphone_tradein__bugw15ka691e_small_2x.jpg'

const Container = () => {

const Cardata = [
    {
        img2: camerarimg,
        H1 : "iPhone 15",
        p: "New camera. New design. Newphoria.",
        span1: "Learn more",
        span2: "Buy"
    },
    {
        img2: presents,
        H1 : "Wonder Awaits",
        p: "Give the gifts they've been looking forward to all year.",
       span1: "Shop",
       none : "none"
    },
    {
        img1: Watchlo,
        p: "Smarter. Brighter. Mighter.",
        span1:"Learn more",
        span2: "Buy",
        img2 : Dblwatch,
        color: "white",
        bg : "black"
    },
    {
        img2: Airpods,
        H1 : "AirPods Pro",
        p: "Adaptive Audio. Now playing.",
        span1:"Learn more",
        span2: "Buy",
        color: "white",
        bg : "black"
    },
    {
        img1: CardLo,
        p: "Get up to 3% Daily Cash back with every purchase.",
        span1:"Learn more",
        span2: "Apply now",
        img2: carddeb
    },
    {
        img1: TradeLo,
        p: "Get up to $200-$650 in Credit when you trade in iPhone 11 or higher.",
        span1:"See what your device is worth",
        img2: swap,
        none: "none"
    }
]












  return (
    <div className='Container'>
       {
        Cardata.map((props)=>(
            <div className="Card" style={{background: props.bg}}>
            <div className="CardCon">
                <h1 style={{color:props.color}}>
                    {props.H1}
                </h1>
                <img src={props.img1} alt="" />
                <p style={{color:props.color}}>
                    {props.p}
                </p>
            <div className="link">
                    <span> {props.span1} <IoIosArrowForward/> </span>
                    <span>
                      {props.span2}   <IoIosArrowForward style={{display:props.none}}/>
                    </span>
                </div>
            </div>
            <div className="CardImg">
                <img src={props.img2} alt="" />
            </div>
        </div>
        ))
       }
    </div>
  )
}

export default Container