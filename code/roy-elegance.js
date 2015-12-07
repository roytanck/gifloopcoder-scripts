function onGLC(glc) {
	glc.loop();
	// glc.playOnce();
	glc.size( 400, 400 );
	glc.setDuration( 5 );
	glc.setFPS( 25 );
	//glc.setMode( "single" );
	//glc.setEasing( false );
	glc.setMaxColors( 16 );
	glc.setQuality( 1 );
	var list = glc.renderList,
		width = glc.w,
		height = glc.h,
		color = glc.color;

	// your code goes here:
	glc.styles.backgroundColor = '#335577';

	var c = list.addContainer({
		x: width/2,
		y: height/2,
		rotation: [-20,20]
	});
	var prev = c;
	var nr = 6;
	var size = 6;
	var segments = 27;

	for( var a=0; a<nr; a++ ){

		for( var i=0; i<segments; i++ ){

			var angle = ( i==0 ) ? a * 360/nr : 0;

			var prev = list.addRay({
				x: size,
				y: 0,
				length: size,
				angle: [ angle-i*1.25, angle+i*1.25 ],
				lineWidth: 2,
				strokeStyle: 'white',
				parent: prev
			});

			if( i == segments-1 ){
				prev = c;
			}
		}

	}
}