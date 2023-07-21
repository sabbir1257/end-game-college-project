
import { Outlet } from 'react-router-dom'
import './App.css'
import Home from './component/Home'
import Navbar from './component/Navbar'

function App() {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default App
