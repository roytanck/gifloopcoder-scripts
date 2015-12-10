function onGLC(glc) {
	glc.loop();
	glc.size( 500, 300 );
	glc.setDuration( 5 );
	glc.setFPS( 25 );
	glc.setMode( "single" );
	glc.setEasing( false );
	glc.setMaxColors( 16 );
	glc.setQuality( 1 );
	var list = glc.renderList,
		width = glc.w,
		height = glc.h,
		color = glc.color;

	// your code goes here:
	glc.styles.backgroundColor = color.rgba( 50, 40, 60, 1 );

	var waves = 21;
	var nr = 7;

	for( var w=0; w<waves; w++ ){

		for( var i=0; i<nr; i++ ){
			if( i != 0 ){
				list.addLine({
					x0: i * ( width/nr ) - (width/nr)/3,
					y0: function( t ){
						return getY( t, this.nr-0.1, 0, false );
					},
					x1: i * ( width/nr ) + (width/nr)/3,
					y1: function( t ){
						return getY( t, this.nr+0.1, 0, false );
					},
					stroke: true,
					strokeStyle: color.rgba( 255, 255, 255, 0.6 ),
					lineWidth: 2,
					nr: i,
					phase: w / ( waves * 2.2 )
				});
			}

		}

	}

	function getY( t, i, offset, reverse ){
		var currentY = height/2 + Math.sin( ( t + ( i / nr ) ) * 2 * Math.PI ) * 100;
		var offsetY = height/2 + Math.sin( ( t + ( (i + offset ) / nr ) ) * 2 * Math.PI ) * 100;
		if( reverse ){
			return currentY - ( offsetY - currentY )/5;
		}
		return offsetY;
	}


}