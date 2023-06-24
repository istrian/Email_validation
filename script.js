function validate() {
    let input = document.querySelector("#input")
    let value = input.value
    let posa = value.indexOf("@")
    let posdot = value.indexOf(".")
    let betweenval = value.substring(posa +1, posdot)

    let befa = value.substring(0, posa)
    let afdot = value.substring(posdot + 1, value.length)



    console.log(betweenval)
    if (value.includes("@") && value.includes(".") && betweenval.length > 0 && befa.length > 3 && afdot.length >1) {
        console.log("Valid email")
    }
    else {
        console.log("Invalid email")
    }
}