const express = require("express")
const app = express()
const port = 4000

const area = require('./introduction/area')

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

// create route for calculating the area of a circle by using the circle function 
app.get('/calculate-area', (req, res) => {
    console.log(req.query)
    // get the radius of the circle from the request query parameters
    let shape = req.query.shape

    if (shape === 'circle') {
        let radius = req.query.radius
        let cArea = area.circleArea(radius)
        res.send(`the area of a circle of radius ${radius} is ${cArea}`)
    } else if (shape === 'cylinder') {
        let radius = req.query.radius
        if(radius) {
        let height = req.query.height
        let cyArea = area.cylinderArea(radius, height)
        res.send(`the area of a cylinder of radius ${radius} is ${cyArea}`)
    } else
    res.send(`please provide the radius of the cylinder`)
    } else if (shape === 'square') {
        let side = req.query.side
        let sArea = area.squareArea(side)
        res.send(`the area of a square of side ${side} is ${sArea}`)

    } else {
        res.end('please specify the shape you want to calculate its area')
    }


})

app.listen(port, () => {
    console.log(`example app listening at http://localhost:${port}`)
})