var socket = io();

socket.on('connect', function (){
  console.log("Connect to server");

  // socket.emit('createMessage', {
  //   from: 'Andrew',
  //   text: 'How r u?'
  // })
});

socket.on('disconnect', function () {
  console.log("Diconnected from server");
});

socket.on('newMessage', function(message) {
    var formattedTime = moment(message.createdAt).format("h:mm a");
    var template = jQuery("#message-template").html();
    var html = Mustache.render(template, {
      text: message.text,
      from: message.from,
      createdAt: formattedTime
    });

    jQuery("#messages").append(html);
});

socket.on('newLocationMessage', function (message) {
    var formattedTime = moment(message.createdAt).format("h:mm a");
    var template = jQuery("#location-message-template").html();
    var html = Mustache.render(template, {
      url: message.url,
      from: message.from,
      createdAt: formattedTime
    });

    jQuery("#messages").append(html);
});

jQuery("#message-form").on('submit',function(e){
  e.preventDefault();

  var messageBox = jQuery("[name=message]");

  socket.emit('createMessage', {
    from: 'User',
    text: messageBox.val()
  },function(){
     messageBox.val('');
  });
});

var locationButton = jQuery('#send-location');
locationButton.on('click', function () {
  if (!navigator.geolocation) {
    return alert('Geolocation not supported by your browser.');
  }

  locationButton.attr('disabled','disabled').text("Sending location...");

  navigator.geolocation.getCurrentPosition( function (position) {
    socket.emit("createLocationMessage", {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
    locationButton.removeAttr('disabled').text("Send location");
  }, function () {
    alert('Unable to fetch location.');
    locationButton.removeAttr('disabled').text("Send location");;
  })
});
