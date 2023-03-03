import { motion } from "framer-motion"
import { useState } from "react"
import ticketInfo from "../../../function/ticketInformation"

interface Props {
    imgUrl: string,
    index: number,
    price: number,
    total: number,
    type: string,
    changeTotal: any,
    check: any,
    updatePrice: any
}

export default function CheckoutItem({imgUrl, index, price, total, type, changeTotal, check, updatePrice}: Props) {
    const [totalTickets, setTotal] = useState(total)

    const addTicket = () => {
        ticketInfo[index].total += 1
        console.log(ticketInfo[index].total)
        setTotal(totalTickets + 1)
        changeTotal()
        check(index)
    }

    const deleteTicket = () => {
        ticketInfo[index].total -= 1
        console.log(ticketInfo[index].total)
        setTotal(totalTickets - 1)
        changeTotal()
        check(index)
    }


    return (
        <div className="w-full h-52 flex justify-center items-center">
            <div className="w-[90%] h-[90%] flex justify-start gap-2">
                <img src={imgUrl} alt="ticket image" />
                <div className="flex flex-col items-center justify-between">
                    <div className="text-3xl font-bold">{type} ticket</div>
                    <div className="text-xl font-bold">${(price * totalTickets).toFixed(2)}</div>
                    <div className="flex justify-between items-center gap-4">
                        <motion.button whileHover={{ scale: 1.1}} whileTap={{ scale: .95}} className="p-2 bg-[#cccccc] rounded-md" onClick={deleteTicket} >-</motion.button>
                        <div className="font-bold">{totalTickets}</div>
                        <motion.button whileHover={{ scale: 1.1}} whileTap={{ scale: .95}} className="p-2 bg-[#cccccc] rounded-md" onClick={addTicket} >+</motion.button>
                    </div>
                </div>
            </div>
        </div>

    )
}