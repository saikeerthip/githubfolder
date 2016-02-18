$(document).ready(function(){
		
	$("button").click(function(event){  //Button click event
		event.preventDefault(); //default action of the event will not be triggered.(Jquery Event Object Method)
		Calculation.performCalculation(this.value);		
	});
	var Calculation={
		display:function(v1){
			$("#display").val(v1);
		},
		clear:function(){
			$("#display").val(" ");
		},
		performCalculation:function(v2){
			var result="";
			var temp=$("#display").val();			
			if(temp=="0"){
				this.clear();
				result=v2; 
			}else if(v2=="c"){
				this.clear();
			}else if(v2=="="){
				result=eval(temp); // Javascript eval() function
			}else{
				result=temp+v2;
			}
			this.display(result);
		}
	}	
	$("#calculator").draggable();
});
	