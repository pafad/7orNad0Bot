const sm = require("string-similarity")
module.exports.run = async (client,message,args) => {
    if(!message.member.hasPermissions("BAN_MEMBERS")){
        message.channel.send(`:x: ${message.author} Tu n'as pas la permission de ban les membres.`);
        return;
    }else{
        let raison = args.slice(1).join(" ");
        let membres = [];
        let indexes = [];
        message.guild.members.forEach(function(member){
            membres.push(member.user.username)
            indexes.push(member.id)
        })

        let match = sm.findBestMatch(args.join(" "), membres);
        let username = match.bestMatch.target;

        let ToBan = message.guild.members.get(indexes[membres.indexOf(username)])
        let banMember = message.mentions.members.first() || message.guild.members.find("id", args.join(" ")) || ToBan;
        if(!banMember){
            message.channel.send(":x: Utilisateur invalide essaie la mention, l'id ou le nom.")
            return;
        }else{
          if(!banMember.bannable){
              message.channel.send(`:x: ${message.author} je peux pas kick cet utilisateur veuillez vérifier mes rôles et permissions.`);
              return;
        }else{
            if(banMember.hasPermission("ADMINISTRATOR")){
                message.channel.send(`:x: ${message.author} cet utilisateur est un admin, je peux pas faire ça.`);
                return; 
            }else{
    message.delete(message.author);
    banMember.send(`Tu as été ban de **${message.guild.name}** pour la raison: ${raison}`);
    message.guild.member(banMember).ban(7, raison);
    message.channel.sendMessage(`**${banMember}** a été ban! raison:${raison}`);
                }
            }
        }
    }
}
module.exports.help = {
    name: "ban",
    description:"bannir un utilisateur du serveur en question",
    usage:"ban @mention <raison>",
    category:"modération"
}

module.exports.conf = {
    aliases:[],

cooldown:5
  }
