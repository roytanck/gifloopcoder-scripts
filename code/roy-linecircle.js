function onGLC(glc) {
	glc.loop();
	glc.size( 400, 400 );
	glc.setDuration( 4 );
	glc.setFPS( 25 );
	glc.setMode( "single" );
	glc.setEasing( false );
	glc.setMaxColors( 256 );
	glc.setQuality( 10 );
	var list = glc.renderList,
		width = glc.w,
		height = glc.h,
		color = glc.color;

	// your code goes here:
	glc.styles.backgroundColor = color.rgba( 40, 70, 60, 1 );
	var nr = 9;
	var radius = 140;

	for( var i=0; i<nr; i++ ){

		var xpos = Math.sin( (i/nr) * 2 * Math.PI ) * radius;
		var ypos = -Math.cos( (i/nr) * 2 * Math.PI ) * radius;

		list.addLine({
			x0: width/2 + xpos,
			y0: height/2 + ypos,
			x1: width/2 - xpos,
			y1: height/2 - ypos,
			strokeStyle: color.rgba( 255, 255, 255, 0.1 ),
			lineWidth: 1.5
		});

		list.addCircle({
			x: function( t ){
				return width/2 + Math.sin( t*2*Math.PI ) * this.xpos;
			},
			y: function( t ){
				return height/2 + Math.sin( t*2*Math.PI ) * this.ypos;
			},
			radius: 6,
			stroke: false,
			fill: true,
			fillStyle: 'white',
			phase: i / nr,
			xpos: xpos,
			ypos: ypos,
			nr: i
		});

	}

}