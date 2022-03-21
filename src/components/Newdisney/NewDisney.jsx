import React from 'react'
import './../Recommend/Recommend.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function NewDisney() {
  const {newDisney}=useSelector(state=>state.movie)
  return (
    <div className='recommend__container'>
        <h4>New To Disney +</h4>
        <div className="content__container">
        {
              newDisney && newDisney.map(({cardImg , title},index)=>(
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
