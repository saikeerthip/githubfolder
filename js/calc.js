$(document).ready(function(){
	$("button#digit,button#zero").click(function(){
		var number = $(this).text();
		console.log(number);
		$("#display").val($("#display").val()+number);

	});

	$("button#operation").click(function(){
		$("#display").data("value1", $("#display").val());
		$("#display").val("");
		var op = $(this).text();
		console.log(op);
		$("#display").data("operation", op);

	});

	$("button#result").click(function(){
		var  number1 = $("#display").data("value1");
		var  operator = $("#display").data("operation");
		var number2 = $("#display").val();

		if(operator=='+'){
			var sum = parseInt(number1) + parseInt(number2);
			console.log(sum);
			$("#display").val(sum);
		} else if(operator=='-'){
			var subtraction = parseInt(number1) - parseInt(number2);
			$("#display").val(subtraction);
		} else if(operator=='*'){
			var multiply = parseInt(number1) * parseInt(number2);
			$("#display").val(multiply);
		} else if(operator=='/'){
			var division = parseInt(number1) / parseInt(number2);
			$("#display").val(division);
		}
		
	});

	$("#reset").click(function(){
	$("#display").val("");
	});

	$("#display").




});






