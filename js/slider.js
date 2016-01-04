var images = ["img/joel_profile.jpg","img/img1.jpg","img/img2.jpg"
,"img/img3.jpg", "img/img4.jpg", "img/img5.jpg", "img/img6.jpg"]

var imageNumber = 0;
var imageLength = images.length - 1;

function slider(x){
	imageNumber += x;
//Slide show will start over when array length is ended
	if (imageNumber > imageLength) {imageNumber = 0;
	}
	
	if (imageNumber < 0) {
		imageNumber = imageLength;
	}

	document.getElementById('slideshow').src = images[imageNumber];
	
	return false;
}

function autoRun () {
	setInterval("slider(1)", 5000)
}