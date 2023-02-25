import Ticket from "../components/buttons/Tickets/Tickets"
import { motion } from "framer-motion"

const containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: { delay: .1, duration: .1}
    },
    exit: {
        opacity: .5,
    }
}

export default function BuyTickets() {
    return (
        <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="h-[100vh] bg-[#013265]"> 
            <div className="flex flex-col">
                <div className="basis-[8.25rem]"></div>
                <div className="basis-[130vh] z-[1] flex justify-center items-center">
                    <div className="w-[90%] h-[90%]">
                        <h1 className="underline text-5xl text-[#ffcd3e] select-none">SHOP TICKETS</h1>
                        <div className="grid gap-4 grid-auto-fit-xl">
                            <Ticket />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}