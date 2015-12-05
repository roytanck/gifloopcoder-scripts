function onGLC(glc) {
	glc.loop();
	// glc.playOnce();
	glc.size( 400, 400 );
	glc.setDuration( 1 );
	glc.setFPS( 30 );
	glc.setMode( "single" );
	glc.setEasing( false );
	glc.setMaxColors( 256 );
	var list = glc.renderList,
		width = glc.w,
		height = glc.h,
		color = glc.color;

	// your code goes here:
	glc.styles.backgroundColor = '#335599';
	var rings = 5;
	var size = 45;
	var mindist = 60;

	for( var r=0; r<rings; r++){

		var radius = 32 + r * mindist;
		var circlesize = 2 * Math.PI * radius;
		var nrofhearts = Math.max( Math.floor( circlesize / mindist ), 1 );
		var col = color.hsv( 180+(r/rings)*180, 0.25, 1 );

		for( var i=0; i<nrofhearts; i++ ){
			list.addHeart({
				x: function( t ){
					return (width/2) + Math.sin( (2*Math.PI) * ( ( t+this.p_nr ) / this.p_nrofhearts ) ) * this.p_radius;
				},
				y: function( t ){
					return (height/2) + -Math.cos( (2*Math.PI) * ( ( t+this.p_nr ) / this.p_nrofhearts ) ) * this.p_radius;
				},
				rotation: function( t ){
					return ( ( t+this.p_nr ) / this.p_nrofhearts ) * 360;
				},
				w: size,
				h: size,
				stroke: false,
				fill: true,
				fillStyle: col,
				shadowColor: color.rgba( 0, 0, 0, 0.25 ),
				shadowOffsetX: 5,
				shadowOffsetY: 5,
				shadowBlur: 10,
				p_radius: radius,
				p_nr: i,
				p_nrofhearts: nrofhearts
			});
		}
	}

}