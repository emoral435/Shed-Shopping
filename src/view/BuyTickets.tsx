import Ticket from "../components/buttons/Tickets/Tickets"
import { motion } from "framer-motion"
import { Route, Routes } from "react-router"
import { AnimatePresence } from "framer-motion"
import ShowTickets from "../components/buttons/ShowTickets/ShowTickets"
import CheckTicket from "./CheckTicket"

const containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: { delay: .1, duration: .3}
    },
}



export default function BuyTickets() {
    return (
        <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="h-full bg-[#013265]"> 
            <div className="flex flex-col">
                <div className="basis-[6rem]"></div>
                <div className="basis-[100%] z-[1] flex flex-col justify-start items-center gap-12">
                    <h1 className="underline text-5xl text-[#ffcd3e] select-none ml-12">SHOP TICKETS</h1>
                    <AnimatePresence>
                        <Routes>
                            <Route path="/" element={<ShowTickets/>} />
                            <Route path="/adult" element={<CheckTicket id={0} />} />
                            <Route path="/baby" element={<CheckTicket id={1} />} />
                            <Route path="/child" element={<CheckTicket id={2} />} />
                            <Route path="/crab" element={<CheckTicket id={3} />} />
                            <Route path="/dolphin" element={<CheckTicket id={4} />} />
                            <Route path="/fish" element={<CheckTicket id={5} />} />
                            <Route path="/frogs" element={<CheckTicket id={6} />} />
                            <Route path="/jellyfish" element={<CheckTicket id={7} />} />
                            <Route path="/penguin" element={<CheckTicket id={8} />} />
                            <Route path="/polarbear" element={<CheckTicket id={9} />} />
                            <Route path="/shark" element={<CheckTicket id={10} />} />
                            <Route path="/turtle" element={<CheckTicket id={11} />} />
                        </Routes>
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    )
}