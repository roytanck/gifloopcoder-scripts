function onGLC(glc) {
	glc.loop();
	// glc.playOnce();
	glc.size( 320, 320 );
	glc.setDuration( 2 );
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
	var nr = 30;
	var maxsize = 600;
	var points = 5;
	var rot = Math.random() * 360;
	var col = color.rgba( 100,160,120, 1 );
	glc.styles.backgroundColor = col;

	for( var i=0; i<nr; i++){

		var size = maxsize - ( (i/nr) * maxsize );

		list.addStar({
			x: width/2,
			y: height/2,
			innerRadius: function( t ){
				return this.basesize/2 + Math.sin( t*2*Math.PI ) * (this.basesize/16);
			},
			outerRadius: function( t ){
				return this.basesize + Math.sin( t*2*Math.PI ) * this.basesize/8;
			},
			rotation: function( t ){
				return rot + Math.sin( t*2*Math.PI )*4;
			},
			points: points,
			stroke: true,
			lineWidth: 1,
			strokeStyle: color.rgba( 255, 255, 255, 0.7 ),
			fill: true,
			fillStyle: col,
			shadowColor: color.rgba( 0, 0, 0, 0.35 ),
			shadowOffsetX: 4,
			shadowOffsetY: 8,
			shadowBlur: 10,
			basesize: size,
			phase: i/nr
		});
	}

}