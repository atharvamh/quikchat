import { Route, Routes } from 'react-router'
import './App.css'
import LoginForm from './components/Form/loginForm/loginForm'
import RegisterForm from './components/Form/registerForm/registerForm'

function App() {
  return (
    <Routes>
      <Route path="/" element={<RegisterForm />} />
      <Route path="/login" element={<LoginForm />} />
    </Routes>
  )
}

export default App
