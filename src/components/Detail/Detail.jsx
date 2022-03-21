import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Detail.css'
import data from '../../data'

export default function Detail() {
    const {title}=useParams()
    const [detailData,setDetailData]=useState({})
    useEffect(()=>{
        data.map(da=>{
            if(da.title==title){
                setDetailData(da)
                
            }
        })
    },[title])
    console.log(detailData);
  return (
    <div className='detail__container'>
        <div className="detail__background">
            <img alt={detailData.title} src={detailData.backgroundImg}  />
        </div>
        <div className="detail__imgtitle">
            <img alt={detailData.title} src={detailData.titleImg}/>
        </div>
        <div className="detail__content">
            <div className="detail__control">
                <div className="detail__player">
                    <img src="/images/play-icon-black.png"  alt="" />
                    <span>Play</span>
                </div>
                <div className="detail__trailer">
                   <img src="/images/play-icon-white.png" alt="" />
                   <span>Trailer</span>
                </div>
                <div className="detail__addlist">
                    <span className='detail__addlist1'></span>
                    <span className='detail__addlist2'></span>
                </div>
                <div className="detail__groupwatch">
                    <div>
                        <img src="/images/group-icon.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="detail__subtitle">{detailData.subTitle}</div>
            <div className="detail__description">{detailData.description}</div>
        </div>
    </div>
  )
}
