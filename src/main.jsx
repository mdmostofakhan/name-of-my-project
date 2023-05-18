import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/about/About.jsx';
import Home from './components/home/Home.jsx';
import Contact from './components/contact/Contact.jsx';
import First from './components/First/First.jsx';
import Friends from './components/friends/Friends.jsx';
import FriendDetail from './components/friendDetail/FriendDetail.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <First></First>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'friends',
        element: <Friends></Friends>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users")
      },
      {
        path: 'friend/:friends',
        element: <FriendDetail></FriendDetail>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      }
    ]
  },
 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
