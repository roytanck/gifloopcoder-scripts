function onGLC(glc) {
	glc.loop();
	glc.size( 400, 400 );
	glc.setDuration( 3 );
	glc.setFPS( 25 );
	glc.setMode( "single" );
	glc.setEasing( false );
	glc.setMaxColors( 128 );
	glc.setQuality( 1 );
	var list = glc.renderList,
		width = glc.w,
		height = glc.h,
		color = glc.color;

	// your code goes here:
	glc.styles.backgroundColor = color.rgba( 0, 40, 10, 1 );
	var lines = 50;
	var targets = 11;
	var rad = width/2 - 20;

	// grid
	list.addGrid({
		x: 0,
		y: 0,
		w: width,
		h: height,
		gridSize: 20,
		lineWidth: 1,
		strokeStyle: color.rgba( 150, 255, 200, 0.3 )
	});

	// axis lines
	for( var i=0; i<2; i++ ){
		list.addLine({
			x0: i ? 0 : width/2,
			y0: i ? height/2 : 0,
			x1: i ? width : width/2,
			y1: i ? height/2 : height,
			lineWidth: 1,
			strokeStyle: color.rgba( 150, 255, 200, 0.4 )
		});
	}

	// outer circle
	list.addCircle({
		x: width/2,
		y: height/2,
		radius: rad,
		fill: false,
		stroke: true,
		strokeStyle: color.rgba( 150, 255, 200, 1 ),
		lineWidth: 1.5
	});

	// bleep, bleep
	for( var i=0; i<lines; i++ ){
		list.addRay({
			x: width/2,
			y: height/2,
			length: rad,
			angle: [ 0, 360 ],
			lineWidth: 3,
			strokeStyle: color.rgba( 150, 255, 200, (1-(i/lines))*0.8 ),
			phase: 1 - i/360
		});
	}

	// targets
	for( var i=0; i<targets; i++ ){
		var angle = Math.random() * ( 2 * Math.PI );
		var dist = 40 + Math.random() * ( rad - 60 );
		list.addCircle({
			x: width/2 + Math.sin( angle ) * dist,
			y: height/2 - Math.cos( angle ) * dist,
			radius: [ 6, 2 ],
			fill: true,
			fillStyle: [ color.rgba( 150, 255, 200, 1 ), color.rgba( 150, 255, 200, 0 ) ],
			stroke: false,
			shadowColor: [ color.rgba( 150, 255, 200, 1 ), color.rgba( 150, 255, 200, 0 ) ],
			shadowOffsetX: 0,
			shadowOffsetY: 0,
			shadowBlur: 10,
			phase: 1 - ( ( angle - Math.PI/2.05 )  / ( 2 * Math.PI ) ),
		});
	}

}