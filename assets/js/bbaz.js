$(document)
.on("click", "#magellan-img", function() {
  console.log("image clicked");
})
.on("mouseenter", "#magellan-img", function() {
  console.log("image entered");
	$('#magellan-item').css('background-color', 'LightGreen');
})
.on("mouseleave", "#magellan-img", function() {
  console.log("image exited");
	$('#magellan-item').css('background-color', 'White');
});
