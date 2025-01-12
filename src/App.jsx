import './App.css'
import Layout from './components/Layout/Layout'
import AddProduct from './components/AllPages/Ecommerce/AddProduct'
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}> 
            <Route path='/add-product' element={<AddProduct/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
