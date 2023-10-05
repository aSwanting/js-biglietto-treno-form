// ### Get user name and surname
// - Ask user to input name and surname in an html input element
// - Store in variable 'userName'

function getUserName() {

    const userName = document.getElementById("userNameDOM").value

    if (userName === "") {
        return alert('No name inserted')
    }

    else if (userName === null) {
        return
    }

    else if (!isNaN(parseInt(userName))) {
        return alert('Name cannot be numbers')
    }

    return userName

}

// ### Get user trip length in km
// - Ask user to input trip length in an html input element
// - Store in variable 'tripLength'

function getTripLength() {

    const tripLength = document.getElementById("tripLengthDOM").value

    if (tripLength === "") {
        return alert('No distance inserted')
    }

    else if (tripLength === null) {
        return
    }

    else if (isNaN(parseInt(tripLength))) {
        return alert('Input is not a number')
    }

    else if (Math.sign((parseInt(tripLength))) !== 1) {
        return alert('Input is an invalid number')
    }

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

    if (!isNaN(tripPrice)) {
        document.getElementById("passengerNameDOM").innerHTML = userName
        document.getElementById("passengerOfferDOM").innerHTML = passengerOffer + ' ticket'
        document.getElementById("CoachNumberDOM").innerHTML = Math.floor(Math.random() * (12 - 1 + 1) + 1)
        document.getElementById("BookingNumberDOM").innerHTML = Math.floor(Math.random() * (99999 - 10000 + 1) + 10000)
        document.getElementById("TicketPriceDOM").innerHTML = tripPrice + '&euro;'
    }

})

// ### Reset Form
// - go into DOM and reset values
document.getElementById("resetBtnDOM").addEventListener("click", function resetValues() {

    console.log(document.getElementById("userNameDOM").value = '')
    console.log(document.getElementById("tripLengthDOM").value = '')
    console.log(document.getElementById("ageBracketDOM").value = 'adult')

})