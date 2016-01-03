function onGLC(glc) {
	glc.loop();
	glc.size(400, 400);
	glc.setDuration(1);
	glc.setFPS(30);
	glc.setMode('single');
	glc.setEasing(false);
	glc.setMaxColors(256);
	glc.setQuality( 1 );
	var list = glc.renderList,
		width = glc.w,
		height = glc.h,
		color = glc.color;

	// your code goes here:
	glc.styles.backgroundColor = '#144';

	var nr = 15;
	var rad = 100;
	
	list.addCircle({
		x: width/2,
		y: height/2,
		radius: rad,
		fill: true,
		fillStyle: color.rgba( 0, 0, 0, 0.3 ),
		stroke: false,
	});
	
	for( var i=0; i<nr; i++ ){
		
		list.addOval({
			x: width/2,
			y: height/2,
			rx: function( t ){
				return Math.sin( t*2*Math.PI ) * rad + 0.001;
			},
			ry: rad,
			fill: false,
			stroke: true,
			lineWidth: function( t ){
				return 0.5 + Math.abs( t - 0.5 ) * 4;
			},
			strokeStyle: function( t ){
				var brightness = 0.25 + Math.abs( t - 0.5 ) * 1.5;
				return color.rgba( 255, 220, 100, brightness );
			},
			startAngle: function( t ){
				return ( t < 0.5 ) ? -90 : 90;
			},
			endAngle: function( t ){
				return ( t < 0.5 ) ? 90 : -90;
			},
			phase: i/nr,
			nr: i,
			speedMult: 1/nr
		});

	}
}