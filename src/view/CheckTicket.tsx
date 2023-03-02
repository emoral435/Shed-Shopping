import ticketInfo from "../function/ticketInformation"
import { useNavigate } from "react-router"
import { motion } from "framer-motion"

interface propsInterface {
    id: number,
    checkout: any,
    changeTotal: any
}

export default function CheckTicket(props: propsInterface) {
    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }

    const addCheckout = () => {
        ticketInfo[props.id].total = ticketInfo[props.id].total +  1
        console.log(ticketInfo[props.id].total)
        props.changeTotal()
        props.checkout()
    }

    return (
        <div className="h-full min-h-[73vh] w-full relative">
            <div className="flex justify-center relative"><button className="text-2xl text-[#013265] absolute -top-[2.5rem]" onClick={goBack}>&#60; Go Back</button></div>
            <div className="flex justify-center h-full">
                <div className="max-w-[90%] w-[75rem] bg-white shadow-2xl mb-12 rounded-md">
                    <div className="flex flex-col sm:flex-row">
                        <div className="bg-[#b0d3fa] rounded-md shadow-xl flex justify-center items-center">
                            <img src={ticketInfo[props.id].imgUrl} alt="ticket image" className="w-[100%] h-[100%]" />
                        </div>
                        <div className=" rounded-md shadow-xl flex items-center justify-center">
                            <div className="flex flex-col items-center sm:items-start m-8 gap-8">
                                <div className="font-bold text-5xl">{ticketInfo[props.id].ticket}</div>
                                <div className="font-bold text-3xl">{ticketInfo[props.id].price} - taxes included</div>
                                <div className="">
                                    <motion.button className="checkout-button" onClick={addCheckout}>
                                        <span>Add To Cart </span>
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}