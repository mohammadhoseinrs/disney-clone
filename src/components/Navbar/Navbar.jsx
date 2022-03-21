import React, { useEffect } from 'react'
import './Navbar.css'
import { auth , provider } from '../../firebaseConfig'
import { signInWithPopup } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { setSignOutState, setUserLoginDetails } from '../../feature/user/userslice'
import { useNavigate } from 'react-router-dom'


export default function Navbar() {
    const {name,email,photo}=useSelector(state=>state.user)
    const dispatch=useDispatch()
    const Navigate=useNavigate()


    useEffect(()=>{
        auth.onAuthStateChanged(async(user)=>{
            if(user){
                setUser(user)
                Navigate('/home')
            }
        })
    },[name])

    const handleAuth=()=>{
        if(!name){
        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user)
            })
        }else if(name){
            auth.signOut().then(()=>{
                dispatch(setSignOutState())
                Navigate('/')
            })
        }
    }
    const setUser=(user)=>{
        dispatch(
            setUserLoginDetails({
                name:user.displayName,
                email:user.email,
                photo:user.photoURL
            })
        )
    }
  return (
    <div className='navbar__container'>
        <div className='navbar__logo'>
            <img src="./images/logo.svg" alt="" />
        </div>
        {!name ?(
            <div className='navbar__login'>
            <p 
            onClick={handleAuth}
            >LOGIN</p>
            </div>
        ):(
<>
<div className='navbar__item'>
            <div>
                <img src="./images/home-icon.svg" alt="" />
                <a href="">HOME</a>
            </div>
            <div>
                <img src="./images/search-icon.svg" alt="" />
                <a href="">SEARCH</a>
            </div>
            <div>
                <img src="./images/watchlist-icon.svg" alt="" />
                <a href="">WATCHLIST</a>
            </div>
            <div>
                <img src="./images/original-icon.svg" alt="" />
                <a href="">ORIGINALS</a>
            </div>
            <div>
                <img src="./images/movie-icon.svg" alt="" />
                <a href="">MOVIES</a>
            </div>
            <div>
                <img src="./images/series-icon.svg" alt="" />
                <a href="">SERIES</a>
            </div>
        </div>
        <div className='navbar__profile'>
            <div className='navbar__img'>
                <img src={photo} alt="" />
             </div>
             <div className="navbar__dropdown">
                 <span onClick={handleAuth}>Sign Out</span>
             </div>
        </div>
</>
        )}
       
        
        
    </div>
  )
}
