import { motion } from "framer-motion";
import Backdrop from "../Backdrop/Backdrop";
import { useState } from "react";

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
    // const []

    return (
        <Backdrop onClick={handleClose}>
            <motion.div onClick={(e) => e.stopPropagation()} className="bg-white w-[40rem] max-w-[65%] min-h-[100%] flex flex-col" variants={dropIn} initial="hidden" animate="visible" exit="exit">
                <div className="text-3xl sm:text-5xl flex justify-center items-center mt-12">
                    <div>Your Shopping Cart</div>
                </div>
                <div className="text-3xl sm:text-5xl flex justify-center items-center mt-12">
                    <div>Total: </div>
                </div>
                <div className="flex justify-center gap-4">
                    <button onClick={handleClose} className="checkout-button"><span>Checkout</span></button>
                    <button onClick={handleClose} className="checkout-button"><span>Close</span></button>
                </div>
            </motion.div>
        </Backdrop>
    )
}