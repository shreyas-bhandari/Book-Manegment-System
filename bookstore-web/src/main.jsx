import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ViewBook from './pages/ViewBook.jsx'

import { BrowserRouter, Routes, Route } from 'react-router'
import CreateBook from './pages/CreateBook.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/books/:bookId' element={<ViewBook/>}/>
        <Route path='/create-book' element={<CreateBook/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
