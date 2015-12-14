function onGLC(glc) {
	glc.loop();
	glc.size( 600, 400 );
	glc.setDuration( 1 );
	glc.setFPS( 30 );
	//glc.setMode( "single" );
	glc.setEasing( false );
	glc.setMaxColors( 256 );
	glc.setQuality( 1 );
	var list = glc.renderList,
		width = glc.w,
		height = glc.h,
		color = glc.color;

	// your code goes here:
	glc.styles.backgroundColor = color.rgba( 80, 80, 160, 1 );
	var nr = 3;
	var startX = 150;
	var dist = 150;

	var gradient = color.createLinearGradient( 0, -height/2, 0, height/2 );
    gradient.addColorStop( 0, '#112' );
    gradient.addColorStop( 1, '#66a' );

    list.addRect({
    	x: width/2,
    	y: height/2,
    	w: width,
    	h: height,
    	stroke: false,	
    	fillStyle: gradient
    });

	for( var i=0; i<nr; i++ ){

		var phase = Math.random();

		var shadow = list.addOval({
			x: function( t ){
				return ( startX + this.nr*dist + 10 ) + Math.sin( t*Math.PI/2 ) * 120;
			},
			y: function( t ){
				return ( height*0.75 + 30 ) - Math.sin( t*Math.PI/2 ) * 50;
			},
			fill: true,
			fillStyle: function( t ){
				return color.rgba( 0, 0, 0, 0.2 - Math.sin( t*Math.PI/2 ) * 0.15 );
			},
			rx: function( t ){
				return 40 + Math.sin( t*Math.PI/2 ) * 15;
			},
			ry: function( t ){
				return 15 + Math.sin( t*Math.PI/2 ) * 5;
			},
			shadowColor: color.rgba( 0, 0, 0, 1 ),
			shadowOffsetX: 0,
			shadowOffsetY: 0,
			shadowBlur: 20,
			nr: i,
			phase: i/nr
		});

		var gradient = color.createRadialGradient( -18, -22, 0, -36, -44, 85 );
		gradient.addColorStop( 0, 'white' );
		gradient.addColorStop( 0.6, '#66a' );
		gradient.addColorStop( 0.9, '#000' );
		gradient.addColorStop( 1, '#224' );

		var ball = list.addCircle({
			x: startX + i * dist,
			y: function( t ){ return height*0.75 - Math.abs( Math.sin( t*Math.PI/2 ) * height/2 ); },
			radius: 40,
			stroke: false,
			fille: true,
			fillStyle: gradient,
			nr: i,
			phase: i/nr
		});

	}

}