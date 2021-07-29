function mudarEstado(oculta) {

	var display = document.getElementById(oculta).style.display;
	if (display == "none") {
		document.getElementById(oculta).style.display = 'block';

	}else {
		document.getElementById(oculta).style.display = 'none';
	}

}

function aviso(protegido) {

	var display = document.getElementById(protegido).style.display;
	if (display == "none") {
		document.getElementById(protegido).style.display = 'block';

	}else {
		document.getElementById(protegido).style.display = 'none';
	}
}




    