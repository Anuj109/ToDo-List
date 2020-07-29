 //strike-through clicked li
 $("ul").on("click","li",function(){
 	$(this).toggleClass("completed");
 })

 //remove li when delete is clicked
 $("ul").on("click","span",function(event){
 	event.stopPropagation();
 	$(this).parent().fadeOut(500,function(){
 		$(this).remove();
 	})
 })

//add new todo
$("input[type='text']").on("keypress",function(event){
	if(event.which===13){
		var todoText=$(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i> </span>" + todoText + "</li>");

	}
})

$(".add").on("click",function(){
	$("input").slideToggle();
})