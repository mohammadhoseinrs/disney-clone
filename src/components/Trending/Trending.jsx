import React from 'react'
import './../Recommend/Recommend.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Trending() {
  const {trending}=useSelector(state=>state.movie)

  return (
    <div className='recommend__container'>
        <h4>Trending</h4>
        <div className="content__container">
        {
              trending && trending.map(({cardImg , title},index)=>(
                <div key={index} className='content__item'>
                <Link to={`/details/${title}`} >
                <img src={cardImg} alt={title} />
                </Link>
            </div>
              ))
            }
        </div>
    </div>
  )
}
