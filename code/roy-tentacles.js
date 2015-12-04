function onGLC(glc) {
	glc.loop();
	// glc.playOnce();
	glc.size( 400, 400 );
	glc.setDuration( 10 );
	glc.setFPS( 25 );
	glc.setMode( "single" );
	glc.setEasing( false );
	glc.setMaxColors( 16 );
	glc.setQuality( 10 );
	var list = glc.renderList,
		width = glc.w,
		height = glc.h,
		color = glc.color;

	// your code goes here:
	glc.styles.backgroundColor = color.rgb( 0, 50, 100 );
	var segments = 5;
	var segmentLength = 40;
	var lastx0 = 0;
	var lasty0 = 0;
	var lastx1 = 0;
	var lasty1 = 0;
	var arms = 17;

	for( var arm = 0; arm < arms; arm++ ){

		var seg = segmentLength/2 + Math.random() * ( segmentLength );

		for( var i=0; i<segments; i++ ){

			list.addLine({
				x0: function( t ){
					if( this.nr == 0 ){
						newx0 = width/2;
					} else {
						newx0 = lastx1;
					}
					lastx0 = newx0;
					return newx0;
				},
				y0: function( t ){
					if( this.nr == 0 ){
						newy0 = width/2;
					} else {
						newy0 = lasty1;
					}
					lasty0 = newy0;
					return newy0;
				},
				x1: function( t ){
					if( this.nr ==0 ){
						var newx1 = width/2 + Math.sin( ((this.arm/arms)+t)*2*Math.PI ) * seg;
					} else {
						var newx1 = lastx1 + Math.sin( (this.nr+1)*((this.arm/arms)+t)*2*Math.PI ) * seg;
					}
					lastx1 = newx1;
					return newx1;
				},
				y1: function( t ){
					if( this.nr == 0 ){
						var newy1 = height/2 + -Math.cos( ((this.arm/arms)+t)*2*Math.PI ) * seg;
					} else {
						var newy1 = lasty1 + -Math.cos( (this.nr+1)*((this.arm/arms)+t)*2*Math.PI ) * seg;
					}
					lasty1 = newy1;
					return newy1;
				},
				lineWidth: 1.5,
				strokeStyle: color.rgba( 255, 255, 255, 0.3 ),
				nr: i,
				arm: arm,
				seg: seg,
				phase: Math.random()
			});

		}

		list.addCircle({
			x: function( t ){
				return lastx1;
			},
			y: function( t ){
				return lasty1;
			},
			radius: 4,
			fillStyle: color.rgba( 255, 255, 255, 1 )
		});

	}

	list.addCircle({
		x: width/2,
		y: height/2,
		radius: 4,
		fillStyle: color.rgba( 255, 255, 255, 1 )
	});

}