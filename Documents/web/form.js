function calcular(){
	var n1 = parseInt (document.dados.valor1.value);
	var n2 = parseInt(document.dados.valor2.value);

	if(document.dados.valor1.value.lenght ==0 || isNaN(n1)){
		//window.alert ("preencha o primeiro valor coretamente! ");
		document.getElementById("alertaV1").style.display="block";
		document.dados.valor1.classList.add("is-invalid");
		document.getElementById("labelV1").classList.add("text-danger");//liha com erro
		document.dados.valor1.value ="";
		document.dados.valor1.focus();
		return; 
	}
	document.getElementById("alertaV1").style.display="none";
	document.dados.valor1.classList.remove("is-invalid");
	//linhas que voltam os campos ao estado normal, depois de corrigidas as demandas 
	// linha de cima, ou isso -> document.dados.valor1.classList.add("is-valid");

		if(document.dados.valor2.value.lenght ==0 || isNaN(n2)){
		//window.alert ("preencha o segundo valor coretamente! ");
		document.getElementById("alertaV2").style.display="block";
		document.dados.valor2.classList.add("is-invalid");
		document.dados.valor2.value ="";
		document.dados.valor2.focus();
		return; 
	}
	document.getElementById("alertaV2").style.display="none";
	document.dados.valor2.classList.remove("is-invalid");


	var res = n1 + n2;
	document.dados.resultado.value = res;
}
function validar(campo)