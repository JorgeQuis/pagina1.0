function cambiarConcepto(oracion1, oracion2, parrafo) {
	
	if(parrafo.innerHTML==oracion1) {
		parrafo.innerHTML = oracion2;
	} else {
		parrafo.innerHTML = oracion1;
	}
}
