
// Comadno para establecer la conexion 

var socket = io(); 
var label = $('#lblNuevoTicket');
socket.on('connect', function(){
    console.log('Conectado al servidor'); 
})

socket.on('disconnect', function() {
    console.log('Desconectado del servidor')
})

socket.on('estadoActual', function(res) {
    label.text(res.actual)
})

socket.on('ReinicioGlobal', function(data){
    if(data.reiniciar){
        label.text('No hay ticket')
    }
})
$('button').on('click', function(){

    socket.emit('siguienteTicket', null, function (siguiente){
        label.text(siguiente)
    });

});

