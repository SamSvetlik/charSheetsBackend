const characters = require('../characters.json')

const char = async (req, res) => {
    const input = req.params.character
    console.log(input)
    console.log(characters)
    console.log(characters.input)
    if (characters.input) {
        res.send(`You requested info on ${input}`)
    } else res.send('Character not found')
}

module.exports = {char}