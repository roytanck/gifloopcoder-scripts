function onGLC(glc) {
	glc.loop();
	// glc.playOnce();
	glc.size( 400, 400 );
	glc.setDuration( 0.5 );
	glc.setFPS( 30 );
	glc.setMode( "single" );
	glc.setEasing( false );
	glc.setMaxColors( 32 );
	var list = glc.renderList,
		width = glc.w,
		height = glc.h,
		color = glc.color;

	// your code goes here:
	glc.styles.backgroundColor = '#ddeeff';
	var rings = 10;
	var size = 10;
	var mindist = 30;

	for( var r=0; r<rings; r++){

		var radius = 40 + r * mindist;
		var circlesize = 2 * Math.PI * radius;
		var nrofdots = Math.max( Math.floor( circlesize / mindist ), 1 );
		//if( nrofdots == 0 ){ nrofdots = 1; }

		for( var i=0; i<nrofdots; i++ ){
			list.addCircle({
				x: [ ( (width/2) + Math.sin( (2*Math.PI) * (i/nrofdots) ) * radius ), ( (width/2) + Math.sin( (2*Math.PI) * ((i+1)/nrofdots) ) * radius ) ],
				y: [ ( (height/2) + -Math.cos( (2*Math.PI) * (i/nrofdots) ) * radius ), ( (height/2) + -Math.cos( (2*Math.PI) * ((i+1)/nrofdots) ) * radius ) ],
				radius: size,
				stroke: false,
				fill: true,
				fillStyle: color.rgba( 255, 255, 255, 1 ),
				shadowColor: color.rgba( 0, 0, 0, 0.25 ),
				shadowOffsetX: 5,
				shadowOffsetY: 5,
				shadowBlur: 10,
			});
		}
	}

}