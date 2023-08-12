const form = document.querySelector("form")
const email = document.querySelector("input[type=email]")
const password = document.querySelector("input[type=password]")


form.addEventListener("submit", onSubmitFunction)

const emailDB = "admin@gmail.com"
const passwordDB = "123"


function onSubmitFunction(event) {
    if(email.value === "" || password.value === "") {
        event.preventDefault()
        alert("Please fill the details")
        return false
    }
    if(email.value !== emailDB || password.value !== passwordDB)
    {
        event.preventDefault()
        alert("Enter Correct Values")
        return false
    }
}