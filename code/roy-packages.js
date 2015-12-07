function onGLC(glc) {
	glc.loop();
	// glc.playOnce();
	glc.size( 400, 400 );
	glc.setDuration( 2 );
	glc.setFPS( 30 );
	glc.setMode( "single" );
	//glc.setEasing( false );
	glc.setMaxColors( 32 );
	glc.setQuality( 1 );
	var list = glc.renderList,
		width = glc.w,
		height = glc.h,
		color = glc.color;

	// your code goes here:
	glc.styles.backgroundColor = '#446f88';
	var grid = 5;
	var size = width / grid;
	var points = 6;
	var angle = ( 120/360 ) * 2 * Math.PI;
	var dist = size;
	var transx = Math.sin( angle ) * dist;
	var transy = -Math.cos( angle ) * dist;

	for( var x=-(grid+1); x<(grid+1); x++ ){

		list.addLine({
			x0: width/2 + ( -grid * transx ) + ( x * transx ),
			y0: height/2 + ( x * transy ) - ( -grid * transy ) - Math.cos( angle ) * ( size/2.5 ),
			x1: width/2 + ( grid * transx ) + ( x * transx ),
			y1: height/2 + ( x * transy ) - ( grid * transy ) - Math.cos( angle ) * ( size/2.5 ),
			lineWidth: size/1.8,
			strokeStyle: color.rgba( 0, 0, 0, 0.3 ),

		});

		var linePhase = Math.random();

		for( var y=-(grid+1); y<(grid+1); y++ ){

			var xpos = width/2 + ( y * transx ) + ( x * transx );
			var ypos = height/2 + ( x * transy ) - ( y * transy );
			var nextxpos = width/2 + ( (y-1) * transx ) + ( x * transx );
			var nextypos = height/2 + ( x * transy ) - ( (y-1) * transy );

			list.addPoly({
				x: [ xpos, nextxpos ],
				y: [ ypos, nextypos ],
				radius: size/2.5,
				sides: points,
				stroke: true,
				strokeStyle: color.rgba( 0, 0, 0, 0.4 ),
				lineWidth: 1.5,
				rotation: 180 / points,
				fill: true,
				fillStyle: '#eecc8f',
				phase: linePhase
			});
			
			list.addStar({
				x: [ xpos, nextxpos ],
				y: [ ypos, nextypos ],
				outerRadius: size/2.5,
				innerRadius: 0,
				points: points/2,
				stroke: true,
				strokeStyle: color.rgba( 0, 0, 0, 0.4 ),
				lineWidth: 1.5,
				rotation: -180 / points,
				fill: false,
				phase: linePhase
			});

		}
	}

}