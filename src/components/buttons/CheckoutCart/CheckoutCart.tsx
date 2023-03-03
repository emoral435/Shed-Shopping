import { motion } from "framer-motion";
import Backdrop from "../Backdrop/Backdrop";
import { useState, useEffect } from "react";
import { getTotalCost, isEmpty } from "../../../function/cartFN";
import { useNavigate } from "react-router";
import CheckoutItem from "../CheckoutItem/CheckoutItem";
import ticketInfo from "../../../function/ticketInformation";

interface Props {
    handleClose: any,
    changeTotal: any,
}

const dropIn = {
    hiden: {
        x: "-100vw",
        opacity: 0,
    },
    visible: {
        x: "0",
        opacity: 1,
        transition: {
            duration: 0.3,
            damping: 25,
            stiffness : 500
        }

    },
    exit: {
        x: "100vw",
        opacity: 0,
        transition: {
            duration: 1,
            damping: 25,
            stiffness : 500
        }
    }
}

export default function Modal({ handleClose, changeTotal } : Props) {
    const [cart, setCart] = useState(isEmpty())
    const [items, setItems] = useState([<div key={"firstRender"}></div>])
    const [price, setPrice] = useState(getTotalCost())
    const [update, doUpdate] = useState(0)

    const navigate = useNavigate()

    function updatedPrice() {
        console.log(getTotalCost())
        console.log("Whaty")
        setPrice(getTotalCost())
    }

    function checkIfZero(id: number) {
        if (ticketInfo[id].total <= 0) {
            doUpdate(update + 1)
        }
    }

    useEffect(() => {
        const arrTickets: any = []

        for (let i = 0; i < ticketInfo.length; i++) {
            let ticket = ticketInfo[i]
            if (ticket.total > 0) {
                arrTickets.push(<CheckoutItem check={checkIfZero} changeTotal={changeTotal} imgUrl={ticket.imgUrl} price={ticket.price} total={ticket.total} type={ticket.ticket} index={i} key={i + " ticket"} updatePrice={updatedPrice}/>)
            }
        }

        setItems(arrTickets)
    }, [cart, update])

    function handleClick() {
        navigate("/")
        handleClose()
    }


    
    return (
        <Backdrop onClick={handleClose}>
            <motion.div onClick={(e) => e.stopPropagation()} className="w-[40rem] max-w-[65%] max-h-[100%]" variants={dropIn} initial="hidden" animate="visible" exit="exit">
                <div className="bg-white flex flex-col">
                    <div className="text-3xl sm:text-5xl flex justify-center items-center mt-12">
                        <div>Your Shopping Cart</div>
                    </div>
                    <div className="flex flex-col gap-12 mt-12">
                        {cart && <div><div className="text-3xl sm:text-4xl flex justify-center items-center mt-12">Your Shopping Cart Is Empty!</div><div className="text-xl sm:text-2xl flex justify-center items-center mt-12">Explore tickets and add them to the cart.</div></div>}
                        {!cart && items}
                    </div>
                    <div className="text-3xl sm:text-5xl flex justify-center items-center mt-12">
                        <div>Total: ${price}</div>
                    </div>
                    <div className="flex justify-center gap-4 mt-8">
                        {!cart && <button onClick={handleClick} className="checkout-button"><span>Checkout</span></button>}
                        <button onClick={handleClose} className="checkout-button"><span>Close</span></button>
                    </div>
                </div>
            </motion.div>
        </Backdrop>
    )
}