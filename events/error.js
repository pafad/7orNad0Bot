module.exports = (client, error) => {

client.channel.get("557318834223054907").send("**UnhandledPromiseRejection :** " + error.message)

} 
