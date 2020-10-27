 function todoBien() {
   
  var usu=document.getElementById('usuario').value;
 var clav=document.getElementById('clave').value;
 if( usu==''||clav=='' ||usu.indexOf('@')== -1 ) {
 
 alert("No puede ingresar porque le falta '@' al Usuario o no completó todos los campos del formulario.")
 
 
   
}else{
  alert('Puede Ingresar')
  
}
 
 }

 

