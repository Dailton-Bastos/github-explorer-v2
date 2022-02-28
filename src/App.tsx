import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Logo } from './components/Logo'
import { Dashboard } from './pages/Dashboard'
import { Repository } from './pages/Repository'
import GlobalStyles from './styles/global'

export const App = () => {
  return (
    <BrowserRouter>
      <Logo />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/repository" element={<Repository />} />
      </Routes>

      <GlobalStyles />
    </BrowserRouter>
  )
}
