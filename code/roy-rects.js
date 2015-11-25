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
		height = glc.h;

	// your code goes here:
	var maxsize = 500;
	var nr = 20;

	glc.styles.lineWidth = 1;

	for( var i = 0; i < nr; i++ ){
		var radius = Math.sin( (i*2*Math.PI)/nr * 200 ) + 50;
		list.addRect({
			x: width/2 + ( Math.sin( (i*2*Math.PI)/nr ) * radius ),
			y: height/2 + ( -Math.cos( (i*2*Math.PI)/nr ) * radius ),
			w: [0,maxsize],
			h: [0,maxsize],
			rotation: -(i/nr)*360,
			fill: false,
			stroke: true,
			strokeStyle: [ '#000000', 'rgba(0,0,0,0)' ],
			phase: i/nr

			/*w: [ 0, maxsize ],
			h: [ 0, maxsize ],
			rotation: [ -360, 360 ],
			stroke: true,
			fill: false,
			strokeStyle: [ '#ff3399', '#ffffff' ],
			fillStyle: [ '#ff3399', '#ffffff' ],
			phase: 1-(i/nr)*/
		});
	}

}		