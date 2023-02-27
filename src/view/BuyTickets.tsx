import Ticket from "../components/buttons/Tickets/Tickets"
import { motion } from "framer-motion"
import ticketInfo from "../function/ticketInformation"

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

const ticketContainer: any = []

ticketInfo.forEach( node => {
    ticketContainer.push(<Ticket price={node.price} ticketType={node.ticket} imgUrl={node.imgUrl} link={node.link} key={node.link}/>)
})

export default function BuyTickets() {
    return (
        <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="h-full bg-[#013265]"> 
            <div className="flex flex-col">
                <div className="basis-[6rem]"></div>
                <div className="basis-[130vh] z-[1] flex flex-col justify-start items-center gap-12">
                    <h1 className="underline text-5xl text-[#ffcd3e] select-none ml-12">SHOP TICKETS</h1>
                    <div className="w-[80%] h-[80%]">
                        <div className="grid gap-8 grid-auto-fit-xl">
                            {ticketContainer}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}