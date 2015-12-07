function onGLC(glc) {
	glc.loop();
	// glc.playOnce();
	glc.size( 600, 400 );
	glc.setDuration( 5 );
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
	glc.styles.backgroundColor = '#339966';
	var shadowDist = 20;
	var shadowBlur = 20;

	list.addText({
		x: width/2,
		y: height/2 - 60,
		text: 'Merry',
		/*fillStyle: gradient,*/
		fillStyle: function( t ){
			var gx0 = Math.round( Math.sin( t*2*Math.PI ) * 100 );
			var gy0 = Math.round( -Math.cos( t*2*Math.PI ) * 100 );
			var gx1 = -gx0;
			var gy1 = -gy0;
			var gradient = color.createLinearGradient( gx0, gy0, gx1, gy1 );
			gradient.addColorStop( 0, 'white' );
			gradient.addColorStop( 1, 'blue' );
			return gradient;
		},
		fontSize: 80,
		fontWeight: 'normal',
		fontFamily: 'Bigshot One',
		shadowColor: color.rgba( 0, 0, 0, 0.5 ),
		shadowOffsetX: function( t ){
			return Math.sin( t*2*Math.PI ) * shadowDist;
		},
		shadowOffsetY: function( t ){
			return -Math.cos( t*2*Math.PI ) * shadowDist;
		},
		shadowBlur: shadowBlur,
	});

	list.addText({
		x: width/2,
		y: height/2 + 20,
		text: 'Christmas!',
		fillStyle: 'white',
		fontSize: 80,
		fontWeight: 'normal',
		fontFamily: 'Bigshot One',
		shadowColor: color.rgba( 0, 0, 0, 0.5 ),
		shadowOffsetX: function( t ){
			return Math.sin( t*2*Math.PI ) * shadowDist;
		},
		shadowOffsetY: function( t ){
			return -Math.cos( t*2*Math.PI ) * shadowDist;
		},
		shadowBlur: shadowBlur,
	});

}