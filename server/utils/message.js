var generateMessage = (from, text) => {
  return {
    from,
    text,
    createdAt: new Date().getTime()
  };
};
var generateLocationMessage = (from, latutide, longitude) => {
  return {
    from,
    url: `https://www.google.ru/maps/?q=${latutide},${longitude}`,
    createdAt: new Date().getTime()
  };
};

module.exports = {generateMessage,generateLocationMessage};
