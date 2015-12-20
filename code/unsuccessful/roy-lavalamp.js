function onGLC(glc) {
	glc.loop();
	glc.size(400, 400);
	glc.setDuration( 10 );
	glc.setFPS( 25 );
	glc.setMode( 'single' );
	glc.setEasing( false );
	var list = glc.renderList,
		width = glc.w,
		height = glc.h,
		color = glc.color;

	// your code goes here:

	glc.styles.backgroundColor = color.rgba( 50, 50, 50, 1 );
	var nr = 5;
	
	for( var n=0; n<nr; n++ ){

		var maxwidth = 100 + Math.random() * 200;
		var xpos = 50 + Math.random()*(width-100);
		var amp = Math.random() * 150;
		var offset = Math.random();
		var speed = Math.ceil( Math.random() * 6 - 3 );

		for( var i=0; i<height; i++ ){

			list.addRect({
				x: function( t ){
				   return this.xpos + Math.sin( t*2*Math.PI ) * this.amp;
				},
				y: i,
				w: function( t ){
					return this.maxwidth + Math.sin( t*2*Math.PI ) * this.maxwidth/2;
				},
				h: 1,
				stroke: false,
				fillStyle: color.rgba( 255, 80, 0, 0.5 ),
				phase: i/height + offset,
				maxwidth: maxwidth,
				amp: amp,
				xpos: xpos,
				speedMult: speed
			});
		}

	}

}