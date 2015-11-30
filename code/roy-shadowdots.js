function onGLC(glc) {
	glc.loop();
	// glc.playOnce();
	glc.size( 420, 420 );
	glc.setDuration(2);
	glc.setFPS(30);
	//glc.setMode("single");
	//glc.setEasing(false);
	glc.setMaxColors(16);
	var list = glc.renderList,
		width = glc.w,
		height = glc.h,
		color = glc.color;

	// your code goes here:
	glc.styles.backgroundColor = '#ffffff';
	var grid = 5;
	var padding = 40;
	var gridsizeX = ( width - 2*padding ) / grid;
	var gridsizeY = ( height - 2*padding ) / grid;

	for( var x=0; x<grid; x++){
		for( var y=0; y<grid; y++){

			var basex = padding + ( x * gridsizeX + gridsizeX/2 );
			var basey = padding + ( y * gridsizeY + gridsizeY/2 );
			var topx = basex + ( basex - (width/2) ) / 15;
			var topy = basey + ( basey - (width/2) ) / 15;
			var fromcenter = Math.sqrt( Math.pow( ( basex - (width/2) ), 2 ) + Math.pow( ( basey - (height/2) ), 2 ) );

			list.addCircle({
				x: [ basex, topx ],
				y: [ basey, topy ],
				radius: [ 25, 28 ],
				stroke: false,
				fill: true,
				fillStyle: color.rgba( 255, 255, 255, 1 ),
				shadowColor: [ color.rgba( 0, 0, 0, 0.4 ), color.rgba( 0, 0, 0, 0.25 ) ],
				shadowOffsetX: [ 0, 15 ],
				shadowOffsetY: [ 0, 15 ],
				shadowBlur: [ 0, 20 ],
				phase: -fromcenter  / 750
			});

		}
	}

}