function onGLC(glc) {
	glc.loop();
	glc.size(480, 480);
	glc.setDuration( 3.5 );
	glc.setFPS(25);
	glc.setMode('single');
	glc.setEasing(false);
	glc.setMaxColors( 32 );
	glc.setQuality( 1 );
	var list = glc.renderList,
		width = glc.w,
		height = glc.h,
		color = glc.color;

	// your code goes here:
	glc.styles.backgroundColor = color.hsv( 200, 1, 0.25 );
	var r = 80;
	var dist = r * 1.2;
	var disty = dist * Math.sin( (Math.PI*2)/3 );
	
	for( var x=-1; x<8; x++ ){
		for( var y=-1; y<8; y++ ){
			
			var oddeven = y % 2;

			list.addPoly({
				x: x * dist + oddeven * (dist/2),
				y: y * disty,
				radius: r,
				sides: 6,
				stroke: false,
				strokeStyle: color.hsva( 0, 1, 0, 0.25 ),
				lineWidth: 2,
				fill: true,
				fillStyle: color.hsva( ( oddeven ? 200 : 140 ), 0.5, 1, 0.4 ),
				blendMode: 'screen',
				rotation: [ 0, 60 ],
			});
			
		}
	}
}
