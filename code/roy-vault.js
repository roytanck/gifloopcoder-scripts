function onGLC(glc) {
	glc.loop();
	glc.size( 400, 400 );
	glc.setDuration( 3 );
	glc.setFPS( 30 );
	glc.setMode('single');
	glc.setEasing( false );
	glc.setMaxColors( 64 );
	glc.setQuality( 1 );
	var list = glc.renderList,
		width = glc.w,
		height = glc.h,
		color = glc.color;

	// your code goes here:
	glc.styles.backgroundColor = '#000';
	var nr = 20;
	var lw = 25;
	
	for( var i=0; i<nr; i++ ){

		var rad = Math.floor(i/2)*lw + lw*1;
		var length = rad * 2 * Math.PI;
		var segments = 2 * Math.ceil( Math.random() * 4 );
		var segmentLength = length / segments;
		
		list.addCircle({
			x: width/2,
			y: height/2,
			radius: rad,
			stroke: true,
			strokeStyle: color.rgba( 50,100,255,0.5 ),
			blendMode: 'lighter',
			lineWidth: lw*2,
			lineDash: [ segmentLength, segmentLength ],
			lineCap: 'butt',
			fill: false,
			rotation: [ 0, 360/ (segments/2) ],
			phase: Math.random(),
			speedMult: ( Math.random() < 0.5 ) ? 1 : -1 
		});

	}
	
}