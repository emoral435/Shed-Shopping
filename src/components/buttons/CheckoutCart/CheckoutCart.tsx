import { motion } from "framer-motion";
import Backdrop from "../Backdrop/Backdrop";
import { useState } from "react";
import { getTotalCost, getTotalTickets, isEmpty } from "../../../function/cartFN";
import { useNavigate } from "react-router";

interface Props {
    handleClose: any,
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

export default function Modal({ handleClose } : Props) {
    const [cart, setCart] = useState(isEmpty)
    const [items, setItems] = useState(getTotalTickets)
    const [price, setPrice] = useState(getTotalCost)
    const navigate = useNavigate()

    function handleClick() {
        navigate("/")
        handleClose()
    }

    let arrOfItems: any = []

    console.log(isEmpty())
    return (
        <Backdrop onClick={handleClose}>
            <motion.div onClick={(e) => e.stopPropagation()} className="bg-white w-[40rem] max-w-[65%] min-h-[100%] flex flex-col" variants={dropIn} initial="hidden" animate="visible" exit="exit">
                <div className="text-3xl sm:text-5xl flex justify-center items-center mt-12">
                    <div>Your Shopping Cart</div>
                </div>
                <div>
                    {cart && <div><div className="text-3xl sm:text-4xl flex justify-center items-center mt-12">Your Shopping Cart Is Empty!</div><div className="text-xl sm:text-2xl flex justify-center items-center mt-12">Explore tickets and add them to the cart.</div></div>}
                    {/* {!cart && {arrOfItems}} */}
                </div>
                <div className="text-3xl sm:text-5xl flex justify-center items-center mt-12">
                    <div>Total: ${price}</div>
                </div>
                <div className="flex justify-center gap-4 mt-8">
                    {!cart && <button onClick={handleClick} className="checkout-button"><span>Checkout</span></button>}
                    <button onClick={handleClose} className="checkout-button"><span>Close</span></button>
                </div>
            </motion.div>
        </Backdrop>
    )
}