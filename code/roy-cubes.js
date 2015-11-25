function onGLC(glc) {
	glc.loop();
	// glc.playOnce();
	glc.size(400, 400);
	glc.setDuration(5);
	glc.setFPS(30);
	glc.setMode("single");
	glc.setEasing(false);
	// glc.setMaxColors(256);
	var list = glc.renderList,
		width = glc.w,
		height = glc.h;

	// your code goes here:
	var maxsize = 800;
	var nr = 31;

	glc.styles.lineWidth = 4;

/*	list.addRect({
		x: width/2,
		y: height/2,
		w: width,
		h: height,
		fill: true,
		fillStyle: '#99aaee'
	});*/

	for( var i = 0; i < nr; i++ ){
		var size = Math.sin( (i*2*Math.PI)/nr ) * maxsize;
		list.addCube({
			x: width/2,
			y: height/2,
			z: [0, 100],
			rotationX: [0, 180],
			rotationY: [0, 180],
			rotationZ: [0, 180],
			size: [ size, 0 ],
			strokeStyle: ['rgba(0,0,0,0)','rgba(0,0,0,1)'],
			phase: i/nr
		});

	}

}