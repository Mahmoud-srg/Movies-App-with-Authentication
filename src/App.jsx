
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home';
import ProtectedRoute from './Components/ProtectedRuote/ProtectedRoute';
import People from './Components/People/People';
import Movie from './Components/Movie/Movie';
import Tv from './Components/Tv/Tv';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Profile from './Components/Profile/Profile';
import { useContext, useEffect } from 'react';
import { AuthContext } from './Context/AuthContext';
import { Offline } from "react-detect-offline";
import ItemDetail from './Components/ItemDetails/ItemDetail';
import NotFound from './Components/NotFound/NotFound';

function App() {
  let {savaUserData} = useContext(AuthContext)

  useEffect(() => {
    if(localStorage.getItem('userData')) {
      savaUserData()
    }
  }, [])
  

  // console.log(userData);

  let router = createBrowserRouter([
    {path:'/', element:<Layout/>, children:[
      {index:true, element: <ProtectedRoute> <Home/> </ProtectedRoute>  },
      {path:'people', element: <ProtectedRoute> <People/> </ProtectedRoute>  },
      {path:'movie', element: <ProtectedRoute> <Movie/> </ProtectedRoute>  },
      {path:'tv', element: <ProtectedRoute> <Tv/> </ProtectedRoute>  },
      {path:'itemdetails/:id/:media_type', element: <ProtectedRoute> <ItemDetail/> </ProtectedRoute>  },
      {path:'login', element:  <Login/> },
      {path:'register', element:  <Register/> },
      {path:'profile', element: <ProtectedRoute> <Profile/> </ProtectedRoute>  },
      {path:'*', element:  <NotFound/> },
    ]}
  ])

  return <>
  <div>
    <Offline><div className='bg-danger text-white p-4 rounded-2 offline' >You are offline, please check the internet connection.</div></Offline>
  </div>
  <RouterProvider router={router}/>
  </> 
  
}

export default App
