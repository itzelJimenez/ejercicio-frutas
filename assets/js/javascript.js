function nuevasFrutas (){
	//Crear un elemento en html de tipo Lista
	var nodoTipoLista = document.createElement("LI");

	//Obtener del formulario la fruta a agregar
	var frutaAIndexar = document.getElementById("fruta").value;

	//Como html sólo reconoce el texto como tipo de texto nodo, creamos un texto nodo sobre la fruta a indexar
	var convertirFrutaATextoNodo = document.createTextNode(frutaAIndexar);

	//Obtenemos la lista con un document.getElementById desde el html y lo almacenamos en una variable
	var lista = document.getElementById('lista');

	//Le agregamos al elemento lista que creamos el atributo de la fruta a indexar convertido en texto nodo.
	nodoTipoLista.appendChild(convertirFrutaATextoNodo);

	//Como la variable nodoTipoLista ya contiene los atributos de la fruta a indexar, ahora lo atribuiremos a la lista ordenada del html.
	//En otras palabras nos permitirá insertar en el documento html un elemento de tipo "LI" (lista) sobre la lista existente en html.
	lista.appendChild(nodoTipoLista);
}
