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


// most of the items here are self explanatory, however, the adultTotal variable esque is used to store the total amount of tickets
let adultText = "Adult General Admission (< 17)", adultPrice = 49.99, adultLink = "/tickets/adult", adultTotal = 0
let babyText = "Baby General Admission (0 - 3)", babyPrice = 0, babyLink = "/tickets/baby", babyTotal = 0
let childText = "Child General Admission (< 4)", childPrice = 24.99, childLink = "/tickets/child", childTotal = 0
let crabText = "Crab Exhibit", crabPrice = 14.99, crabLink = "/tickets/crab", crabTotal = 0
let dolphinText = "Dolphin Exhibit", dolphinPrice = 20.99, dolphinLink = "/tickets/dolphin",  dolphinTotal = 0
let fishText = "Fish Exhibit", fishPrice = 9.99, fishLink = "/tickets/fish", fishTotal = 0
let frogsText = "Frogs Exhibit", frogsPrice = 14.99, frogsLink = "/tickets/frogs", frogsTotal = 0
let jellyText = "Jellyfish Exhibit", jellyPrice = 17.99, jellyLink = "/tickets/jellyfish", jellyTotal = 0
let penguinText = "Penguin Exhibit", penguinPrice = 17.99, penguinLink = "/tickets/penguin", penguinTotal = 0
let polarText = "Polar Bear Exhibit", polarPrice = 20.99, polarLink = "/tickets/polarbear", polarTotal = 0
let sharkText = "Shark Exhibit", sharkPrice = 14.99, sharkLink = "/tickets/shark", sharkTotal = 0
let turtleText = "Turtle Exhibit", turtlePrice = 5.99, turtleLink = "/tickets/turtle", turtleTotal = 0

const tickFac = (imgUrl: string, ticket: string, price: number, link: string, total: number) => {
    return {
        imgUrl,
        ticket,
        price,
        link,
        total
    }
}

interface TicketTypes {
    imgUrl: string,
    ticket: string,
    price: number,
    link: string,
    total: number
}

let ticketInfo: TicketTypes[] = [tickFac(adult, adultText, adultPrice, adultLink, adultTotal), tickFac(baby, babyText, babyPrice, babyLink, babyTotal), tickFac(child, childText, childPrice, childLink, childTotal),
                                 tickFac(crab, crabText, crabPrice, crabLink, crabTotal), tickFac(dolphin, dolphinText, dolphinPrice, dolphinLink, dolphinTotal), tickFac(fish, fishText, fishPrice, fishLink, fishTotal),
                                 tickFac(frogs, frogsText, frogsPrice, frogsLink, frogsTotal), tickFac(jelly, jellyText, jellyPrice, jellyLink, jellyTotal), tickFac(penguin, penguinText, penguinPrice, penguinLink, penguinTotal),
                                 tickFac(polar, polarText, polarPrice, polarLink, polarTotal), tickFac(shark, sharkText, sharkPrice, sharkLink, sharkTotal), tickFac(turtle, turtleText, turtlePrice, turtleLink, turtleTotal)] 

export default ticketInfo

