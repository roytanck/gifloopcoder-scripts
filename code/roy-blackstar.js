function onGLC(glc) {
	glc.loop();
	glc.size(400, 400);
	glc.setDuration(3.5);
	glc.setFPS(30);
	glc.setMode('single');
	//glc.setEasing(false);
	glc.setMaxColors(256);
	glc.setQuality( 1 );
	var list = glc.renderList,
		width = glc.w,
		height = glc.h,
		color = glc.color;

	// your code goes here:
	glc.styles.backgroundColor = '#fff';
	var size = 140;
	var points = 5;
	var innerRatio = 0.5 * ( 3 - Math.sqrt( points ) ); // from http://www.jdawiseman.com/papers/easymath/surds_star_inner_radius.html

	list.addStar({
		x: width / 2,
		y: height / 2,
		outerRadius: [ size, innerRatio * size ],
		innerRadius: [ innerRatio * size, size ],
		points: points,
		rotation: [ -90, (180/points)-90 ],
		stroke: false,
		fillStyle: '#000',
	});

}