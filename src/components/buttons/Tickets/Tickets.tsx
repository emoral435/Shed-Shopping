import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ticketProps {
    imgUrl: string,
    link: string,
    ticketType: string,
    price: number,
}

export default function Ticket(props: ticketProps) {
    return (
        <motion.button transition={{ duration: 1, delay: .2, ease: "easeInOut" }} whileHover={{ scale: 1.1 }} whileTap={{ scale: .9 }} className="box-border m-4 flex flex-col justify-center items-center gap-2 bg-[#b0d3fa] shadow-[10px_10px_0] shadow-[#2b425c] hover:underline hover:shadow-[#2b425c] hover:shadow-[11px_11px_5px]">
            <Link to={props.link} className="box-border">
                <img src={props.imgUrl} alt={props.ticketType} className="h-[150px] w-[150px] sm:h-[300px] sm:w-[300px] object-fill"/>
                <div className="text-3xl">{props.ticketType}</div>
                <div className="text-xl">${props.price}</div>
            </Link>
        </motion.button>    
    )
}
