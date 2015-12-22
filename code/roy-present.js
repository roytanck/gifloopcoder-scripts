function onGLC(glc) {
	glc.loop();
	glc.size(400, 400);
	glc.setDuration(5);
	glc.setFPS(25);
//     glc.setMode('single');
//     glc.setEasing(false);
	glc.setMaxColors( 256 );
	glc.setQuality( 1 );
	var list = glc.renderList,
		width = glc.w,
		height = glc.h,
		color = glc.color;

	// your code goes here:
	glc.styles.backgroundColor = color.rgba( 30, 50, 70, 1 );
	var lw = 8;
	var lw2 = 8;
	var col1 = color.rgba( 40, 180, 40, 1 );
	var col2 = color.rgba( 255, 60, 40, 1 );

	// box outlines
	list.addSegment({
		x0: width/2 - 120,
		y0: height/2 - 80,
		x1: width/2 - 120,
		y1: height/2 + 80,
		lineWidth: lw,
		stroke: true,
		strokeStyle: col1,
		segmentLength: 160,
	});
	
	list.addSegment({
		x0: width/2 + 120,
		y0: height/2 + 80,
		x1: width/2 + 120,
		y1: height/2 - 80,
		lineWidth: lw,
		stroke: true,
		strokeStyle: col1,
		segmentLength: 160
	});

	list.addSegment({
		x0: width/2 - 120,
		y0: height/2 - 80,
		x1: width/2,
		y1: height/2 - 120,
		lineWidth: lw,
		stroke: true,
		strokeStyle: col1,
		segmentLength: 160
	});

	list.addSegment({
		x0: width/2 + 120,
		y0: height/2 - 80,
		x1: width/2,
		y1: height/2 - 120,
		lineWidth: lw,
		stroke: true,
		strokeStyle: col1,
		segmentLength: 160
	});

	list.addSegment({
		x0: width/2 - 120,
		y0: height/2 + 80,
		x1: width/2,
		y1: height/2 + 120,
		lineWidth: lw,
		stroke: true,
		strokeStyle: col1,
		segmentLength: 160
	});

	list.addSegment({
		x0: width/2 + 120,
		y0: height/2 + 80,
		x1: width/2,
		y1: height/2 + 120,
		lineWidth: lw,
		stroke: true,
		strokeStyle: col1,
		segmentLength: 160
	});

	list.addSegment({
		x1: width/2 - 120,
		y1: height/2 - 80,
		x0: width/2,
		y0: height/2 - 40,
		lineWidth: lw,
		stroke: true,
		strokeStyle: col1,
		segmentLength: 160
	});

	list.addSegment({
		x0: width/2 + 120,
		y0: height/2 - 80,
		x1: width/2,
		y1: height/2 -40,
		lineWidth: lw,
		stroke: true,
		strokeStyle: col1,
		segmentLength: 160
	});

	list.addSegment({
		x0: width/2,
		y0: height/2 - 40,
		x1: width/2,
		y1: height/2 + 120,
		lineWidth: lw,
		stroke: true,
		strokeStyle: col1,
		segmentLength: 160
	});

	// ribbon
	
	list.addSegment({
		x0: width/2 + 60,
		y0: height/2 - 60,
		x1: width/2 - 60,
		y1: height/2 - 100,
		lineWidth: lw2,
		stroke: true,
		strokeStyle: col2,
		segmentLength: 160
	});

	list.addSegment({
		x0: width/2 + 60,
		y0: height/2 - 100,
		x1: width/2 - 60,
		y1: height/2 - 60,
		lineWidth: lw2,
		stroke: true,
		strokeStyle: col2,
		segmentLength: 160
	});
	
	list.addSegment({
		x0: width/2 -60,
		y0: height/2 - 60,
		x1: width/2 - 60,
		y1: height/2 + 100,
		lineWidth: lw2,
		stroke: true,
		strokeStyle: col2,
		segmentLength: 160
	});

	list.addSegment({
		x0: width/2 + 60,
		y0: height/2 + 100,
		x1: width/2 + 60,
		y1: height/2 - 60,
		lineWidth: lw2,
		stroke: true,
		strokeStyle: col2,
		segmentLength: 160
	});

	// knot
	list.addArcSegment({
		x: width/2+10,
		y: height/2 - 116,
		radius: 30,
		lineWidth: lw2,
		stroke: true,
		strokeStyle: col2,
		rotation: 90,
		arc: [0,720]
	});

	list.addArcSegment({
		x: width/2-10,
		y: height/2 - 110,
		radius: 30,
		lineWidth: lw2,
		stroke: true,
		strokeStyle: col2,
		rotation: -90,
		arc: [0,720]
	});

}