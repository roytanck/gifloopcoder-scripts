function onGLC(glc) {
	glc.loop();
	glc.size( 500, 300 );
	glc.setDuration( 4 );
	glc.setFPS( 30 );
	glc.setMode( "single" );
	glc.setEasing( false );
	glc.setMaxColors( 256 );
	glc.setQuality( 10 );
	var list = glc.renderList,
		width = glc.w,
		height = glc.h,
		color = glc.color;

	// your code goes here:
	glc.styles.backgroundColor = color.rgba( 255, 255, 255, 1 );

	var strs = [ 'GIF', 'LOOP', 'CODER' ];
	var counter = 0;
	var letters = 12; // calculate this to make it more flexible?
	var spacing = 100;

	for( var s=0; s<strs.length; s++ ){

		var nr = strs[s].length;

		for( var i=0; i<nr; i++ ){

			list.addRect({
				x: i * spacing + spacing/2,
				y: s * spacing + spacing/2,
				w: spacing,
				h: spacing,
				stroke: false,
				fill: true,
				fillStyle: color.hsv( (counter/letters)*360, 1, 0.75 )
			});

			list.addText({
				text: strs[s].charAt( i % nr ),
				x: i * spacing + spacing/2,
				y: s * spacing + spacing/2 - spacing/25,
				/*translationX: function( t ){ return Math.sin( t*2*Math.PI ) * spacing/2.8 + spacing/2.8; },*/
				/*rotation: [ 0, 360 ],*/
				stroke: false,
				fill: true,
				fillStyle: 'white',
				fontSize: 70,
				fontWeight: 'bold',
				fontFamily: 'Roboto Condensed',
				fontStyle: 'normal',
				phase: 1 - ( counter / letters ),
				nr: counter
			});

			counter++;

		}

	}


}