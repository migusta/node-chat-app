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
    console.log('New message', message);
});
