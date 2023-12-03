import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from "./componentes/login/Login";
import User from "./componentes/usuarios/User";

export default function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/usuarios" element={<User />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}