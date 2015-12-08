function onGLC(glc) {
	glc.loop();
	// glc.playOnce();
	glc.size( 400, 400 );
	glc.setDuration( 10 );
	glc.setFPS( 25 );
	glc.setMode( "single" );
	glc.setEasing( false );
	glc.setMaxColors( 16 );
	glc.setQuality( 1 );
	var list = glc.renderList,
		width = glc.w,
		height = glc.h,
		color = glc.color;

	// your code goes here:
	glc.styles.backgroundColor = '#55665c';

	// grid
	list.addGrid({
		x: 0,
		y: 0,
		w: width,
		h: height,
		gridSize: 20,
		lineWidth: 1,
		strokeStyle: color.rgba( 255, 255, 255, 0.3 )
	});

	// axis lines
	for( var i=0; i<2; i++ ){
		list.addLine({
			x0: i ? 0 : width/2,
			y0: i ? height/2 : 0,
			x1: i ? width : width/2,
			y1: i ? height/2 : height,
			lineWidth: 1,
			strokeStyle: color.rgba( 255, 255, 255, 0.4 )
		});
	} 

	// container
	var c = list.addContainer({
		x: width/2,
		y: height/2,
		rotation: [ 0, 360 ]
	});
	var prev = c;
	var segments = 13;
	var length = 27;
	var nr = 15;

	for( var i=0; i<nr; i++ ){
		prev = c;

		for( var a=0; a<segments; a++ ){

			var angle = Math.random() * 2 * Math.PI;
			var len = length/2 + Math.random() * ( length / 2 );
			var lr = ( Math.random() < 0.5 );

			var prev = list.addContainer({
				x: Math.sin( angle ) * len,
				y: -Math.cos( angle ) * len,
				rotation: lr ? [ 0, 360 ] : [ 360, 0 ],
				parent: prev,
				phase: Math.random()
			});

		}

		list.addCircle({
			x: 0,
			y: 0,
			radius: 5,
			fill: true,
			fillStyle: color.rgba( 255, 255, 255, 1 ),
			stroke: false,
			shadowColor: color.rgba( 0, 0, 0, 0.15 ),
			shadowOffsetX: 3,
			shadowOffsetY: 3,
			shadowBlur: 0,
			parent: prev
		});

	}

}