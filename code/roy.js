function onGLC(glc) {
	glc.loop();
	// glc.playOnce();
	glc.size( 400, 400 );
	glc.setDuration( 8 );
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
	glc.styles.backgroundColor = color.rgb( 60, 80, 120 );
	var segments = 3;
	var segmentLength = 50;
	var lastx1 = 0;
	var lasty1 = 0;
	var lastnr = 0;
	var arms = 17;

	for( var arm = 0; arm < arms; arm++ ){

		var seg = segmentLength/2 + Math.random() * ( segmentLength );

		for( var i=0; i<segments; i++ ){

			list.addLine({
				x0: function( t ){
					return ( this.nr == 0 ) ? width/2 : lastx1;
				},
				y0: function( t ){
					return ( this.nr == 0 ) ? height/2 : lasty1;
				},
				x1: function( t ){
					if( this.nr ==0 ){
						var newx1 = width/2 + Math.sin( ((this.arm/arms)+t)*2*Math.PI ) * this.seg;
					} else {
						var newx1 = lastx1 + Math.sin( (this.nr+1)*((this.arm/arms)+t)*2*Math.PI ) * this.seg;
					}
					lastx1 = newx1;
					return newx1;
				},
				y1: function( t ){
					if( this.nr == 0 ){
						var newy1 = height/2 + -Math.cos( ((this.arm/arms)+t)*2*Math.PI ) * this.seg;
					} else {
						var newy1 = lasty1 + -Math.cos( (this.nr+1)*((this.arm/arms)+t)*2*Math.PI ) * this.seg;
					}
					lasty1 = newy1;
					lastnr = this.nr;
					return newy1;
				},
				lineWidth: 1.5,
				strokeStyle: color.rgba( 255, 255, 255, 0 ),
				nr: i,
				arm: arm,
				seg: seg - ( (i/segments) * seg ) / 2,
				phase: Math.random()
			});

			list.addCircle({
				x: function( t ){
					return lastx1;
				},
				y: function( t ){
					return lasty1;
				},
				radius: function( t ){
					return 3 + ( segments - lastnr ) * 8;
				},
				fillStyle: color.rgba( 220, 255, 255, 0.15 )
			});

		}

	}

}