function onGLC(glc) {
	glc.loop();
	// glc.playOnce();
	glc.size( 360, 360 );
	glc.setDuration( 5 );
	glc.setFPS( 25 );
	glc.setMode( "single" );
	glc.setEasing( false );
	glc.setMaxColors( 12 );
	glc.setQuality( 1 );
	var list = glc.renderList,
		width = glc.w,
		height = glc.h,
		color = glc.color;

	// your code goes here:
	glc.styles.backgroundColor = '#335577';

	var c = list.addContainer({
		x: width/2,
		y: height/2
	});
	var prev = c;
	var nr = 17;
	var size = 280;
	var sides = 7;

	for( var i=0; i<nr; i++ ){
		prev = list.addPoly({
			x: 0,
			y: 0,
			radius: size - i * ( size / nr ),
			sides: sides,
			rotation: [ 0, 360 / sides ],
			fill: false,
			stroke: true,
			strokeStyle: 'white',
			lineWidth: 1.5,
			parent: prev
		});
	}

}