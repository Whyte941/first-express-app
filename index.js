const express = require("express")
const app = express()
const port = 4000

app.get("/", (req, res) => {
    res.send("hello world! i am here today")
})
app.get("/login", (req, res) => {
    res.send("do you want to login to your app?")
})
app.get("/register", (req, res) => {
    res.send("do you want to register an account?")
})
app.get("/register/nigeria", (req, res) => {
    res.send("do you want to register an account?")
})

app.listen(port, () => {
    console.log(`example app listening at http://localhost:${port}`)
})