
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Shard/Navbar'
import Footer from './Shard/Footer'

function App() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
