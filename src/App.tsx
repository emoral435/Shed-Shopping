import { Routes, Route, Link } from "react-router-dom"
import Home from "./view/./Home"
import BuyTickets from "./view/BuyTickets"
import Nav from "./components/buttons/Nav/Nav"

function App() {

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tickets" element={<BuyTickets />} />
      </Routes>
    </div>
  )
}

export default App
