import Login from "./pages/Login/Login";
import Home from './pages/Home/Home'
import Detail from "./components/Detail/Detail";

let routes=[
    {path:'/',element:<Login />},
    {path:'/home',element:<Home />},
    {path:'/details/:title',element:<Detail />}
]

export default routes