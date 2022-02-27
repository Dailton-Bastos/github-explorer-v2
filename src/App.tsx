import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Dashboard } from './pages/Dashboard'
import { Repository } from './pages/Repository'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/repository" element={<Repository />} />
      </Routes>
    </BrowserRouter>
  )
}
