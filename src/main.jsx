import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import List from './pages/List'
import './index.css'
import Header from './components/Header'
import Create from './pages/Create'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/list' element={<List />}></Route>
        <Route path='/create' element={<Create />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
