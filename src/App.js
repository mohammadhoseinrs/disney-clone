import { useEffect, useState } from 'react';
import { useRoutes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import routes from './routes';
import data from './data';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies } from './feature/movie/movieSlice';

function App() {
  const {name}=useSelector(state=>state.user)
  
  const [movieData,setMovieData]=useState(data)
  const recommend=[]
  const newDisney=[]
  const original=[]
  const trending=[]

  movieData.map(movie=>{
    switch(movie.type){
      case 'recommend':
        return recommend.push(movie)
      case 'new':
        return newDisney.push(movie)  
      case 'original':
        return original.push(movie)
      case 'trending':
        return trending.push(movie)
    }
  })
  const dispatch=useDispatch()
useEffect(()=>{
  dispatch(setMovies({
    recommend,
    newDisney,
    original,
    trending
  }))
},[name])
  

  const router=useRoutes(routes)
  return (
    <>
    <Navbar />
    {router}
    </>
  );
}

export default App;
