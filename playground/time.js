//January 1st 1970 00:00:00am
var moment = require("moment");

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 12334;
var date = moment(createdAt);

console.log(date.format("h:mm a "));
