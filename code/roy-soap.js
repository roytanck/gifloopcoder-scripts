function onGLC(glc) {
	glc.loop();
	// glc.playOnce();
	glc.size( 400, 400 );
	glc.setDuration( 2 );
	glc.setFPS( 25 );
	glc.setMode( "single" );
	glc.setEasing( false );
	glc.setMaxColors( 256 );
	var list = glc.renderList,
		width = glc.w,
		height = glc.h,
		color = glc.color;

	// your code goes here:
	glc.styles.backgroundColor = '#114488';
	var nr = 60;

	for( var i=0; i<nr; i++){

		var size = 10 + Math.random() * 60;
		var wavelength = 50 + Math.random() * 100;
		var amplitude = 15 + Math.random() * 30;
		var xpos = Math.random() * width;

		list.addCircle({
			x: function( t ){
				var ypos = ( height+size*2 ) - t * ( height - 4*size );
				return this.xpos + ( Math.sin( ypos/this.wl ) * this.amp );
			},
			y: [ height + size*2, -size*2 ],
			radius: size,
			stroke: true,
			lineWidth: 1,
			strokeStyle: color.rgba(255,255,255,0.5),
			fill: true,
			fillStyle: color.rgba(255,255,255,0.1),
			wl: wavelength,
			amp: amplitude,
			xpos: xpos,
			phase: Math.random()
		});
	}

}