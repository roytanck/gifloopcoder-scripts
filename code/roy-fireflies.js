function onGLC(glc) {
	glc.loop();
	// glc.playOnce();
	glc.size( 500, 500 );
	glc.setDuration( 2.5 );
	glc.setFPS(25);
	glc.setMode("single");
	glc.setEasing(false);
	glc.setMaxColors(64);
	var list = glc.renderList,
		width = glc.w,
		height = glc.h,
		color = glc.color;

	// your code goes here:
	glc.styles.backgroundColor = '#333';
	var nr = 500;

	for( var i=0; i<nr; i++ ){
        
        var rad = 150 + Math.random() * 150;
        var angle1 = Math.random();
        var angle2 = angle1 + ( ( Math.random() * 0.5 ) - 0.25 );
        var c1x = width/2 + Math.sin( angle1*2*Math.PI ) * rad;
        var c1y = height/2 + -Math.cos( angle1*2*Math.PI ) * rad;
        var c2x = width/2 + Math.sin( angle2*2*Math.PI ) * rad;
        var c2y = height/2 + -Math.cos( angle2*2*Math.PI ) * rad;

		list.addBezierSegment({
			x0: width/2,
			y0: height/2,
			x1: c1x,
			y1: c1y,
			x2: c2x,
			y2: c2y,
			x3: width/2,
			y3: height/2,
			lineWidth: function( t ){
				return Math.sin( t * Math.PI ) * 2;
			},
			strokeStyle: function( t ){
                var alpha = -1 + ( Math.sin( t * Math.PI ) * 2 );
                return color.rgba( 255, 255, 255, alpha );
            },
			percent: 0.1,
			phase: ( i / nr )
		});

	}
}