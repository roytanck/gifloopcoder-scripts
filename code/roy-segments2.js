function onGLC(glc) {
	glc.loop();
	glc.size( 400, 400 );
	glc.setDuration( 4 );
	glc.setFPS( 30 );
	glc.setMode('single');
	glc.setEasing( false );
	glc.setMaxColors( 16 );
	glc.setQuality( 1 );
	var list = glc.renderList,
		width = glc.w,
		height = glc.h,
		color = glc.color;

	// your code goes here:
	glc.styles.backgroundColor = '#253';
	var nr = 7;
	var radius = 80;
	
	// draw partial circles
	for(var i=0; i<nr; i++ ){
		
		for( var s=0; s<9; s++ ){

			list.addCircle({
				x: width/2 + Math.sin( (i/nr)*2*Math.PI ) * radius,
				y: height/2 - Math.cos( (i/nr)*2*Math.PI ) * radius,
				radius: radius - s * 8,
				fill: false,
				stroke: true,
				strokeStyle: color.rgba( 255,255,150,1 ),
				lineWidth: 2.25,
				startAngle: -360/nr,
				endAngle: 360/nr,
				rotation: [ i * (360/nr) -90, (i * (360/nr)) + 270 ],
				nr: i,
				phase: s/19
			});

			
		}

	}

}