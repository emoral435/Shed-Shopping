import { motion } from "framer-motion"
import ticket from "/src/assets/ticketImg.svg"
import { Link } from "react-router-dom"

export default function HomePage() {
    return (
        <div className="absolute bottom-12 left-12 w-[60%]">
            <div className="flex flex-col gap-4">
                <h1 className="text-7xl text-[#ffcd3e] font-bold">Look nature in the eye</h1>
                <h1 className="text-4xl text-white font-bold">Discover the wonder of the aquatic animal world. Advance timed ticket purchase is required.</h1>
                <Link to="/tickets">
                    <motion.button className="bg-[#ffcd3e] text-[#013265] w-[30%] py-2 rounded-sm font-extrabold flex justify-center gap-2"><img src={ticket} alt="ticket" className="w-6 h-6 rotate-[300deg]" /><div>BUY TICKETS</div></motion.button>
                </Link>
            </div>
        </div>
    )
}