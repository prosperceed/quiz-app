import { useState } from 'react'
import Navbar from './components/header/Navbar'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home';

function App() {

  return (
    <div>
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App
