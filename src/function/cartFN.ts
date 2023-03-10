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
        total = total + ticketInfo[i].total * ticketInfo[i].price
    }
    return total.toFixed(2)
}

function getTotalTickets() {
    let total = 0
    for (let i = 0; i < ticketInfo.length; i++) {
        if (ticketInfo[i].total > 0) {
            total += ticketInfo[i].total
        }
    }
    return total
}

export {
    isEmpty,
    getTotalCost,
    getTotalTickets,
}