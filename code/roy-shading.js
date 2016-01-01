function onGLC(glc) {
	glc.loop();
	glc.size( 400, 400 );
	glc.setDuration( 2 );
	glc.setFPS( 30 );
	glc.setMode('single');
	glc.setEasing( false );
	var list = glc.renderList,
		width = glc.w,
		height = glc.h,
		color = glc.color;

	// your code goes here:
	glc.styles.backgroundColor = '#125';
	var nr = 6;
	var radius = 70;
	
	for(var i=0; i<nr; i++ ){
		list.addPoly({
			x: function( t ){
				return width/2 + Math.sin( (t/nr)*2*Math.PI + this.offset ) * radius*1.1;
			},
			y: function( t ){
				return height/2 - Math.cos( (t/nr)*2*Math.PI + this.offset ) * radius*1.1;
			},
			radius: radius,
			sides: 3,
			fill: true,
			fillStyle: function( t ){
				var angle = this.nr/nr * 360 + ( t * ( 360/nr ) + 35 );
				var brightness = 0.2 + ( Math.abs( (angle%360) -180 ) / 180 ) * 0.8;
				return color.hsva( 200, 1, 1, brightness );
			},
			blendMode: 'screen',
			rotation: function( t ){
				return this.nr/nr * 360 + ( t * ( 360/nr ) + 90 );
			},
			nr: i,
			offset: (2*Math.PI) * (i/nr),
		});
	}

}