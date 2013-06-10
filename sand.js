var height=500
var width=600
var pixelSize = 2
var delay=150
var sands = []
var canvas = document.getElementById('sandCanvas');
var context = canvas.getContext('2d')


function loadSand() {
	canvas.width = width
	canvas.height = height

	context.fillStyle = "black"
	context.fillRect(0,0,width,height)

	setTimeout(function() { runSand() }, delay)
}

function createSpec() {
	newSpecX = Math.round(Math.random() * (width / pixelSize))
	newSpecY = 0

	newSpec = {
		y: newSpecY,
		x: newSpecX
	}

	sands.push(newSpec)
}

function runSpecs() {
	//move
	for(spec in sands) {
		sands[spec].y = sands[spec].y + 1
	}

	//remove

	drawSpecs()
}

function drawSpecs() {
	context.fillStyle = "black"
	context.fillRect(0,0,width,height)

	for(spec in sands) {
		context.fillStyle = "blue"
		context.fillRect(sands[spec].x * pixelSize, sands[spec].y * pixelSize, pixelSize, pixelSize)
	}
}

function runSand() {
	createSpec()
	runSpecs()
	setTimeout(function() { runSand() }, delay)
}


$(document).ready(function() {
	loadSand()

	$("#delayRange").change(function(e) {
		delay = parseInt($("#delayRange").val())
		$("#delay").text(delay)
	})
})