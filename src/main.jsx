import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import Directory from './pages/Directory'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Directory />} />
        <Route path="Projects" element={<Projects />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
