import React, {useState} from 'react'
import Buccers from '../assets/buccuners.jpg'
import Killers from '../assets/killers.jpg'
import Invasion from '../assets/invasion.jpg'
import Lesson from '../assets/lesson.jpg'
import Morningshow from '../assets/morningshow.jpg'
import Finernails from '../assets/finernails.jpg'
import CharlieBrown from '../assets/charliebrown.jpg'
import Forall from '../assets/ForAll.jpg'
import Foudation from '../assets/foundation.jpg'
import Tedlasso from '../assets/Tedlasso.jpg'
import BuccersMobile from '../assets/buccermobile.jpg'
import KillersMobile from '../assets/killersmobile.jpg'
import InvasionMobile from '../assets/invasionmobile.jpg'
import LessonMobile from '../assets/lessonmobile.jpg'
import MorningshowMobile from '../assets/morningmobile.jpg'
import FinernailsMobile from '../assets/fingernailsmobile.jpg'
import CharliebrownMobile from '../assets/charliebrownmobile.jpg'
import ForallMobile from '../assets/ForallMobile.jpg'
import FoundationMobile from '../assets/foundationmobile.jpg'
import TedlassoMobile from '../assets/tedlassomobile.jpg'
import {AiFillPlayCircle} from 'react-icons/ai'

const MovieContainer = () => {

    const [Num, setNum] = useState(0)
    const [Movieimgaes, setMovieimgaes] = useState([
        Buccers,Killers,Invasion,Lesson,Morningshow,
        Finernails,CharlieBrown,Forall,Foudation,Tedlasso
    ])
    const [MobileImage, setMobileImage] = useState([
        BuccersMobile,KillersMobile,InvasionMobile,LessonMobile,MorningshowMobile,
        FinernailsMobile,CharliebrownMobile,ForallMobile,FoundationMobile,TedlassoMobile,
    ])
    const HandleNext = ()=>{
        setNum(Num + 1)
    }
    const HandlePrev = ()=>{
        if(Num <= 0){
            setNum(0)
        }else{
            setNum(Num - 1)
        }
    }

 const InfoData = [
    {
        H3: "Drama",
        text: "Lock up your lords.",
        Button: "Stream now"
    },
    {
        H3: "Crime",
        text: "In thereaters now",
        Button : "Preview now"
    },
    {
        H3: "Romance",
        text: "Lock up your lords",
        Button: "Stream now"
    },
    {
        H3: "Drama",
        text: "Lock up your lords",
        Button: "Stream now"
    },
    {
        H3: "Drama",
        text: "Lock up your lords",
        Button: "Stream now"
    },
    {
        H3: "Drama",
        text: "Lock up your lords",
        Button: "Stream now"
    },
    {
        H3: "Holiday",
        text: "Happiness is togetherness.",
        Button: "Stream now"
    },
    {
        H3: "Drama",
        text: "Lock up your lords",
        Button: "Stream now"
    },
    {
        H3: "Sci-fi",
        text: "All empires fall.",
        Button: "Stream now"
    },
    {
        H3: "Comdey",
        text: "21 Emmy Nominations including Best Comedy.",
        Button: "Stream now"
    }
 ]



  return (
    <div className='MovieCon'>
      <div className="Wrap">
      <div className="MoviePrev" style={{ backgroundImage: `url(${Movieimgaes[Num % Movieimgaes.length]})` }} ></div>
        <div className="MovieCard" >
            <img src={Movieimgaes[Num % Movieimgaes.length]} alt=""  className='desktop'/>
            <img src={MobileImage[Num % MobileImage.length]} alt=""  className='mobile' />
            <div className="info">
            <button>Stream now <AiFillPlayCircle/>
                    </button>
                  <div className="holdinfo">
                    <h3>Drama.</h3>
                  <p>
                    Lock up your lords.
                    </p>
                  </div>
                   
            </div>
        </div>
        <div className="MovieNxt"style={{ backgroundImage: `url(${Movieimgaes[Num % Movieimgaes.length]})` }}  ></div>
      </div>
        <div className="AllBtn">
          <div className="HoldSpan">
            <span onClick={HandlePrev}></span>
            <span onClick={HandleNext}></span>
            <span onClick={HandleNext}></span>
            <span onClick={HandleNext}></span>
            <span onClick={HandleNext}></span>
            <span onClick={HandleNext}></span>
            <span onClick={HandleNext}></span>
            <span onClick={HandleNext}></span>
            <span onClick={HandleNext}></span>
            <span onClick={HandlePrev}></span>
          </div>
        </div>
    </div>
  )
}

export default MovieContainer