function nuevasFrutas (){
	var frutas=["Naranjas", "Peras", "Manzanas"]
	var temporal="";
	var lista=document.getElementById('lista').innerHTML
	var nuevaFruta=document.getElementById('fruta').value;
	var nuevoElemento=document.getElementById('otro');
	temporal=lista.value;
	for(i=0;i<frutas.length;i++){
	if(nuevoElemento == true){
		frutas.push(nuevaFruta).innerHTML;
	}
}
}