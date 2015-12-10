function onGLC(glc) {
	glc.loop();
	glc.size( 400, 400 );
	glc.setDuration( 5 );
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
	glc.styles.backgroundColor = color.rgba( 50, 40, 60, 1 );

	var cols = [ '#ff0000', '#00ff00', '#0000ff' ];
	var nr = cols.length;

	for( var i=0; i<cols.length; i++ ){

		list.addCircle({
			x: function( t ){
				return this.cx + Math.sin( (t+this.nr/nr)*2*Math.PI ) * this.r;
			},
			y: function( t ){
				return this.cy - Math.cos( (t+this.nr/nr)*2*Math.PI ) * this.r;
			},
			radius: 50 + Math.random() * 100,
			stroke: false,
			fill: true,
			fillStyle: cols[i],
			blendMode: 'lighter',
			nr: i,
			r: Math.random() * 100,
			cx: width/2 + ( Math.random()*50 - 25 ),
			cy: height/2 + ( Math.random()*50 - 25 )
		});

	}


}