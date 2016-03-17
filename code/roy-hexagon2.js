function onGLC(glc) {
	glc.loop();
	glc.size( 600, 600 );
	glc.setDuration( 3.5 );
	glc.setFPS( 30 );
	glc.setMode('single');
	//glc.setEasing(false);
	glc.setMaxColors( 64 );
	glc.setQuality( 10 );
	var list = glc.renderList,
		width = glc.w,
		height = glc.h,
		color = glc.color;

	// your code goes here:
	glc.styles.backgroundColor = '#234';
	var nr = 6;
	var corners = [];
	var size = 15;
	var dist = 40;
		
	var c = list.addContainer({
		x: width / 2,
		y: height / 2,
	});

	for( var n=0; n<nr; n++ ){
		
		var rad = n * dist;
		var sideDots = Math.max( 0, n - 1 );
		var totalDots = ( n == 0 ) ? 1 : 6;
		totalDots += 6 * sideDots;

		for( var i=0; i<6; i++ ){
			corners[i] = {
				x: Math.sin( (i/6) * 2*Math.PI ) * rad,
				y: -Math.cos( (i/6) * 2*Math.PI ) * rad
			}
		}
		
		for( var d=0; d<totalDots; d++ ){
			
			var pos = getDotPosition( rad, sideDots, totalDots, d );
			var pos2 = getDotPosition( rad, sideDots, totalDots, d + 1 );
			
			list.addCircle({
				x: [ pos.x, pos2.x ],
				y: [ pos.y, pos2.y ],
				size: size,
				radius: function( t ){
					return this.size*0.6 + Math.cos( t*2*Math.PI ) * ( this.size * 0.4 );
				},
				stroke: false,
				fill: true,
				fillStyle: ( n % 2 ) ? '#9cf' : '#fff',
				parent: c,
				phase: (n/nr) / 2.5,
			});

		}
		
	}
	
	
	function getDotPosition( rad, sideDots, totalDots, d ){
		if( d < 0 ){ d = totalDots+d; }
		var sidePos = d / ( 1+sideDots );
		var c1 = corners[ Math.floor( sidePos ) % 6 ];
		var c2 = corners[ ( Math.floor( sidePos ) + 1 ) % 6 ];
		var relPos = sidePos % 1;
		var pos = {
			x: ( (1-relPos)  * c1.x ) + ( relPos * c2.x ),
			y: ( (1-relPos) * c1.y ) + ( relPos * c2.y ),
		};
		return pos;
	}

}
