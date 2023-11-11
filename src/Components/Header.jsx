import React,{useState} from 'react'
import './Style.css'
import {FaApple} from 'react-icons/fa'
import {GoSearch} from 'react-icons/go'
import {BsBag} from 'react-icons/bs'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {MdClear} from 'react-icons/md'


const Header = () => {

  const [Toggle, setToggle] = useState(false)

const HandleToggle = ()=>{
  setToggle(!Toggle)
}

console.log(Toggle)





  return (
    <div className='Header'>
        <div className="SubHeader">
          <div className='AppleLogo'>
              <FaApple/>
          </div>
            <nav>Store</nav>
            <nav>Mac</nav>
            <nav>iPad</nav>
            <nav>iPhone</nav>
            <nav>Watch</nav>
            <nav>Vision</nav>
            <nav>Airpods</nav>
            <nav>TV & Home</nav>
            <nav>Entertainment</nav>
            <nav>Accessories</nav>
            <nav>Support</nav>
           <div className='Conlogo'>
           <GoSearch/>
            <BsBag/>
            </div>
            </div>

          {
            Toggle === false ? <HiOutlineMenuAlt4 onClick={HandleToggle} style={{color:"lightgray"}} className='menu' /> : <MdClear onClick={HandleToggle} style={{color:"lightgray"}} className='menu' />
          }

            {
              Toggle ? (<div className='NavHold'>
              <nav>Store</nav>
              <nav>Mac</nav>
              <nav>iPad</nav>
              <nav>iPhone</nav>
              <nav>Watch</nav>
              <nav>Vision</nav>
              <nav>Airpods</nav>
              <nav>TV & Home</nav>
              <nav>Entertainment</nav>
              <nav>Accessories</nav>
              <nav>Support</nav>
              </div>) : null
            }

</div>
      
  
  )
}


export default Header



