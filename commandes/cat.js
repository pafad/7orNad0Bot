const randomCat = require("random-cat");
const rn = require("random-number");
exports.run = (client, message) => {
  var options = {
        min: 0,
        max: randomCat().length - 1,
        integer: true
    }
  var random_msg = rn(options);
    message.channel.sendCode("",randomCat()[random_msg])
    }})
}
