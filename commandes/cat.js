const randomCat = require("random-cat");
const rn = require("random-number");
exports.run = (client, message) => {
  var url = randomCat.get();
  var options = {
        min: 0,
        max: url.length - 1,
        integer: true
    }
  var random_msg = rn(options);
    message.channel.sendCode("",url[random_msg])
    }})
}
