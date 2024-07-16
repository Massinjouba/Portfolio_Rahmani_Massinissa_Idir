import React from 'react'
import ReactDOM from 'react-dom/client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from './App.jsx'
import Contact from './pages/Contact/Contact.jsx'
import FeedBacks from './pages/FeedBacks/FeedBacks.jsx'
import Projet1 from './pages/Projects/Projet1/Projet1.jsx';
import Projet2 from './pages/Projects/Projet2/Projet2.jsx';
import Projet3 from './pages/Projects/Projet3/Projet3.jsx';
import './index.css'

import {createBrowserRouter,RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "contact",
    element: <Contact/>,
  },
  {
    path: "rate",
    element: <FeedBacks/>,
  },
  {
    path: "projet1",
    element: <Projet1/>
  },
  {
    path: "projet2",
    element: <Projet2/>
  },
  {
    path: "projet3",
    element: <Projet3/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
