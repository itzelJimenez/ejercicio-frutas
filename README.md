# ejercicio-frutas
PASOS PARA REALIZAR LA P�GINA
---
1. Formato est�tico al html: Primero hice un breve bosquejo de como quer�a que quedara mi p�gina, insert� estilos, importe letras y esas cosas. Despu�s insert� una lista <ol> con tres frutas y cre� un formulario donde el usuario pueda escribir el nombre de la fruta que desee indexar, junto con ello, cree un boton que llama a la funci�n nuevasFrutas(), misma que se encarga de realizar la acci�n de indexar cada elemento que se escriba en el input tipo texto.
---
2. En Javascript: Primero investigu� mucho al respecto de como sobreescribir el html reiteradas veces, lo intente con un for, con innerHTML, con condicionales y al final encontre que html reconoce los tipos de texto nodo. As� que dentro de la funci�n nuevasFrutas(); coloqu� lo siguiente. 
---
2.1 TEXTO NODO:
Todo lo que se quiera extraer e imprimir debe convertirse a texto nodo, por lo que primero extraje en una variable el valor que quiero convertir como. Despu�s convert� esa variable a texto nodo para que html pudiera interpretar e imprimir. 

-  var frutaAIndexar = document.getElementById("fruta").value;
- var convertirFrutaATextoNodo = document.createTextNode(frutaAIndexar);
---
2.2 CREAR UN ELEMENTO NODO TIPO LISTA: 
Html, nos permite crear elementos de diversos tipos dependiendo nuestras necesidades, como el caso lo requiere se necesita crear un elemento de tipo "LI" que significa de tipo lista.

- var nodoTipoLista = document.createElement("LI");
---
2.3 OBTENER EL ELEMENTO 'lista' DESDE HTML:
Obtuve el elemento 'lista' desde el html para decirle a js en donde deb�a colocarme la informaci�n. 

- var lista = document.getElementById('lista');

---
2.4 APPENDCHILD:
Nos permite decirle al html desde javascript en donde queremos colocar la informaci�n extraida y convertida en texto nodo. 
- Por lo que primero le decimos que nos coloque el nombre de la fruta extraida desde el formulario y convertida en texto nodo en el elemento creado de tipo lista.
- nodoTipoLista.appendChild(convertirFrutaATextoNodo);


- Una vez que tenemos la informaci�n en el elemento creado de tipo lista, el siguiente appendChild ser� atribuido a la variable lista(recordemos que esa variable fue extraida de html), con lo que html agregar� un valor diferente a la lista cada vez que se oprima el bot�n de Enviar. 

- lista.appendChild(nodoTipoLista);
---
RESULTADOS
Al cargar la p�gina web e ingresar algun dato en el campo de entrada y dar clic, el programa hace lo que se espera. 
NOTA: Falta optimizar funcionamiento. 
