import React from 'react'
import ImgSlider from '../../components/ImgSlider/ImgSlider'
import NewDisney from '../../components/Newdisney/NewDisney'
import Originals from '../../components/Originals/Originals'
import Recommend from '../../components/Recommend/Recommend'
import Trending from '../../components/Trending/Trending'
import Viewers from '../../components/Viewers/Viewers'
import './Home.css'

export default function Home() {
  return (
    <div className='home__container'>
    <ImgSlider />
    <Viewers />
    <Recommend/>
    <NewDisney />
    <Originals />
    <Trending />
    </div>
  )
}
