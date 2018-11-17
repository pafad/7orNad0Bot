const db = require("quick.db")

module.exports.run = async (client, message, args) => {

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Tu n'as pas la permission administrateur")

    if(!args || args.length < 1) return message.channel.send(":x: tu dois entrer le prefix souhaité.")

    if(args.join(" ").length > 2) return message.channel.send("Le prefix peut contenir 2 caractères maximum")
    db.set(`prefix_${message.guild.id}`, `${args.join(" ")}`)
    message.channel.send(`Prefix changé en **${args.join(" ")}** !`)

}

module.exports.help = {
    name:"prefix",
    description:"change le prefix du bot sur le serveur",
    usage:"prefix <prefix>",
    category:"settings"
}

module.exports.conf = {
    aliases:[]
}
