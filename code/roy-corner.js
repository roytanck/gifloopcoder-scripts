function onGLC(glc) {
	glc.loop();
	glc.size( 600, 400 );
	glc.setDuration( 5 );
	glc.setFPS( 25 );
	//glc.setMode('single');
	//glc.setEasing(false);
	glc.setMaxColors( 64 );
	glc.setQuality( 1 );
	var list = glc.renderList,
		width = glc.w,
		height = glc.h,
		color = glc.color;

	// your code goes here:
	glc.styles.backgroundColor = color.rgba( 0, 0, 0, 1 );
	var nr = 39;
	var v1 = 50;
	var v2 = width -50;
	var padding = 0.1
	var dist = ( height * (1-padding*2) ) / nr;
	
	for( var i=0; i<nr; i++ ){

		list.addSegment({
			x0: v1,
			y0: height/2,
			x1: width/2,
			y1: height * padding + dist * i,
			segmentLength: 180,
			strokeStyle: color.hsva( 200, 1, 1, 1 ),
			lineWidth: 4,
			shadowColor: color.hsva( 200, 1, 1, 1 ),
			shadowOffsetX: 0,
			shadowOffsetY: 0,
			shadowBlur: 10,
			phase: (i/nr)/7,
			globalAlpha: [ 0, 1 ]
		});

		list.addSegment({
			x0: v2,
			y0: height/2,
			x1: width/2,
			y1: height * padding + dist * i,
			segmentLength: 180,
			strokeStyle: color.hsva( 210, 1, 1, 1 ),
			lineWidth: 2,
			shadowColor: color.hsva( 210, 1, 1, 1 ),
			shadowOffsetX: 0,
			shadowOffsetY: 0,
			shadowBlur: 10,
			phase: (i/nr)/7,
			globalAlpha: [ 0, 1 ]
		});
		
	}

}