import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from './../feature/user/userslice'
import movieReducer from './../feature/movie/movieSlice'

const store=configureStore({
    reducer:{
        user:userReducer,
        movie:movieReducer
    },
    middleware:getDefaultMiddleware({
        serializableCheck:false
    })

})

export default store