$(document).ready(function() {
	

});



async function iniciarSesion(){
	//creamos una variable de tipo array que contenga los datos
	let datos={};
	//capturamos los datos con el id de los inputs
	datos.email=document.getElementById('txtEmail').value;
	datos.password=document.getElementById('txtPassword').value;


	
  const request = await fetch('api/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body:JSON.stringify(datos)
  });
  
  
  const respuesta = await request.text();//manera si hay una sesion de usuario

  if(respuesta=="OK"){
	window.location.href="usuarios.html";
  }else{
	alert("Las credenciales no son correcta.Intente de nuevo")
  }
}