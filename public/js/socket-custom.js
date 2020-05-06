var socket = io();


//ON para escuchar 
socket.on('connect', function() {
    console.log('conectado al servidor');
});
//ON para escuchar 
socket.on('disconnect', function() {
    console.log('perdimos conexion con el servidor')
})


//emit para emitir mensaje
socket.emit('enviarMensaje', {
    usuario: 'Cesar',
    mensaje: 'hola mundo'
}, function(respuesta) {
    console.log(respuesta);
})




//escuchar mensaje del server
socket.on('enviarMensaje', function(mensaje) {
    console.log('Mensaje del servidor ', mensaje)
})