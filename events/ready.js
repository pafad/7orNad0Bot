const config = require("../config.json")

module.exports = async (client) => {
       //rainbow 
       const size    = config.colors;

const rainbow = new Array(size);

for (var i=0; i<size; i++) {

  var red   = sin_to_hex(i, 0 * Math.PI * 2/3); // 0   deg

  var blue  = sin_to_hex(i, 1 * Math.PI * 2/3); // 120 deg

  var green = sin_to_hex(i, 2 * Math.PI * 2/3); // 240 deg

  rainbow[i] = '#'+ red + green + blue;

}

function sin_to_hex(i, phase) {

  var sin = Math.sin(Math.PI / size * 2 * i + phase);

  var int = Math.floor(sin * 127) + 128;

  var hex = int.toString(16);

  return hex.length === 1 ? '0'+hex : hex;

}

let place = 0;

const servers = config.servers;

function changeColor() {

  for (let index = 0; index < servers.length; ++index) {

    client.guilds.get(servers[index]).roles.find('name', config.roleName).setColor(rainbow[place])

		.catch(console.error);

    if(config.logging){

      console.log(`[ColorChanger] Changed color to ${rainbow[place]} in server: ${servers[index]}`);

    }

    if(place == (size - 1)){

      place = 0;

    }else{

      place++;

    }

  }

}




        client.user.setPresence({game:{name:`${config.prefix}help | ${client.guilds.size} serveurs | ${client.users.size} utilisateurs`,url: "https://www.twitch.tv/discordapp",type:1}})
       
	
        console.log(`${client.user.tag} connecté !`)
	
	client.channels.get("564478327914627082").send({embed:{
		color:0x010101, 
		author:{
                name:"Lancement réussi"
                },
		description:"Bot démarré avec succès !",
		timestamp:new Date(),
		footer:{
                icon_url:client.user.avatarURL,text:"lancé"
		} 
	}}) 
	
	//mise en marche rainbow 
        if(config.speed < 60000){console.log("The minimum speed is 60.000, if this gets abused your bot might get IP-banned"); process.exit(1);}
        setInterval(changeColor, config.speed);
        
    
}
