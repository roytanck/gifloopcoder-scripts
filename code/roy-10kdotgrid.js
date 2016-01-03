function onGLC(glc) {
	glc.loop();
	glc.size(400, 400);
	glc.setDuration(2.5);
	glc.setFPS(25);
	glc.setMode('single');
	glc.setEasing(false);
	glc.setMaxColors(24);
	glc.setQuality( 1 );
	var list = glc.renderList,
		width = glc.w,
		height = glc.h,
		color = glc.color;

	// your code goes here:
	glc.styles.backgroundColor = '#144';

	var grid = 70;
	var extra = 50;
	var maxDist = Math.sqrt( Math.pow( width/2 + extra, 2 ), Math.pow( height/2 + extra, 2 ) );
	
	for( var x=0; x<grid; x++){
		for( var y=0; y<grid; y++){
		
			var xpos = x * ( width + 2*extra ) / grid - extra;
			var ypos = y * ( height + 2*extra ) / grid - extra;
			var xdist = xpos - width/2;
			var ydist = ypos - height/2;
			var dist = Math.sqrt( Math.pow( xdist, 2 ) + Math.pow( ydist, 2 ) );

			list.addCircle({
				x: function( t ){
					return this.xpos + Math.sin( t*2*Math.PI ) * this.xdist/7;
				},
				y: function( t ){
					return this.ypos + Math.sin( t*2*Math.PI ) * this.ydist/7;
				},
				radius: 1.25,
				fill: true,
				fillStyle: '#fff',
				stroke: false,
				phase: dist / maxDist,
				xpos: xpos,
				ypos: ypos,
				xdist: xdist,
				ydist: ydist,
				speedMult: -1,
			});
		}
	}
}