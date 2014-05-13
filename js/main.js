$(function(){
	var model = new $.Model();
	var main_view = new $.View($("#Main"));
	var main_control = new $.Controller(model, main_view);
});
