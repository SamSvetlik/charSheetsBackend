const express = require('express')
const app = express()

const PORT = process.env.port || 5000

app.get("/", (req, res)=> {
    res.json({
        message: "Welcome to the character sheet backend!"
    })
})

app.listen(PORT, ()=> console.log(`I am listening on port ${PORT}`))