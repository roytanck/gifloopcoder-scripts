function onGLC(glc) {
	glc.loop();
	// glc.playOnce();
	glc.size(400, 400);
	glc.setDuration(5);
	glc.setFPS(30);
	glc.setMode("single");
	glc.setEasing(false);
	glc.setMaxColors(8);
	glc.styles.backgroundColor = '#ffee99';
	var list = glc.renderList,
		width = glc.w,
		height = glc.h,
		color = glc.color;

	// your code goes here:
	var points = 6;
	var nr = 12;
	var circlesize = 275;
	var maxsize = 350;

	for( var i=0; i<nr; i++ ){
		var factor = (i*2*Math.PI)/nr;
		list.addStar({
			points: points,
			x: width/2 + Math.sin( factor ) * circlesize,
			y: height/2 + -Math.cos( factor ) * circlesize,
			innerRadius: [ -maxsize, maxsize ],
			outerRadius: [ maxsize, -maxsize ],
			rotation: [ 0, 120 ],
			fill: true,
			stroke: false,
			fillStyle: 'rgba(0,50,102,1)',
		});
	}

}