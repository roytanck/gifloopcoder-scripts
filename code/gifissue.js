function onGLC(glc) {
	glc.loop();
	// glc.playOnce();
	glc.size(400, 400);
	glc.setDuration(2);
	glc.setFPS(30);
	glc.setMode("single");
	glc.setEasing(false);
	glc.setMaxColors(8);
	var list = glc.renderList,
		width = glc.w,
		height = glc.h,
		color = glc.color;

	// your code goes here:
	var nr = 6;

	for( var x=0; x<nr+2; x++ ){
		for( var y=0; y<nr+2; y++ ){
			var r = Math.min( 255, Math.floor( x * 32 ) );
			var g = Math.min( 255, Math.floor( y * 32 ) );
			var b = 0;
			list.addRect({
				x: x*(width/nr) - (width/nr)/2,
				y: y*(height/nr) - (height/nr)/2,
				w: 68,
				h: 68,
				rotation: [ 0, 90 ],
				fill: true,
				stroke: false,
				/*fillStyle: color.rgba( r, g, b, 1 ),*/
				fillStyle: 'rgba(' + r + ',' + g + ',' + b + ',1)',
			});
		}
	}

}