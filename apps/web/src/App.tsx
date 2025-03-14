import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/index";
import Result from "./pages/Result"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/result/" element={<Result />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
