$(document)
.on("mouseenter", "#magellan-img", function() {
	//console.log("image entered");
	$('#magellan-item').animate({backgroundColor: "#80FF80"}, 'slow');
})
.on("mouseleave", "#magellan-img", function() {
	//console.log("image exited");
	$('#magellan-item').animate({backgroundColor: "#fff"}, 'slow');
})
.on("mouseenter", "#beast-yucca-flats-img", function() {
	//console.log("image entered");
	$('#beast-yucca-flats-item').animate({backgroundColor: "#80FF80"}, 'slow');
})
.on("mouseleave", "#beast-yucca-flats-img", function() {
	//console.log("image exited");
	$('#beast-yucca-flats-item').animate({backgroundColor: "#fff"}, 'slow');
});
