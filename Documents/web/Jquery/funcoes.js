// JQuery -> Sintaxe
// $(seletor).acao();

$(document).ready(function(){
	console.log("documento carregado. ");
	$("p").click(function(){
		$(this).hide();
	});
	$("button[name='exibir']").click(function(){
		$("#links").show();
		$("#texto").hide();
	});
	$("button[name='ocultar']").click(function(){
		$("#links").hide();
		$("#texto").hide();
	});
	$("button[name='mudar']").click(function(){
		$("links").toggle("slow");
	});
});
