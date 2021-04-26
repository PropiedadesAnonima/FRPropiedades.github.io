// funcion para el formulario ingresar sesion
function validarusuario()
{
    var usuario, clave;
    usuario = document.getElementById("usuario").value;
    clave = document.getElementById("clave").value;
    correovalido = /[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;  // para validar si es un correo electronico

    //validacion de campos en blanco
    if (usuario === "" || clave === ""){
        alert(" TODOS LOS CAMPOS SON REQUERIDOS" );
		// sino se cumple la condicion
        return false;
    } 
    else if ( usuario.length > 20 || (!correovalido) ) 
         {
            alert(" INGRESE UN CORREO VALIDO ");
            return false;
        }
    else  if ( clave.length > 10 )
    {
       alert(" INGRESE SU CLAVE NUEVAMENTE ");
       return false;
    }
    else {
            alert("BIENVENIDO");
        }
}