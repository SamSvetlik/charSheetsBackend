const char = async (req, res) => {
    const input = req.params.character
    console.log(req.params)
    res.send(`You requested info on ${input}`)
}

module.exports = {char}