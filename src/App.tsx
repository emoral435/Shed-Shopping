import { Routes, Route, Link } from "react-router-dom"
import Home from "./view/./Home"
import BuyTickets from "./view/BuyTickets"
import Nav from "./components/buttons/Nav/Nav"
import { motion } from "framer-motion"

function App() {

  return (
    <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}}>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tickets" element={<BuyTickets />} />
      </Routes>
    </motion.div>
  )
}

export default App
