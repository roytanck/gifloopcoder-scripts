function onGLC(glc) {
	glc.loop();
	// glc.playOnce();
	glc.size( 400, 400 );
	glc.setDuration(2);
	glc.setFPS(30);
	glc.setMode("single");
	glc.setEasing(false);
	glc.setMaxColors(256);
	var list = glc.renderList,
		width = glc.w,
		height = glc.h,
		color = glc.color;

	// your code goes here:
	glc.styles.backgroundColor = '#ddeeff';
	var nr = 500;

	for( var i=0; i<nr; i++){

		var size = Math.random() * 100 + 20;

		list.addArrow({
			x: Math.random() * width,
			y: Math.random() * height,
			w: size,
			h: size,
			pointPercent: 0.6,
			shaftPercent: 0.3,
			rotation: [0,360],
			stroke: true,
			lineWidth: 1.5,
			strokeStyle: color.rgba( 0, 0, 0, 0.5 ),
			fill: true,
			fillStyle: '#99ccff',
			shadowColor: color.rgba( 0, 0, 0, 0.2 ),
			shadowOffsetX: 8,
			shadowOffsetY: 8,
			shadowBlur: 0,
		});
	}

}