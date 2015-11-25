function onGLC(glc) {
	glc.loop();
	// glc.playOnce();
	glc.size(400, 400);
	glc.setDuration(5);
	glc.setFPS(30);
	// glc.setMode("single");
	// glc.setEasing(false);
	// glc.setMaxColors(256);
	var list = glc.renderList,
		width = glc.w,
		height = glc.h;

	// your code goes here:
	var x = 0;
	var y = 0;
	var grid = 8;
	var dist = 400 / grid;
	var maxradius = Math.sqrt( ( 0.5 * dist ) * ( 0.5 * dist ) + ( 0.5 * dist ) * ( 0.5 * dist ) );

	for( x = 0; x < grid; x++ ){
		for( y = 0; y < grid; y++ ){
			list.addCircle({
				x: x*dist + ( 0.5 * dist ),
				y: y*dist + ( 0.5 * dist ),
				radius: [ 0, maxradius ]
			});
		}
	}

	/*list.addCircle({
		x: [200,400],
		y: 200,
		radius: [20, 100],
		stroke: true,
		strokeStyle: "#ff0000",
		fillStyle: "yellow"
	});*/
}		