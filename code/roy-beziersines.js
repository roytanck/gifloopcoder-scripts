function onGLC(glc) {
	glc.loop();
	glc.size( 500, 300 );
	glc.setDuration( 5 );
	glc.setFPS( 25 );
	glc.setMode( "single" );
	glc.setEasing( false );
	glc.setMaxColors( 64 );
	glc.setQuality( 1 );
	var list = glc.renderList,
		width = glc.w,
		height = glc.h,
		color = glc.color;

	// your code goes here:
	glc.styles.backgroundColor = color.rgba( 50, 50, 50, 1 );

	var waves = 11;
	var nr = 9;

	for( var w=0; w<waves; w++ ){

		for( var i=0; i<nr; i++ ){
			list.addCircle({
				x: i * ( width/nr ),
				y: function( t ){
					return getY( t, this.nr, 0, false );
				},
				radius: 2,
				stroke: false,
				fill: true,
				fillStyle: color.rgba( 255, 255, 255, 0.6 ),
				nr: i,
				phase: w / ( waves * 2.2 )
			});

			list.addBezierCurve({
				x0: function( t ){
					return getX( t, this.nr, 0, true );
				},
				y0: function( t ){
					return getY( t, this.nr, 0, false );
				},
				x1: function( t ){
					return getX( t, this.nr, -1, true );
				},
				y1: function( t ){
					return getY( t, this.nr, -1, true );
				},
				x2: function( t ){
					return getX( t, this.nr+1, 1, true );
				},
				y2: function( t ){
					return getY( t, this.nr+1, 1, true );
				},
				x3: function( t ){
					return getX( t, this.nr, 1, false );
				},
				y3: function( t ){
					return getY( t, this.nr, 1, false );
				},
				stroke: true,
				strokeStyle: color.rgba( 255, 220, 100, 0.6 ),
				lineWidth: 2,
				nr: i,
				phase: w / ( waves * 2.2 )
			});
		}

	}


	function getX( t, i, offset, reverse ){
		var currentX = i * ( width / nr );
		var offsetX = ( i + offset ) * ( width / nr );
		if( reverse ){
			return currentX - ( offsetX - currentX )/5;
		}
		return offsetX;
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