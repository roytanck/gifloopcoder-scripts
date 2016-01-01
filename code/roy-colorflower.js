function onGLC(glc) {
	glc.loop();
	glc.size( 400, 400 );
	glc.setDuration( 3 );
	glc.setFPS( 30 );
	glc.setMode('single');
	glc.setEasing( false );
	var list = glc.renderList,
		width = glc.w,
		height = glc.h,
		color = glc.color;

	// your code goes here:
	glc.styles.backgroundColor = '#125';
	var nr = 9;
	var radius = 80;
	
	for(var i=0; i<nr; i++ ){
		list.addCircle({
			x: width/2 + Math.sin( (i/nr)*2*Math.PI ) * radius,
			y: height/2 - Math.cos( (i/nr)*2*Math.PI ) * radius,
			radius: radius,
			fill: true,
			fillStyle: color.hsva( (i/nr)*360, 1, 1, 1 ),
			blendMode: 'screen',
			startAngle: -360/nr + 90,
			endAngle: 360/nr + 90,
			rotation: [ i * (360/nr), (i * (360/nr)) + 360 ],
		});
	}

}