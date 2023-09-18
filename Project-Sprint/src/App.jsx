import {} from 'react'
import Nav from './componentes/Nav'
import Footer from './componentes/Footer'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  

  return (
    <>
    <header id='header'>
      <h1>Eletric Solutions</h1>
    </header>

    <Nav/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
