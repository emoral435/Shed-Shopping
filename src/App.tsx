import { Routes, Route, Link } from "react-router-dom"
import Home from "./view/./Home"
import BuyTickets from "./view/BuyTickets"
import Nav from "./components/buttons/Nav/Nav"
import { motion, AnimatePresence } from "framer-motion"
import { useLocation } from "react-router-dom"
import gh from "/src/assets/gh.png"
import Modal from "./components/buttons/CheckoutCart/CheckoutCart"
import { useState } from "react"
import { getTotalTickets } from "./function/cartFN"

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [totalTickets, setTotalTickets] = useState(getTotalTickets())
  const location = useLocation();

  const close = () => setModalOpen(false)
  const open = () => setModalOpen(true)

  const checkoutClick = () => {
    if (modalOpen) close();
    else open()
  }

  const changeTotal = () => {
    setTotalTickets(getTotalTickets())
  }

  return (
    <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}} className="relative overflow-visible font-['Seaweed']">
        <Nav checkout={checkoutClick} total={totalTickets}/>
      <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/tickets/*" element={<BuyTickets changeTotal={changeTotal} checkout={checkoutClick}/>} />
        </Routes>
      </AnimatePresence>
      <div className="w-full h-16 bg-black flex justify-center items-center gap-8 opacity-80"><div className="text-white">curated by emoral435 🌙 </div><motion.button whileHover={{rotate: 360, scale: 1.2}} transition={{duration: 1, delay: .1}}><a href="https://github.com/emoral435" target={"_blank"}><img src={gh} className="w-12 h-12"/></a></motion.button></div>
      <AnimatePresence initial={false} mode="wait">
        {modalOpen && <Modal handleClose={close} changeTotal={changeTotal}/>}
      </AnimatePresence>
    </motion.div>
  )
}
 
export default App
