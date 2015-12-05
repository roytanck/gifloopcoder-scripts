function onGLC(glc) {
	glc.loop();
	// glc.playOnce();
	glc.size( 400, 400 );
	glc.setDuration( 5 );
	glc.setFPS( 25 );
	glc.setMode( "single" );
	glc.setEasing( false );
	glc.setMaxColors( 8 );
	glc.setQuality( 1 );
	var list = glc.renderList,
		width = glc.w,
		height = glc.h,
		color = glc.color;

	// your code goes here:
	glc.styles.backgroundColor = '#335599';
	var innerRadius = 40;
	var outerRadius = 480;
	var lines = 60;

	for( var i=0; i<lines; i++ ){

		list.addLine({
			x0: function( t ){
				return width/2 + Math.sin( ( Math.sin( t*2*Math.PI )/7 + (this.nr/lines) + t/lines ) * ( 2*Math.PI ) ) * innerRadius;
			},
			y0: function( t ){
				return height/2 + -Math.cos( ( Math.sin( t*2*Math.PI )/3 + (this.nr/lines) + t/lines ) * ( 2*Math.PI ) ) * innerRadius;
			},
			x1: function( t ){
				return width/2 + Math.sin( (  Math.sin( -t*2*Math.PI )/11 + (this.nr/lines) + t/lines ) * ( 2*Math.PI ) ) * outerRadius;
			},
			y1: function( t ){
				return height/2 + -Math.cos( ( Math.sin( -t*2*Math.PI )/5 + (this.nr/lines) + t/lines ) * ( 2*Math.PI ) ) * outerRadius;
			},
			lineWidth: 1.5,
			strokeStyle: color.rgba( 255, 255, 255, 0.5 ),
			nr: i
		});

	}

}