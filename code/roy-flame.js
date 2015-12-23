function onGLC(glc) {
	glc.loop();
	glc.size( 400, 400 );
	glc.setDuration( 1.5 );
	glc.setFPS( 25 );
	glc.setMode('single');
	glc.setEasing( false );
	glc.setMaxColors( 256 );
	glc.setQuality( 1 );
	var list = glc.renderList,
		width = glc.w,
		height = glc.h,
		color = glc.color;

	// your code goes here:
	glc.styles.backgroundColor = color.rgba( 70, 50, 30, 1 );
	var nr = 250;
	var r1 = 20;
	var r2 = 50;

	var bgGradient = color.createRadialGradient( 0, 0, 0, 0, 0, 300 );
	bgGradient.addColorStop( 0, color.rgba( 255, 180, 0, 0.3 ) );
	bgGradient.addColorStop( 1, color.rgba( 255, 160, 0, 0 ) );

	list.addCircle({
		x: width/2,
		y: 260,
		radius: 300,
		fillStyle: bgGradient,
		stroke: false
	});
	
	var gradient1 = color.createRadialGradient( 0, 0, 0, 0, 0, r1 );
	gradient1.addColorStop( 0, color.rgba( 255, 220, 0, 1 ) );
	gradient1.addColorStop( 1, color.rgba( 255, 200, 0, 0.25 ) );

	var gradient2 = color.createRadialGradient( 0, 0, 0, 0, 0, r2 );
	gradient2.addColorStop( 0, color.rgba( 255, 180, 0, 0.65 ) );
	gradient2.addColorStop( 1, color.rgba( 255, 160, 0, 0 ) );
 
	
	for( var i=0; i<nr; i++ ){
		list.addCircle({
			x: function( t ){
				return width/2 + Math.sin( t * Math.PI ) * this.amp;
			},
			y: [ 325, 200 - Math.random()*175 ],
			radius: [ r1, r2 ],
			stroke: false,
			fill: true,
			fillStyle: [ gradient1, gradient2 ],
			globalAlpha: [ 0.75, 0 ],
			phase: Math.random(),
			wl: -Math.random()*100 - 50,
			amp: ( Math.random() * 80 ) - 40,
			speedMult: Math.ceil( Math.random() * 2 )
		});
	}

}