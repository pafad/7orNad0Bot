module.exports.run = async (client, message, args) => {
    message.channel.send(`:gear: -> ${message.author} tu as eu le nombre __${Math.floor(Math.random()* 100)}__ !`)
}

module.exports.help = {
    name: "roll",
    description:"nombre au hasard de 0 à 100",
    usage:"roll",
    category:"fun"
}

module.exports.conf = {
    aliases:[]
  }