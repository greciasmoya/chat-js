//Dentro del command pront creamso una carpeta, instalamos el socket y configuramos nuestros datos.
var app = require('express')(); 
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Creamos el localhost en el puerto 3000 y ponemos * para que nos ayude a coger bien el puerto.
var port = process.env.PORT || 3000; 

//Hacemos la conexión con el html
app.get('/', function(req, res){
res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
socket.on('chat message', function(msg){
io.emit('chat message', msg);
    });

});

/*Para que nos pueda crear la conexión con el localhost, 
llamamos al puerto que hemos elegido y ponemos el localhost:3000 en nuestro navegador.*/
http.listen(port, function(){
console.log('Escuchando en puerto *:' + port);
});
