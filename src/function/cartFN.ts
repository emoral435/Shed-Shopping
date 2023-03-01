import ticketInfo from "./ticketInformation";

function isEmpty() {
    for (let i = 0; i < ticketInfo.length; i++) {
        if (ticketInfo[i].total > 0) return false
    }
    return true
}

function getTotalCost() {
    let total = 0
    for (let i = 0; i < ticketInfo.length; i++) {
        if (ticketInfo[i].total > 0) total += ticketInfo[i].total * ticketInfo[i].price
    }
    return total
}

function getTotalTickets() {
    let total = 0
    for (let i = 0; i < ticketInfo.length; i++) {
        if (ticketInfo[i].total > 0) total++
    }
    return total
}

export {
    isEmpty,
    getTotalCost,
    getTotalTickets,
}