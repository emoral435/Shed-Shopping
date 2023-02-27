import adult from '/src/assets/ticketicons/adult.svg'
import baby from '/src/assets/ticketicons/baby.svg'
import child from '/src/assets/ticketicons/child.svg'
import crab from '/src/assets/ticketicons/crabs.svg'
import dolphin from '/src/assets/ticketicons/dolphin.svg'
import fish from '/src/assets/ticketicons/fishIcon.svg'
import frogs from '/src/assets/ticketicons/frogs.svg'
import jelly from '/src/assets/ticketicons/jellyfish.svg'
import penguin from '/src/assets/ticketicons/penguin.svg'
import polar from '/src/assets/ticketicons/polarBear.svg'
import shark from '/src/assets/ticketicons/shark.svg'
import turtle from '/src/assets/ticketicons/turtles.svg'

let adultText = "Adult General Admission (< 17)", adultPrice = 49.99, adultLink = "/tickets/adult"
let babyText = "Baby General Admission (0 - 3)", babyPrice = 0, babyLink = "/tickets/baby"
let childText = "Child General Admission (< 4)", childPrice = 24.99, childLink = "/tickets/child"
let crabText = "Crab Exhibit", crabPrice = 14.99, crabLink = "/tickets/crab"
let dolphinText = "Dolphin Exhibit", dolphinPrice = 20.99, dolphinLink = "/tickets/dolphin"
let fishText = "Fish Exhibit", fishPrice = 9.99, fishLink = "/tickets/fish"
let frogsText = "Frogs Exhibit", frogsPrice = 14.99, frogsLink = "/tickets/frogs"
let jellyText = "Jellyfish Exhibit", jellyPrice = 17.99, jellyLink = "/tickets/jellyfish"
let penguinText = "Penguin Exhibit", penguinPrice = 17.99, penguinLink = "/tickets/penguin"
let polarText = "Polar Bear Exhibit", polarPrice = 20.99, polarLink = "/tickets/polarbear"
let sharkText = "Shark Exhibit", sharkPrice = 14.99, sharkLink = "/tickets/shark"
let turtleText = "Turtle Exhibit", turtlePrice = 5.99, turtleLink = "/tickets/turtle"

const tickFac = (imgUrl: string, ticket: string, price: number, link: string) => {
    return {
        imgUrl,
        ticket,
        price,
        link
    }
}

interface TicketTypes {
    imgUrl: string,
    ticket: string,
    price: number,
    link: string
}

let ticketInfo: TicketTypes[] = [tickFac(adult, adultText, adultPrice, adultLink), tickFac(baby, babyText, babyPrice, babyLink), tickFac(child, childText, childPrice, childLink),
                                 tickFac(crab, crabText, crabPrice, crabLink), tickFac(dolphin, dolphinText, dolphinPrice, dolphinLink), tickFac(fish, fishText, fishPrice, fishLink),
                                 tickFac(frogs, frogsText, frogsPrice, frogsLink), tickFac(jelly, jellyText, jellyPrice, jellyLink), tickFac(penguin, penguinText, penguinPrice, penguinLink),
                                 tickFac(polar, polarText, polarPrice, polarLink), tickFac(shark, sharkText, sharkPrice, sharkLink), tickFac(turtle, turtleText, turtlePrice, turtleLink)] 

export default ticketInfo

