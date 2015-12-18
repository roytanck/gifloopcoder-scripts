function onGLC(glc) {
	glc.loop();
	glc.size( 400, 400 );
	glc.setDuration( 2.5 );
	glc.setFPS( 25 );
	glc.setMaxColors( 16 );
	glc.setQuality( 1 );
	var list = glc.renderList,
		width = glc.w,
		height = glc.h,
		color = glc.color;

	// your code goes here:
	glc.styles.backgroundColor = color.rgba( 40, 40, 40, 1 );

	var nr = 100;
	
	for( var i=0; i<nr; i++ ){
		
		var path = [];
		var points = 200;
		var radius = i*1.2;
		var waves = 5;

		var c = list.addContainer({
			x: width/2,
			y: height/2,
			rotation: [ 0, 360/(waves/2) ],
			phase: i/nr,
			speedMult: -1
		});
		
		for( var p=0; p<points+1; p++ ){
			var angle = (p/points)*2*Math.PI;
			var tempRadius = radius + Math.sin( angle*waves ) * radius/3;
			var x = Math.sin( angle ) * tempRadius;
			var y = -Math.cos( angle ) * tempRadius;
			path.push( x ); 
			path.push( y ); 
		}

		list.addPath({
			x: 0,
			y: 0,
			strokeStyle: color.rgba( 255, 255, 200, 1 - ( 1 * ( i/nr ) ) ),
			lineWidth: 0.5,
			path: path,
			parent: c,
		});
		
	}

}