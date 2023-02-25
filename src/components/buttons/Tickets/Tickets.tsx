import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ticketProps {
    imgUrl: string,
    link: string,
    ticketType: string,
    price: string,
}

export default function Ticket(props: ticketProps) {
    return (
        <Link to={props.link} className="box-border">
            <motion.button transition={{ duration: 1, delay: .2, ease: "easeInOut" }} whileHover={{ scale: 1.1 }} whileTap={{ scale: .9 }} className="box-border flex flex-col items-center gap-2 bg-[#b0d3fa] shadow-[10px_10px_0] shadow-[#2b425c] hover:underline hover:shadow-[#2b425c] hover:shadow-[11px_11px_5px]">
                <img src={props.imgUrl} alt={props.ticketType} className="h-[150px] w-[150px] sm:h-[200px] sm:w-[200px]"/>
                <div className="text-3xl">{props.ticketType}</div>
                <div className="text-xl">{props.price}</div>
            </motion.button>    
        </Link>
    )
}
