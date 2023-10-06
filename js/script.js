// ### Get user name and surname
// - Ask user to input name and surname in an html input element
// - Store in variable 'userName'

function getUserName() {

    const userName = document.getElementById("userNameDOM").value

    if (userName === "") {
        document.getElementById("userNameDOM").classList.add("is-invalid")
        document.getElementById("userNameDOMfeedback").innerHTML = ("No name inserted")
        return
    }

    else if (!isNaN(parseInt(userName))) {
        document.getElementById("userNameDOM").classList.add("is-invalid")
        document.getElementById("userNameDOMfeedback").innerHTML = ("Name cannot be numbers")
        return
    }

    document.getElementById("userNameDOM").classList.remove("is-invalid")
    return userName

}

// ### Get user trip length in km
// - Ask user to input trip length in an html input element
// - Store in variable 'tripLength'

function getTripLength() {

    const tripLength = document.getElementById("tripLengthDOM").value


    if (tripLength === "") {
        document.getElementById("tripLengthDOM").classList.add("is-invalid")
        document.getElementById("tripLengthDOMfeedback").innerHTML = ("No distance inserted")
        return
    }

    else if (isNaN(parseInt(tripLength))) {
        document.getElementById("tripLengthDOM").classList.add("is-invalid")
        document.getElementById("tripLengthDOMfeedback").innerHTML = ("Not a number")
        return
    }

    else if (Math.sign((parseInt(tripLength))) !== 1) {
        document.getElementById("tripLengthDOM").classList.add("is-invalid")
        document.getElementById("tripLengthDOMfeedback").innerHTML = ("Invalid number")
        return
    }

    document.getElementById("tripLengthDOM").classList.remove("is-invalid")
    return tripLength

}

// ### Get user age bracket for discount percentage
// - Ask user to select age bracket in an html select element
// - Choices: Adult (18 - 65), Minor (under 18), Senior (over 65)
// - Based on choice, select discount rate (adult 0%, minor 20%, senior 40%)
// - Store in variable 'discountRate'

function getAgeBracket() {

    const ageBracket = document.getElementById("ageBracketDOM").value
    let discountRate = 1

    if (ageBracket === "minor") {
        discountRate = 0.8

    } else if (ageBracket === "senior") {
        discountRate = 0.6
    }

    return discountRate
}

// ### Calculate Trip Cost
// - (tripLength * tripRate(0.21)) * discountRate(adult(1), minor(0.8), senior(0.6))

document.getElementById("priceBtnDOM").addEventListener("click", function calcTripPrice() {

    // Remove animation and reflow
    document.getElementById("appBodyDOM").classList.remove("invalid")
    void document.getElementById("appBodyDOM").offsetWidth

    const userName = getUserName()
    const tripLength = parseFloat(getTripLength())
    const ticketRate = 0.21
    const discountRate = getAgeBracket()
    let passengerOffer = 'Standard'

    const tripPrice = ((tripLength * ticketRate) * discountRate).toFixed(2)

    if (discountRate === 0.8) {
        passengerOffer = 'Youth'
    } else if (discountRate === 0.6) {
        passengerOffer = 'Senior'
    }

    if (userName && tripLength) {
        console.log(userName, tripLength)
        document.getElementById("passengerNameDOM").innerHTML = userName
        document.getElementById("passengerOfferDOM").innerHTML = passengerOffer + ' ticket'
        document.getElementById("CoachNumberDOM").innerHTML = Math.floor(Math.random() * (12 - 1 + 1) + 1)
        document.getElementById("BookingNumberDOM").innerHTML = Math.floor(Math.random() * (99999 - 10000 + 1) + 10000)
        document.getElementById("TicketPriceDOM").innerHTML = tripPrice + '&euro;'
    } else {
        document.getElementById("appBodyDOM").classList.add("invalid")
    }

})

// ### Reset Form
// - go into DOM and reset values
document.getElementById("resetBtnDOM").addEventListener("click", function resetValues() {

    // Remove invalid style and feedback
    document.getElementById("userNameDOM").classList.remove("is-invalid")
    document.getElementById("tripLengthDOM").classList.remove("is-invalid")

    // Reset DOM values
    document.getElementById("userNameDOM").value = ''
    document.getElementById("tripLengthDOM").value = ''
    document.getElementById("ageBracketDOM").value = 'adult'
    document.getElementById("passengerNameDOM").innerHTML = '-'
    document.getElementById("passengerOfferDOM").innerHTML = '-'
    document.getElementById("CoachNumberDOM").innerHTML = '-'
    document.getElementById("BookingNumberDOM").innerHTML = '-'
    document.getElementById("TicketPriceDOM").innerHTML = '-'

})