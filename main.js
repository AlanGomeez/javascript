alert("Bienvenido a VZ, laboratorio en linea");
let usuario = prompt("Ingrese su usuario");

while(usuario != "alan"){
    alert("Usuario incorrecto");
    usuario = prompt("Vuelva a ingresar su usuario.");
}

alert("Bienvenido " + usuario);
let turno = prompt("Ingrese su fecha de turno sin espacios");
if(turno = 3107){
    alert("Su turno es el 31/07")
}else{
    alert("Vuelva a ingresar su turno nuevamente")
}
// turno = prompt("Quiere reprogramarlo?");
// switch (turno) {
//     case "No":
//         alert("perfecto")
//         return
//         break;
//     case "Si":
//         alert("Que fecha quiere?")
//         return
//         break;   
//     default:
//         break;
// }


// function saludar() {
//     let nombre = prompt("ingrese el nombre");
//     alert(`su nombre es ${nombre}`);
// }   

// saludar();
