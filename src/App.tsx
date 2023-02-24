import { Routes, Route, Link } from "react-router-dom"
import Home from "./Home"
import BuyTickets from "./BuyTickets"

function App() {

  return (
    <div>
      <li><Link to="/tickets">Buy Tickets</Link></li>
      <li><Link to="/">Homepage</Link></li>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tickets" element={<BuyTickets />} />
      </Routes>
    </div>
  )
}

export default App
