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
	glc.styles.backgroundColor = '#bbddff';
	var rings = 5;
	var size = 20;
	var mindist = 60;

	for( var r=0; r<rings; r++){

		var radius = 40 + r * mindist;
		var circlesize = 2 * Math.PI * radius;
		var nrofdots = Math.max( Math.floor( circlesize / mindist ), 1 );

		for( var i=0; i<nrofdots; i++ ){

			var gradient = color.createRadialGradient( -6, -6, 0, -6, -6, 26 );
			gradient.addColorStop( 0, '#ffffff' );
    		gradient.addColorStop( 0.8, '#667788' );
    		gradient.addColorStop( 1, '#4466aa' );

			list.addCircle({
				x: function( t ){
					return (width/2) + Math.sin( (2*Math.PI) * ( ( t+this.p_nr ) / this.p_nrofdots ) ) * this.p_radius;
				},
				y: function( t ){
					return (height/2) + -Math.cos( (2*Math.PI) * ( ( t+this.p_nr ) / this.p_nrofdots ) ) * this.p_radius;
				},
				radius: size,
				stroke: false,
				fill: true,
				fillStyle: gradient,//color.rgba( 255, 255, 255, 1 ),
				shadowColor: color.rgba( 0, 0, 0, 0.15 ),
				shadowOffsetX: 10,
				shadowOffsetY: 10,
				shadowBlur: 5,
				p_radius: radius,
				p_nr: i,
				p_nrofdots: nrofdots
			});
		}
	}

}