$(document)
/*
.on("click", "#magellan-img", function() {
  console.log("image clicked");
})
*/
.on("mouseenter", "#magellan-img", function() {
  console.log("image entered");
	$('#magellan-item').animate({backgroundColor: "#80FF80"}, 'slow');
	//$('#magellan-item').css('background-color', 'LightGreen');
})
.on("mouseleave", "#magellan-img", function() {
  console.log("image exited");
	$('#magellan-item').animate({backgroundColor: "#fff"}, 'slow');
	//$('#magellan-item').css('background-color', 'White');
});
