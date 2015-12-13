function onGLC(glc) {
	glc.loop();
	glc.size( 400, 400 );
	glc.setDuration( 5 );
	glc.setFPS( 25 );
	glc.setMode( "single" );
	glc.setEasing( false );
	glc.setMaxColors( 256 );
	glc.setQuality( 10 );
	var list = glc.renderList,
		width = glc.w,
		height = glc.h,
		color = glc.color;

	// your code goes here:
	glc.styles.backgroundColor = color.rgba( 51, 51, 51, 1 );

	var grid = 4;
	var padding = 20;
	var gridSize = ( width - ( 2*padding ) ) /grid;
	var cols = [ '#c00', '#0c0', '#00c' ];

	for( var x=0; x<grid; x++ ){
		for( var y=0; y<grid; y++ ){

			var speeds = [1,2,3,4];
			speeds.sort( function(){ return 0.5 - Math.random(); } );

			for( var c=0; c<cols.length; c++ ){

				list.addCircle({
					x: padding + x * gridSize + gridSize/2,
					y: padding + y * gridSize + gridSize/2,
					radius: gridSize * 0.4,
					drawFromCenter: true,
					startAngle: 0,
					endAngle: 180,
					rotation: [ 0, 360 ],
					stroke: false,
					fill: true,
					fillStyle: cols[c],
					blendMode: 'lighter',
					speedMult: speeds[c]
				});

			}

		}
	}

}