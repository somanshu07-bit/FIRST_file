import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/THE.png'
import hero_title from '../../assets/hero_title.jpg'
import play from '../../assets/play.png'
import icon from '../../assets/icon.png'
import Titlecards from '../../components/Titlecards/Titlecards'
import footer from '../../assets/footer.png'
const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className='hero'>
        <img src={hero_banner} className='banner-img'/>
        <div className="hero-caption">
            <img src={hero_title} className='caption-img'/>
            <p>Discovering his ties to a secret ancvient order, a young man living in modern Istanbul embarks on a quet to save the city from an immortal enemy</p>
            <div className='hero-btns'>
                <button className='btn'><img src={play} />Play</button>
                <button className='btn dark-btn'><img src={icon} />More info</button>
            </div>
                        <Titlecards/>
        </div>
      </div>
      <div className='more-cards '>
        <Titlecards title={"Blockbuster Movies"}category={"popular"}/>
        <Titlecards title={"Only on Netflix"} category={"top_rated"}/>
        <Titlecards title={"Upcoming"}category={"upcoming"}/>
        <Titlecards title={"Top Picks for You"}category={"now_playing"}/>
      </div>
        <img src={footer}/>
    </div>
  )
}

export default Home
