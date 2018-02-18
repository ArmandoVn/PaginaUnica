var alerta = function(){
	if ($('#correo').val() === '' || $('#nombre').val() === '' || $('#ap1').val() === '' || $('#ap2').val() === '') {
		alert("Campo vacio.");
	}
	else{
		alert("Se han enviado los datos con exito!!");
	}
}