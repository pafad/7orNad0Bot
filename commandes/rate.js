module.exports.run = async (client,message,args) => {
    var nombre = Math.floor(Math.random()*19)+1;
    var mention = message.mentions.users.first();
    if(!mention){
        message.channel.send(`Je note ${message.author.tag} de ${nombre}/20`)
        return;
    }else{
        message.channel.send(`Je note ${mention.tag} de ${nombre}/20`)
    }
}

module.exports.help ={
    name:"rate",
    description:"Le bot te note /20",
    usage:"rate @mention",
    category:"fun"
}

module.exports.conf = {
    aliases:[]
}