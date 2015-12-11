function onGLC(glc) {
	glc.loop();
	glc.size( 500, 300 );
	glc.setDuration( 3 );
	glc.setFPS( 30 );
	glc.setMode( "single" );
	glc.setEasing( false );
	glc.setMaxColors( 256 );
	glc.setQuality( 1 );
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
				fillStyle: color.hsv( 180+(counter/letters)*120, 1, 0.75 ),
			});

			list.addText({
				text: strs[s].charAt( i % nr ),
				x: i * spacing + spacing/2,
				y: s * spacing + spacing/2 - spacing/25,
				stroke: false,
				fill: true,
				fillStyle: function( t ){
					return color.rgba( 255, 255, 255, ( Math.sin( t*2*Math.PI ) * 0.2 ) + 0.8 );
				},
				shadowColor: function( t ){
					return color.rgba( 255, 255, 255, ( Math.sin( t*2*Math.PI ) * 0.4 ) + 0.4 );
				},
				shadowOffsetX: 0,
				shadowOffsetY: 0,
				shadowBlur: 16,
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