import { useState } from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home'
import Clider from './components/Clider'
import Navbar from './components/Navbar'



const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='neet/'></Route>
      <Route path='programs/'></Route>
      <Route path='scholarships/'></Route>
      <Route path=''></Route>
    </Route>
  )
)

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
