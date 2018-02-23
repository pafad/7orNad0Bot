exports.run = (client, message) => {
var daily;

   if ((daily[message.author.id].ratelimit > Date.now()) && (daily[message.author.id].ratelimit !== 0)) {
                var now = new Date().getTime();
                var distance = daily[message.author.id].ratelimit - now;
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                message.channel.send(":x: Vous ne pouvez utiliser cette commande qu'une fois toutes les 12h, temps restant: " + hours + "h " + minutes + "m " + seconds + "s");
                return;
}
