# ejercicio-frutas
PASOS PARA REALIZAR LA PÁGINA
---
1. Formato estético al html: Primero hice un breve bosquejo de como quería que quedara mi página, inserté estilos, importe letras y esas cosas. Después inserté una lista <ol> con tres frutas y creé un formulario donde el usuario pueda escribir el nombre de la fruta que desee indexar, junto con ello, cree un boton que llama a la función nuevasFrutas(), misma que se encarga de realizar la acción de indexar cada elemento que se escriba en el input tipo texto.
---
2. En Javascript: Primero investigué mucho al respecto de como sobreescribir el html reiteradas veces, lo intente con un for, con innerHTML, con condicionales y al final encontre que html reconoce los tipos de texto nodo. Así que dentro de la función nuevasFrutas(); coloqué lo siguiente. 
---
2.1 TEXTO NODO:
Todo lo que se quiera extraer e imprimir debe convertirse a texto nodo, por lo que primero extraje en una variable el valor que quiero convertir como. Después convertí esa variable a texto nodo para que html pudiera interpretar e imprimir. 

-  var frutaAIndexar = document.getElementById("fruta").value;
- var convertirFrutaATextoNodo = document.createTextNode(frutaAIndexar);
---
2.2 CREAR UN ELEMENTO NODO TIPO LISTA: 
Html, nos permite crear elementos de diversos tipos dependiendo nuestras necesidades, como el caso lo requiere se necesita crear un elemento de tipo "LI" que significa de tipo lista.

- var nodoTipoLista = document.createElement("LI");
---
2.3 OBTENER EL ELEMENTO 'lista' DESDE HTML:
Obtuve el elemento 'lista' desde el html para decirle a js en donde debía colocarme la información. 

- var lista = document.getElementById('lista');

---
2.4 APPENDCHILD:
Nos permite decirle al html desde javascript en donde queremos colocar la información extraida y convertida en texto nodo. 
- Por lo que primero le decimos que nos coloque el nombre de la fruta extraida desde el formulario y convertida en texto nodo en el elemento creado de tipo lista.
- nodoTipoLista.appendChild(convertirFrutaATextoNodo);


- Una vez que tenemos la información en el elemento creado de tipo lista, el siguiente appendChild será atribuido a la variable lista(recordemos que esa variable fue extraida de html), con lo que html agregará un valor diferente a la lista cada vez que se oprima el botón de Enviar. 

- lista.appendChild(nodoTipoLista);
---
RESULTADOS
Al cargar la página web e ingresar algun dato en el campo de entrada y dar clic, el programa hace lo que se espera. 
NOTA: Falta optimizar funcionamiento. 
