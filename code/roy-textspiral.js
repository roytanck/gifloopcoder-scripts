function onGLC(glc) {
	glc.loop();
	glc.size( 320, 320 );
	glc.setDuration( 3 );
	glc.setFPS( 25 );
	glc.setMode( "single" );
	glc.setEasing( false );
	glc.setMaxColors( 32 );
	glc.setQuality( 1 );
	var list = glc.renderList,
		width = glc.w,
		height = glc.h,
		color = glc.color;

	// your code goes here:
	glc.styles.backgroundColor = color.rgba( 50, 80, 110, 1 );

	var nr = 200;
	var size = 330;
	var scale = 0.98;
	var str = 'GIFLOOPCODER';
	var letterAngle = 13;

	for( var i=0; i<nr; i++ ){
		var c = list.addContainer({
			x: width/2,
			y: height/2,
			rotation: [ i * letterAngle, ( i + str.length ) * letterAngle ]
		});

		var currentSize = getSize( i );
		var targetSize = getSize( i + str.length );

		list.addText({
			text: str.charAt( i % str.length ),
			x: 0,
			y: [ -currentSize, -targetSize ],
			rotation: 4,
			fontSize: [ currentSize/3, targetSize/3 ],
			fontWeight: 'bold',
			fontFamily: 'Roboto Condensed',
			fontStyle: 'normal',
			fillStyle: 'white',
			parent: c
		});

	}

	var gradient = color.createRadialGradient( 0, 0, 0, 0, 0, width/2 );
	gradient.addColorStop( 0, color.rgba( 50, 80, 110, 1 ) );
	gradient.addColorStop( 1, color.rgba( 50, 80, 110, 0 ));

	list.addCircle({
		x: width/2,
		y: height/2,
		radius: width/2,
		stroke: false,
		fill: true,
		fillStyle: gradient
	});

	function getSize( i ){
		return size * Math.pow( scale, i );
	}
}