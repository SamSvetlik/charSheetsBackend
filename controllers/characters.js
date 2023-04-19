const characters = require('../characters.json')

const char = async (req, res) => {
    const input = req.params.character.toUpperCase()
    console.log(input)
    console.log(characters)
    characters.forEach(character => {
        if (character.name === input) {
            res.send(`You requested info on ${input}`)
        } else res.send('Character not found')
    })
}

module.exports = {char}