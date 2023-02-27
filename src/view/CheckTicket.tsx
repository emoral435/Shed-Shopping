import ticketInfo from "../function/ticketInformation"

interface propsInterface {
    id: number,
}

export default function CheckTicket(props: propsInterface) {
    return (
        <div className="h-[73vh] flex justify-center items-center">
            <div className="w-[70rem] h-[100%] bg-white shadow-2xl mb-12 flex justify-center items-center">
                <div className="w-[90%] h-[90%] grid grid-auto-fit-xl gap-8">
                    <div className="bg-[#e7e7e7]"></div>
                    <div className="bg-[#e7e7e7]"></div>
                </div>
            </div>
        </div>
    )
}