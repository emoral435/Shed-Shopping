import { Routes, Route, Link } from "react-router-dom"
import Home from "./view/./Home"
import BuyTickets from "./view/BuyTickets"
import Nav from "./components/buttons/Nav/Nav"
import { motion, AnimatePresence } from "framer-motion"
import { useLocation } from "react-router-dom"

function App() {
  const location = useLocation();

  return (
    <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}} className="relative overflow-visible font-['Seaweed']">
        <Nav />
      <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/tickets" element={<BuyTickets />} />
        </Routes>
      </AnimatePresence>
    </motion.div>
  )
}
 
export default App
