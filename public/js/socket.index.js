
var socket = io();

$('#btn-reiniciar').on('click', function(){

    socket.emit('reiniciarConteo', null, function (resp){

        if(resp.ok){
            // var audio = new Audio('audio/new-ticket.mp3');
            //  audio.play();
        }else{
            alert('Problemas para reiniciar')
        }

    });

});

