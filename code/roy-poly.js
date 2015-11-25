function onGLC(glc) {
	glc.loop();
	// glc.playOnce();
	glc.size(400, 400);
	glc.setDuration(0.5);
	glc.setFPS(30);
	glc.setMode("single");
	glc.setEasing(false);
	// glc.setMaxColors(256);
	var list = glc.renderList,
		width = glc.w,
		height = glc.h;

	// your code goes here:
	var maxsize = 300;
	var nr = 50;
	var points = 7;

	glc.styles.lineWidth = 4;

	list.addRect({
		x: width/2,
		y: height/2,
		w: width,
		h: height,
		fill: true,
		fillStyle: '#99aaee'
	});

	for( var i = 0; i < nr; i++ ){
/*		var radius = Math.sin( (i*2*Math.PI)/nr ) * nr;
		list.addStar({
			points: points,
			x: width/2,
			y: height/2,
			innerRadius: i*7,
			outerRadius: i*7,
			rotation: [ i * 5, i*5 + (360/points) ],
			fill: false,
			stroke: true,
			fillStyle: [ 'rgba(0,0,255,1)', 'rgba(255,255,255,0)' ],
			strokeStyle: 'rgba(0,0,100,1)',
			phase: 1-(i/nr)
		});*/
		list.addPoly({
			sides: points,
			x: width/2/* + ( Math.sin( (i*2*Math.PI)/nr ) * radius )*/,
			y: height/2/* + ( Math.sin( (i*2*Math.PI)/nr ) * radius )*/,
			radius: i*7,
			rotation: [ i * 5, i*5 + (360/points) ],
			fill: false,
			stroke: true,
			fillStyle: [ 'rgba(0,0,255,1)', 'rgba(255,255,255,0)' ],
			strokeStyle: 'rgba(30,50,100,0.75)',
			phase: 1-(i/nr)
		});

	}

}