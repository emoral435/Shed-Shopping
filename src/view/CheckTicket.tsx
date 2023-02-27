import ticketInfo from "../function/ticketInformation"
import { useNavigate } from "react-router"

interface propsInterface {
    id: number,
}

export default function CheckTicket(props: propsInterface) {
    const navigate = useNavigate()
    const goBack = () => {
        navigate(-1)
    }
    return (
        <div className="h-[73vh] flex flex-col gap-4 justify-center items-center relative">
            <button className="absolute text-2xl -top-[4rem] -left-[4rem] text-[#013265]" onClick={goBack}>&#60; Go Back</button>
            <div className="w-[80rem] max-w-[90%] h-[100%] bg-white shadow-2xl mb-12 flex justify-center items-center rounded-md">
                <div className="w-[90%] h-[90%] grid grid-auto-fit-xl gap-8">
                    <div className="bg-[#b0d3fa] rounded-md shadow-xl flex justify-center items-center">
                        <img src={ticketInfo[props.id].imgUrl} alt="ticket image" className="w-[80%] h-[80%]" />
                    </div>
                    <div className=" rounded-md shadow-xl flex flex-col gap-8 justify-center">
                        <div className="font-bold text-5xl">{ticketInfo[props.id].ticket}</div>
                        <div className="font-bold text-3xl">{ticketInfo[props.id].price} - taxes included</div>
                    </div>
                </div>
            </div>
        </div>
    )
}