function onGLC(glc) {
	glc.loop();
	glc.size( 500, 300 );
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
	glc.styles.backgroundColor = color.rgba( 45, 50, 30, 1 );

	var waves = 30;
	var ypos = 40;

	for( var i=0; i<waves; i++ ){

		var wl = 50 + i*10;
		var amp = 5 + i*1;
		var path = [];

		for( var l=-( width/2 + wl*2 ); l<width/2 + wl*2; l+=wl/40 ){
			var x = l;
			var y = Math.sin( (l/wl)*2*Math.PI ) * amp;
			path.push( x );
			path.push( y );
		}

		var c = list.addContainer({
			x: [ width/2, (width/2)-wl ],
			y: ypos,
			phase: ypos/225
		});

		var w = list.addPath({
			x: 0,
			y: 0,
			strokeStyle: color.rgba( 255, 255, 255, i/waves ),
			lineWidth: 2,
			path: path,
			parent: c
		});

		ypos = ypos * 1.073;
	}

}