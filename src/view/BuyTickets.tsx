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

interface Props {
    checkout: any,
    changeTotal: any
}


export default function BuyTickets({ checkout, changeTotal } :Props) {
    return (
        <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="h-full bg-[#d3d3d3]"> 
            <div className="flex flex-col">
                <div className="basis-[6rem]"></div>
                <div className="basis-[100%] flex flex-col justify-start items-center gap-12">
                    <h1 className="underline text-5xl text-[#013265] select-none ml-12">SHOP TICKETS</h1>
                    <AnimatePresence>
                        <Routes>
                            <Route path="/" element={<ShowTickets/>} />
                            <Route path="/adult" element={<CheckTicket checkout={checkout} changeTotal={changeTotal} id={0} />} />
                            <Route path="/baby" element={<CheckTicket checkout={checkout} changeTotal={changeTotal} id={1} />} />
                            <Route path="/child" element={<CheckTicket checkout={checkout} changeTotal={changeTotal} id={2} />} />
                            <Route path="/crab" element={<CheckTicket checkout={checkout} changeTotal={changeTotal} id={3} />} />
                            <Route path="/dolphin" element={<CheckTicket checkout={checkout} changeTotal={changeTotal} id={4} />} />
                            <Route path="/fish" element={<CheckTicket checkout={checkout} changeTotal={changeTotal} id={5} />} />
                            <Route path="/frogs" element={<CheckTicket checkout={checkout} changeTotal={changeTotal} id={6} />} />
                            <Route path="/jellyfish" element={<CheckTicket checkout={checkout} changeTotal={changeTotal} id={7} />} />
                            <Route path="/penguin" element={<CheckTicket checkout={checkout} changeTotal={changeTotal} id={8} />} />
                            <Route path="/polarbear" element={<CheckTicket checkout={checkout} changeTotal={changeTotal} id={9} />} />
                            <Route path="/shark" element={<CheckTicket checkout={checkout} changeTotal={changeTotal} id={10} />} />
                            <Route path="/turtle" element={<CheckTicket checkout={checkout} changeTotal={changeTotal} id={11} />} />
                        </Routes>
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    )
}