exports.run = (client, message, args) => {
spotify.search({type: args}, function(err, data){
    if ( err ) {
        message.channel.send('une érreur est survenue lors de la recherche: ' + err);
        return;
    }
  })
}
