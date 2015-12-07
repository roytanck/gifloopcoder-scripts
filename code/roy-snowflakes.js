function onGLC(glc) {
	glc.loop();
	// glc.playOnce();
	glc.size( 400, 400 );
	glc.setDuration( 2 );
	glc.setFPS( 25 );
	//glc.setMode( "single" );
	//glc.setEasing( false );
	glc.setMaxColors( 32 );
	glc.setQuality( 10 );
	var list = glc.renderList,
		width = glc.w,
		height = glc.h,
		color = glc.color;

	// your code goes here:
	glc.styles.backgroundColor = '#003366';
	var grid = 5;
	var padding = 30;
	var size = ( width - 2 * padding ) / grid; 
	var points = 6;

	for( var x=0; x<grid; x++ ){
		for( var y=0; y<grid; y++ ){

			for( var i=0; i<2; i++ ){
				list.addPoly({
					x: padding + ( x * size + size/2 ),
					y: padding + y * size + size/2,
					radius: [ size/8, size/3 ],
					sides: points,
					stroke: true,
					strokeStyle: 'white',
					lineWidth: 1.5,
					rotation: 180 / points,
					fill: false,
					phase: Math.random()
				});
			}

			list.addStar({
				x: padding + x * size + size/2,
				y: padding + y * size + size/2,
				outerRadius: [ size/2.5, size/6 ],
				innerRadius: 0,
				points: points,
				stroke: true,
				strokeStyle: 'white',
				lineWidth: 1.5,
				rotation: 180 / points,
				fill: false,
				phase: Math.random()
			});

		}
	}

}