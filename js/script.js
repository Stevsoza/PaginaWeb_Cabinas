//funcion que cambia el estado del menú en tamaños de dispositivos
//telefónos o tablets
$(function(){
    $(".toggle").click(function(){
        $(".nav-bar-100").toggle("slow");
        $("body").toggleClass("ocultar");               
    });
});


//intenta hacer funcion que solo se ejecuta en la pagina de reservaciones
//en el formulario devuelve mensaje cada que se limpia el formulario
try {
    var enviarDatos = document.getElementById("env");

    enviarDatos.addEventListener("click",(e)=>{
        console.log(enviarDatos);
        if(e.target.id == "boton1"){
        mensaje();
            e.stopPropagation();
        }
    });

} catch (err) {
    console.log("Ocurrio un error: "+err);
}

//funcion que se ejecuta cuando el escuchador de eventos detecta
//que se dio al boton con el id 'boton1'
function mensaje(){
    alert("Los datos han sido limpiados del formulario")
}



