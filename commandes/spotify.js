exports.run = (client, message, args) => {
let imput = args.join(" ")
let imput1 = args[1].join(" ")
spotify.search({type: imput, query: imput1}, function(err, data){
    if ( err ) {
        message.channel.send('une érreur est survenue lors de la recherche: ' + err);
        return;
    }
  })
}
