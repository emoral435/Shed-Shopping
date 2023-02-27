import ticketInfo from "../../../function/ticketInformation"
import Ticket from "../Tickets/Tickets"
const ticketContainer: any = []

ticketInfo.forEach( node => {
    ticketContainer.push(<Ticket price={node.price} ticketType={node.ticket} imgUrl={node.imgUrl} link={node.link} key={node.link}/>)
})

export default function ShowTickets() {
    return (
        <div className="w-[80%] h-[80%] mb-4">
            <div className="grid gap-8 grid-auto-fit-xl">
                {ticketContainer}
            </div>
        </div>
    )
}