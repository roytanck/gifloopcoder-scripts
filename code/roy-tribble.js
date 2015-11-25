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
	var points = 8;
	var nr = 7;
	var circlesize = 60;
	var maxsize = 120;

	for( var i=0; i<nr; i++ ){
		list.addStar({
			points: points,
			x: width/2 + Math.sin( (i*2*Math.PI)/nr ) * circlesize,
			y: height/2 + -Math.cos( (i*2*Math.PI)/nr ) * circlesize,
			innerRadius: [ maxsize, -maxsize ],
			outerRadius: [ -maxsize, maxsize ],
			rotation: [ 0, 360 ],
			fill: true,
			stroke: false,
			/*fillStyle: color.animHSV( i*(360/nr), ( i*(360/nr) )+60, 1, 1, 1, 1 ),*/
			fillStyle: 'rgba(0,60,20,0.65)',
			strokeStyle: 'rgba(0,0,100,1)',
			/*phase: (i/nr)*/
		});
	}

/*	list.addStar({
		points: points,
		x: width/2,
		y: height/2,
		innerRadius: [ 180, 0 ],
		outerRadius: [ 0, 180 ],
		rotation: [ 0, 360 ],
		fill: true,
		stroke: false,
		fillStyle: color.animHSV(0, 60, 1, 1, 0, 1),
		strokeStyle: 'rgba(0,0,100,1)',
	});*/

}