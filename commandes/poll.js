exports.run = (client, message,args) => {
if(args.length === "0") return message.channel.send(":x: Tu n'as rien écrit");
message.delete();
message.channel.send(message.content.substr(6)).then(m => m.react(":thumbsup:"), m.react(":punch:"), m.react("thumbsdown"))
}
