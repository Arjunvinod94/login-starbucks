const express = require("express")
const app = express()
const alert = require("alert")


app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(express.static("views"))

const emailDB = "admin@gmail.com"
const passwordDB = "123"

app.post("/login",(req,res) => {
    const { email, password } = req.body

    if(email === emailDB && password === passwordDB) {
        res.sendFile(__dirname + "/views/home.html")
    } 
    // else {
    //     res.send("Login Failed") 
    //     alert("message")
    // }
})

app.get("/signout",(req,res) => {

    setTimeout(() => {
        res.sendFile(__dirname + "/views/index.html")
    },300)

    
})


const PORT = process.env.PORT || 3001

app.listen(PORT)