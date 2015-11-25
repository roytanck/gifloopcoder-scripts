function onGLC(glc) {
	glc.loop();
	// glc.playOnce();
	glc.size(400, 400);
	glc.setDuration(5);
	glc.setFPS(30);
	glc.setMode("single");
	glc.setEasing(false);
	// glc.setMaxColors(256);
	var list = glc.renderList,
		width = glc.w,
		height = glc.h,
		color = glc.color;

	// your code goes here:
	var maxsize = 800;
	var points = 8;

	list.addStar({
		points: points,
		x: width/2,
		y: height/2,
		innerRadius: [ 180, 0 ],
		outerRadius: [ 0, 180 ],
		rotation: [ 0, 360 ],
		fill: true,
		stroke: false,
		fillStyle: color.animHSV(0, 60, 1, 1, 0, 1),
		strokeStyle: 'rgba(0,0,100,1)',
	});

}