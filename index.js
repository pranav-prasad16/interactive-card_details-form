const info = ["0000 0000 0000 0000", "JANE APPLESEED", "00", "00", "000"]
const inputName = document.getElementById("holder-name")
const inputNum = document.getElementById("card-num")
const inputMonth = document.getElementById("exp-month")
const inputYear = document.getElementById("exp-year")
const inputCvc = document.getElementById("cvc-num")
const inputBtn = document.getElementById("btn")

let form = document.getElementById("form")

const displayNum = document.getElementById("display-num")
const displayName = document.getElementById("display-name")
const displayDate = document.getElementById("display-date")
const displayCvc = document.getElementById("display-cvc")

inputBtn.addEventListener("click", () => {
    if(inputNum.value)
        info[0] = inputNum.value
    if(inputName.value)
        info[1] = inputName.value
    if(inputMonth.value)
        info[2] = inputMonth.value
    if(inputYear.value)
        info[3] = inputYear.value
    if(inputCvc.value)
        info[4] = inputCvc.value

    render(info)

    update()
})

const render = (arr) => {
    displayNum.textContent = arr[0]
    displayName.textContent = arr[1]
    displayCvc.textContent = arr[4]
    displayDate.textContent = `${arr[2]}/${arr[3]}`
}

const update = () => {
    let contentItems = ""
    contentItems = `
    <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="40" fill="url(#a)"/><path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3"/><defs><linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse"><stop stop-color="#6348FE"/><stop offset="1" stop-color="#610595"/></linearGradient></defs></svg>
        <h2>THANK YOU!</h2>
        <p>We've added your card details</p>
        <button>Continue</button>
    `
    // content.innerHTML = contentItems
    form.innerHTML = contentItems
}