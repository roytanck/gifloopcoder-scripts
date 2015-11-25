function onGLC(glc) {
	glc.loop();
	// glc.playOnce();
	glc.size(400, 400);
	glc.setDuration(2);
	glc.setFPS(30);
	glc.setMode("single");
	glc.setEasing(false);
	glc.setMaxColors(256);
	var list = glc.renderList,
		width = glc.w,
		height = glc.h,
		color = glc.color;

	// your code goes here:
	var nr = 7;
	var radius = 120;
	var count = 0;

	function getXPos( t ){
		var x = Math.sin( ( (t+count)*2*Math.PI)/nr ) * radius;
		return width/2 + x;
	}

	function getYPos( t ){
		var y = -Math.cos( ( (t+count)*2*Math.PI)/nr ) * radius;
		count++;
		count = count%nr;
		return height/2 + y;
	}

	for( var i=0; i<nr; i++ ){
		list.addStar({
			x: getXPos,
			y: getYPos,
			points: 5,
			innerRadius: 20,
			outerRadius: 50,
			rotation: [ 0, 360/2.5 ],
			fill: true,
			stroke: false,
			fillStyle: [ color.hsv( Math.floor( i*(360/nr) ), 1, 1 ), color.hsv( Math.floor( (i+1)*(360/nr) ), 1, 1 ) ],
			/*fillStyle: '#ffcc00',*/
			/*phase: i/nr*/
		});
	}
}