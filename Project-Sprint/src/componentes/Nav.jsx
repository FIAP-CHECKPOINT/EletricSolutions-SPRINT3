
import {} from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  

  return (
    <>
    <div className='container'>
      <div className='nav'>
        <Link to='home'><h3>Home</h3></Link>
        <Link to='material'><h3>Materiais</h3></Link>
        <Link to='quem somos'><h3>Quem Somos</h3></Link>
        <Link to='solucao'><h3>Soluções</h3></Link>
      </div>
    </div>
    </>
  )
}

export default Nav