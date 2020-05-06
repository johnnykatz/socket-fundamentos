const { io } = require('../server')

io.on('connection', (client) => {
    console.log('usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        'mensaje': 'Bienvenido'
    })


    client.on('disconnect', () => {
        console.log('usuario desconectado')
    });

    //Escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);


        // console.log(mensaje);
        // if (mensaje.usuario) {
        //     callback({
        //         respuesta: 'todo salio bien'
        //     });
        // } else {
        //     callback({
        //         respuesta: 'todo salio MAL!!!@@@#$$'
        //     });
        // }

    })

});