function onGLC(glc) {
	glc.loop();
	glc.size(540, 540);
	glc.setDuration( 3.5 );
	glc.setFPS( 25 );
	glc.setMode('single');
	//glc.setEasing(false);
	glc.setMaxColors( 32 );
	glc.setQuality( 1 );
	var list = glc.renderList,
		width = glc.w,
		height = glc.h,
		color = glc.color;

	// your code goes here:
	glc.styles.backgroundColor = color.hsv( 200, 1, 0.35 );
	var r = 80;
	var r2 = r/2;
	var a = r * Math.sqrt(3);
	var h = r/2 + r2/2;
	
	for( var x=-1; x<8; x++ ){
		
		var ypos = -h;
		
		for( var y=-1; y<9; y++ ){

			var oddeven = y % 2;
			ypos += oddeven ? r : r2;

			list.addPoly({
				x: x * a + ( Math.floor(y/2) % 2 ) * (a/2),
				y: ypos,
				radius: r,
				sides: 3,
				stroke: false,
				strokeStyle: color.hsva( 0, 1, 0, 0.25 ),
				lineWidth: 2,
				fill: true,
				fillStyle: color.hsva( 200, 0.6, 1, 0.5 ),
				blendMode: 'screen',
				rotation: oddeven ? [ 270, 390 ] : [ 90, 210 ],
			});
			
		}
	}
}
