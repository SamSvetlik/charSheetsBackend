const express = require('express')
const app = express()
const characterRoutes = require('./routes/characters')

const PORT = process.env.port || 5000

app.use(express.json())
app.use('/characters', characterRoutes)

app.get("/", (req, res)=> {
    res.json({
        message: "Welcome to the character sheet backend!"
    })
})

app.listen(PORT, ()=> console.log(`I am listening on port ${PORT}`))