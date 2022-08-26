var count=0;
$(document).on("click","#submit",function(){
	var username=$("#username").val();
	var password=$("#password").val();
	var email=$("#emails").val();	
	var phone=$("#phoneno").val();						
	if((username.trim()).length==0 || (password.trim()).length==0 || (email.trim()).length==0||(phone.trim()).length==0)
	{
		alert("Blank space is not allowed");
		return false;
	}
	else if(count!=4)
	{
		alert("Invalid Entries are not allowed");
		return false;
	}
	else
	{
		return true;
	}
});
$(document).on("blur","#username",function(){
	var username=$("#username").val();	
	if((username.trim()).length==0)
	{
		$("#Error1").show();
 		$("#username").css({"border-bottom":"1px solid #FF0000"});
	}
	else
	{
		$("#Error1").hide();	
 		$("#username").css({"border-bottom":"1px solid #ced4d6"});
		count++;
	}
});
$(document).on("blur","#password",function(){
	var pass=$("#password").val();	
	var passwordformat= /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*-]).{8,}$/;
	if((pass.trim()).length==0)
	{
		$("#Error2").show();
		$("#ErrorInvalid2").hide();
 		$("#password").css({"border-bottom":"1px solid #FF0000"});			
	}
	else if(!pass.match(passwordformat))
	{	
		$("#Error2").hide();
		$("#ErrorInvalid2").show();
 		$("#password").css({"border-bottom":"1px solid #FF0000"});
	}
	else{
		$("#ErrorInvalid2").hide();
 		$("#password").css({"border-bottom":"1px solid #ced4d6"});
		count++;
	}
});
$(document).on("blur","#emails",function(){
	var email=$("#emails").val();	
	var emailformat =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if((email.trim()).length==0)
	{
		$("#Error3").show();
		$("#ErrorInvalid3").hide();
 		$("#emails").css({"border-bottom":"1px solid #FF0000"});
	}
	else if(!email.match(emailformat))
	{	
		$("#Error3").hide();
		$("#ErrorInvalid3").show();
 		$("#emails").css({"border-bottom":"1px solid #FF0000"});
	}
	else{
		$("#ErrorInvalid3").hide();
 		$("#emails").css({"border-bottom":"1px solid #ced4d6"});
		count++;
	}
});
$(document).on("blur","#phoneno",function(){
	var phone=$("#phoneno").val();	
	var phoneformat= /^(\d){10}$/;
	if((phone.trim()).length==0)
	{
		$("#Error4").show();
		$("#ErrorInvalid4").hide();	
 		$("#phoneno").css({"border-bottom":"1px solid #FF0000"});			
	}
	else if(!phone.match(phoneformat))
	{
		$("#Error4").hide();	
		$("#ErrorInvalid4").show();
 		$("#phoneno").css({"border-bottom":"1px solid #FF0000"});
	}
	else{
		$("#ErrorInvalid4").hide();
 		$("#phoneno").css({"border-bottom":"1px solid #ced4d6"});
		count++;
	}
});
$(document).on("blur","#address",function(){
	var addr=$("#address").val();
	var addressformat=/^[a-zA-Z0-9,.'-]{3,}$/;
	if((addr.trim()).length==0)
	{
		$("#Error5").show();
		$("#ErrorInvalid5").hide();
	}
	else if(!addr.match(addressformat))
	{
		$("#Error5").hide();	
		$("#ErrorInvalid5").show();
	}
	else{
		$("#ErrorInvalid5").hide();
		count++;
	}		
});