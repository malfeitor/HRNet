import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreateEmployee from './pages/CreateEmployee'
import EmployeeList from './pages/EmployeeList'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import './main.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router basename="/HRNet">
      <Header />
      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/employee-list" element={<EmployeeList />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
