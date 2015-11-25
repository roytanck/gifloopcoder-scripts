function onGLC(glc) {
	glc.loop();
	// glc.playOnce();
	glc.size(400, 400);
	glc.setDuration(5);
	glc.setFPS(30);
	// glc.setMode("single");
	// glc.setEasing(false);
	// glc.setMaxColors(256);
	var list = glc.renderList,
		width = glc.w,
		height = glc.h;

	// your code goes here:
	var x = 0;
	var y = 0;
	var grid = 6;
	var dist = 400 / grid;
	var maxsize = dist * 2;

	glc.styles.lineWidth = 2;

	for( x = 0; x < grid+2; x++ ){
		for( y = 0; y < grid+2; y++ ){
			list.addHeart({
				x: x*dist - ( 0.5 * dist ),
				y: y*dist - ( 0.5 * dist ),
				w: [ 0, maxsize ],
				h: [ 0, maxsize ],
				rotation: [ -Math.random()*360, Math.random()*360 ],
				stroke: false,
				fill: true,
				strokeStyle: '#aa2266',
				fillStyle: '#ff3399',
			});
		}
	}

}		