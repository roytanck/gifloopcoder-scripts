function onGLC(glc) {
	glc.loop();
	glc.size(400, 400);
	glc.setDuration(2);
	glc.setFPS(30);
	glc.setMode('single');
	//glc.setEasing(false);
	glc.setMaxColors( 256 );
	glc.setQuality( 1 );
	var list = glc.renderList,
		width = glc.w,
		height = glc.h,
		color = glc.color;

	// your code goes here:
	glc.styles.backgroundColor = '#234';
	var nr = 5;
	var corners = [];
	var size = 6;
	var dist = 35;
		
	var c = list.addContainer({
		x: width / 2,
		y: height / 2,
	});

	list.addCircle({
		x: 0,
		y: 0,
		radius: size,
		stroke: false,
		fill: true,
		fillStyle: 'white',
		parent: c
	});
	
	for( var n=1; n<nr; n++ ){
		
		var rad = n * dist;
		var sideDots = Math.max( 0, n - 1 );
		var totalDots = 8;
		if( sideDots > 0 ){
			totalDots += 6 * sideDots;
		}

		for( var i=0; i<6; i++ ){
			corners[i] = {
				x: Math.sin( (i/6) * 2*Math.PI ) * rad,
				y: -Math.cos( (i/6) * 2*Math.PI ) * rad
			}
		}
		
		for( var d=0; d<totalDots; d++ ){
			
			var pos = getDotPosition( rad, sideDots, totalDots, d );
			var pos2 = getDotPosition( rad, sideDots, totalDots, d+1 );
			
			list.addCircle({
				x: [ pos.x, pos2.x ],
				y: [ pos.y, pos2.y ],
				radius: size,
				stroke: false,
				fill: true,
				fillStyle: 'white',
				parent: c
			});

		}
		
	}
	
	
	function getDotPosition( rad, sideDots, totalDots, d ){

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
