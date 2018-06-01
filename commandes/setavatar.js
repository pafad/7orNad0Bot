exports.run = (client, message,args) => {
if (message.author.id === "306119836503900161") {
            client.user.setAvatar(args.join());
            message.delete()
            message.channel.send("<:7orNad0_check_mark:400045879958175745> L'avatar du bot est désormais:" + args.join())
        } else {
            message.channel.send(`<:7orNad0_check_mark:400045879958175745> ${message.author} Tu n'est pas mon developpeur`)
        }
}
