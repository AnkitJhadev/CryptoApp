import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Routes,Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from './pages/Home'
import CoinPage from './pages/CoinPage'
function App() {
  

  return (
    <BrowserRouter>
     <div>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/coin/:id' element={<CoinPage/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
