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
		height = glc.h,
		color = glc.color;

	// your code goes here:
	var points = 6;
	var nr = 12;
	var circlesize = 275;
	var maxsize = 600;

	list.addRect({
		x: width/2,
		y: height/2,
		w: width,
		h: height,
		fill: true,
		fillStyle: '#ffcc11'
	});

	for( var i=0; i<nr; i++ ){
		list.addStar({
			points: points,
			x: width/2 + Math.sin( (i*2*Math.PI)/nr ) * circlesize,
			y: height/2 + -Math.cos( (i*2*Math.PI)/nr ) * circlesize,
			innerRadius: [ -maxsize, maxsize ],
			outerRadius: [ maxsize, -maxsize ],
			rotation: [ 0, 120 ],
			fill: true,
			stroke: false,
			fillStyle: 'rgba(0,17,102,0.8)',
			strokeStyle: 'rgba(0,0,100,1)',
		});
	}

}