function onGLC(glc) {
	glc.loop();
	// glc.playOnce();
	glc.size(420, 100);
	glc.setDuration(1.5);
	glc.setFPS(20);
	glc.setMode("single");
	glc.setEasing(false);
	glc.setMaxColors(8);
	var list = glc.renderList,
		width = glc.w,
		height = glc.h,
		color = glc.color;

	// your code goes here:
	var points = 5;
	var nr = 5;

	for( var i=0; i<nr; i++ ){
		list.addStar({
			points: points,
			x: i*80 + 50,
			y: height/2,
			innerRadius: 18	,
			outerRadius: 35,
			rotation: [ 0, 360/points ],
			fill: true,
			stroke: false,
			fillStyle: 'rgba(0,50,102,1)',
			/*phase: i/nr*/
		});
	}

}