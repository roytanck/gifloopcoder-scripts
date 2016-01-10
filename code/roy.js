function onGLC(glc) {
	glc.loop();
	glc.size(400, 400);
	glc.setDuration( 3 );
	glc.setFPS( 25 );
	glc.setMode( 'single' );
	glc.setEasing( false );
	glc.setMaxColors( 64 );
	glc.setQuality( 1 );
	var list = glc.renderList,
		width = glc.w,
		height = glc.h,
		color = glc.color;

	// your code goes here:

	glc.styles.backgroundColor = color.rgba( 40, 60, 120, 1 );

	list.addHeart({
		x: width/2,
		y: height/2,
		w: 160,
		h: 160,
		fillStyle: '#fd6'
	});
}