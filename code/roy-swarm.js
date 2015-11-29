function onGLC(glc) {
	glc.loop();
	// glc.playOnce();
	glc.size(600, 400);
	glc.setDuration(2);
	glc.setFPS(30);
	glc.setMode("single");
	//glc.setEasing(false);
	glc.setMaxColors(16);
	var list = glc.renderList,
		width = glc.w,
		height = glc.h,
		color = glc.color;

	// your code goes here:
	glc.styles.backgroundColor = '#002244';
	var nr = 500;
	var variance = 600;

	for( var i=0; i<nr; i++ ){

		list.addBezierSegment({
			x0: 100,
			y0: 200,
			x1: getVariance(100),
			y1: getVariance(200),
			x2: getVariance(500),
			y2: getVariance(200),
			x3: 500,
			y3: 200,
			lineWidth: function( t ){
				return 0.1 + ( Math.sin( t * Math.PI ) * 3 );
			},
			strokeStyle: color.randomRGB( 51, 255 ),
			percent: 0.1,
			phase: ( i / nr ) / 3
		});

		function getVariance( offset ){
			var angle = Math.random() * (2*Math.PI);
			var dist = Math.random()*variance - (variance/2);
			return offset + ( Math.sin( angle ) * dist );
		}

	}
}