function onGLC(glc) {
	glc.loop();
	glc.size( 400, 400 );
	glc.setDuration( 4 );
	glc.setFPS( 30 );
	glc.setMode('single');
	//glc.setEasing( false );
	glc.setMaxColors( 256 );
	glc.setQuality( 1 );
	var list = glc.renderList,
		width = glc.w,
		height = glc.h,
		color = glc.color;

	// your code goes here:
	glc.styles.backgroundColor = '#457';
	var nr = 7;
	var radius = 80;
	
	// draw the full circles in the background
	for(var i=0; i<nr; i++ ){
		list.addCircle({
			x: width/2 + Math.sin( (i/nr)*2*Math.PI ) * radius,
			y: height/2 - Math.cos( (i/nr)*2*Math.PI ) * radius,
			radius: radius,
			fill: false,
			stroke: true,
			strokeStyle: color.rgba( 0, 0, 0, 0.3 ),
			lineWidth: 1,
		});
	}
	
	// draw partial circles
	for(var i=0; i<nr; i++ ){

		list.addCircle({
			x: width/2 + Math.sin( (i/nr)*2*Math.PI ) * radius,
			y: height/2 - Math.cos( (i/nr)*2*Math.PI ) * radius,
			radius: radius,
			fill: false,
			stroke: true,
			strokeStyle: '#fff',
			lineWidth: 2.25,
			startAngle: -360/nr,
			endAngle: 360/nr,
			rotation: [ i * (360/nr) -90, (i * (360/nr)) + 270 ],
		});
	}

}