import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './componentes/Home.jsx';
import Material from './componentes/Material.jsx';
import QuemSomos from './componentes/QuemSomos.jsx';
import Solucao from './componentes/Solucao.jsx';
import Erro from './componentes/Erro.jsx';


const router = createBrowserRouter([
  {
    /**Pai */
    path: '/',  element: <App/>,
    errorElement: <Erro/>,

    /**FIlho */
    children:[
      {path: '/', element: <Home/>},
      {path: '/home', element: <Home/>},
      {path: '/material', element: <Material/>},
      {path: '/quem somos', element: <QuemSomos/>},
      {path: '/solucao', element: <Solucao/>},
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)