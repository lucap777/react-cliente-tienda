import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import VerFabricantes from './components/VerFabricantes'
//import FabricanteTable from './components/FabricanteTable'

const App = () => {
  return (
    <div className='container'>
      <h1 className='text-center'>Cosumir Api-Tienda  Spring Boot y React</h1>
      <h3 className='text-center py-3'>Muestra Listado de Fabricantes</h3>
      
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VerFabricantes />} />
        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App
