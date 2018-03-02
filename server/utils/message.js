var moment = require("moment");

var generateMessage = (from, text) => {
  return {
    from,
    text,
    createdAt: moment().valueOf()
  };
};
var generateLocationMessage = (from, latutide, longitude) => {
  return {
    from,
    url: `https://www.google.ru/maps/?q=${latutide},${longitude}`,
    createdAt: moment().valueOf()
  };
};

module.exports = {generateMessage,generateLocationMessage};
