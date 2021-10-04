window.addEventListener("load", () =>{
	const canvas = document.querySelector("#canvas");
	const context = canvas.getContext("2d");

	// Resizing
		canvas.height = window.innerHeight-130;
		canvas.width = window.innerWidth-130;
	

	// Variables
	let painting = false;

	// Takes in mouse position, with regard to relative sizing
	function getMousePos(canvas, e) {
		var rect = canvas.getBoundingClientRect();
		return {
			x: e.clientX - rect.left,
			y: e.clientY - rect.top
		}
	}

	// Begins drawing function
	function startPosition(e) {
		painting = true;
		draw(e);
	}

	// Ends drawing function
	function endPosition() {
		painting = false;
		context.beginPath();
	}

	// Creates strokes
	function draw(e) {
		var pos = getMousePos(canvas, e);

		if (!painting) return;
		context.lineCap = "round";
		context.globalAlpha = 0.5;

		context.lineTo(pos.x, pos.y);
		context.stroke();
		context.beginPath();
		context.moveTo(pos.x, pos.y);
	}

	// EventListeners
	canvas.addEventListener("mousedown", startPosition);
	canvas.addEventListener("mouseup", endPosition);
	canvas.addEventListener("mousemove", draw);

});
	// Resizes window after page is loaded
window.addEventListener("resize", () =>{
	canvas.height = window.innerHeight-50;
	canvas.width = window.innerWidth-50;
});
	// Changes future stroke colors
	function changeColor(color) {
		const canvas = document.querySelector("#canvas");
		const context = canvas.getContext("2d");
		context.globalAlpha = 0.5;
		context.strokeStyle = color;
	}

	function changeSize(size) {
		const canvas = document.querySelector("#canvas");
		const context = canvas.getContext("2d");
		context.lineWidth = size;
	}

	// Changes entire canvas color, clears strokes
	function changeCanvas(color) {
		const canvas = document.querySelector("#canvas");
		const context = canvas.getContext("2d");
		context.globalAlpha = 1;
		context.fillStyle = color;
		context.fillRect(0,0, canvas.width, canvas.height);
	}

	// Clears canvas of strokes
	function clearCanvas() {
		const canvas = document.querySelector("#canvas");
		const context = canvas.getContext("2d");
		context.clearRect(0, 0, canvas.width, canvas.height);
	}

	