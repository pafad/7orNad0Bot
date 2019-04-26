module.exports.run = async (client, message, args, opt, tools) => {
message.delete() 
 		
 		if(!args || args.length == 0){
 			return tools.hook(message.channel, `Help`, `${prefix}hook <message>`, "00ffff", "https://cdn.discordapp.com/attachments/564478330712096770/571327152818225171/d4963add60654027bad8e894a3779ae1.jpg")
 			}
 			
 			let role = message.member.roles.last();

 			tools.hook(message.channel, message.author.username, args.join(" "), role.hexColor.slice(1), message.author.avatarURL)
 			
} 
