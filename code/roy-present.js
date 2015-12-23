function onGLC(glc) {
	glc.loop();
	glc.size( 400, 400 );
	glc.setDuration( 5 );
	glc.setFPS( 25 );
	// glc.setMode('single');
	// glc.setEasing(false);
	glc.setMaxColors( 256 );
	glc.setQuality( 1 );
	var list = glc.renderList,
		width = glc.w,
		height = glc.h,
		color = glc.color;

	// your code goes here:
	glc.styles.backgroundColor = color.rgba( 30, 50, 70, 1 );
	var lw1 = 7;
	var lw2 = 7;
	var col1 = color.rgba( 40, 180, 60, 1 );
	var col2 = color.rgba( 255, 60, 40, 1 );

	var c = list.addContainer({
		x: width/2,
		y: height/2 + 10,
	});
	
	// box outlines
	var lines1 = [
		[ -120, -80, -120, 80 ],
		[ 120, 80, 120, -80 ],
		[ -120, -80, 0, -120 ],
		[ 120, -80, 0, -120 ],
		[ -120, 80, 0, 120 ],
		[ 120, 80, 0, 120 ],
		[ -120, -80, 0, -40 ],
		[ 120, -80, 0, -40 ],
		[ 0, -40, 0, 120 ]
	];

	for( var i=0; i<lines1.length; i++ ){
		list.addSegment({
			x0: lines1[i][0],
			y0: lines1[i][1],
			x1: lines1[i][2],
			y1: lines1[i][3],
			lineWidth: lw1,
			stroke: true,
			strokeStyle: col1,
			segmentLength: 160,
			parent: c,
			globalAlpha: getAlpha
		});
	}

	// ribbon
	var lines2 = [
		[ 60, -60, -60, -100 ],
		[ 60, -100, -60, -60 ],
		[ -60, -60, -60, 100 ],
		[ 60, 100, 60, -60 ]
	];
		
	for( var i=0; i<lines2.length; i++ ){
		list.addSegment({
			x0: lines2[i][0],
			y0: lines2[i][1],
			x1: lines2[i][2],
			y1: lines2[i][3],
			lineWidth: lw2,
			stroke: true,
			strokeStyle: col2,
			segmentLength: 160,
			parent: c,
			globalAlpha: getAlpha
		});
	}
	
	// knot
	var arcs = [
		[ 10, -116, 90 ],
		[ -10, -110, -90 ]
	];
	
	for( var i=0; i<arcs.length; i++ ){
		list.addArcSegment({
			x: arcs[i][0],
			y: arcs[i][1],
			radius: 30,
			lineWidth: lw2,
			stroke: true,
			strokeStyle: col2,
			rotation: arcs[i][2],
			arc: [0,720],
			parent: c,
			globalAlpha: getAlpha
		});        
	}

	function getAlpha( t ){
		return Math.min( 1, Math.sin( t*Math.PI )*2 );
	}
	
}