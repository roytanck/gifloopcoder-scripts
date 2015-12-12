function onGLC(glc) {
	glc.loop();
	glc.size( 400, 400 );
	glc.setDuration( 2 );
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
	glc.styles.backgroundColor = color.rgba( 30, 30, 30, 1 );
	var nrofFrames = 50;
	var nrofCircles = 50;
	var radiusIncrease = 3;
	var dotRadius = 2;

	var c = list.addContainer({
		x: width/2,
		y: height/2,
	});

	for( var i=0; i<nrofCircles+1; i++ ){
		for( var d=0; d<i; d++ ){
			list.addCircle({
				x: Math.sin( (d/i) * 2 * Math.PI ) * ( i * radiusIncrease ),
				y: -Math.cos( (d/i) * 2 * Math.PI ) * ( i * radiusIncrease ),
				radius: dotRadius,
				stroke: false,
				fill: true,
				/*fillStyle: 'white',*/
				fillStyle: function( t ){
					//var alpha =  0.5 + Math.sin( ( t + ( this.circleNr / nrofCircles ) ) * 2 * Math.PI ) * 0.5;
					var currentFrame = Math.floor( t*nrofFrames );
					var alpha = ( currentFrame == this.circleNr ) ? 1 : 0;
					return color.rgba( 255, 255, 255, alpha );
				},
				parent: c,
				circleNr: i,
				phase: Math.random()
			});
		}
	}


}