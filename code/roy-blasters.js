function onGLC(glc) {
	glc.loop();
	glc.size(600, 400);
	glc.setDuration(1.5);
	glc.setFPS(25);
	glc.setMode('single');
	glc.setEasing(false);
	var list = glc.renderList,
		width = glc.w,
		height = glc.h,
		color = glc.color;

	// your code goes here:
	glc.styles.backgroundColor = color.rgba( 40, 60, 80, 1 );
	var rebels = 35;
	var stormtroopers = 50;
	var battlefield = 900;
	
	for( var i=0; i<rebels; i++ ){
		
		var blasterAngle = Math.random() * Math.PI/4 - Math.PI*0.75;
		var blasterX = Math.sin( blasterAngle ) * battlefield;
		var blasterY = -Math.cos( blasterAngle ) * battlefield;

		var targetAngle = Math.random() * Math.PI/4 - Math.PI*0.75;
		var targetX = Math.sin( targetAngle ) * battlefield;
		var targetY = -Math.cos( targetAngle ) * battlefield;
		
		list.addSegment({
			x0: width/2 + blasterX,
			y0: height/2 + blasterY,
			x1: width/2 - targetX,
			y1: height/2 - targetY,
			segmentLength: 80,
			strokeStyle: color.rgba( 0, 255, 0, 1 ),
			lineWidth: 5,
			blendMode: 'lighter',
			shadowColor: color.rgba( 50, 255, 50, 1 ),
			shadowOffsetX: 0,
			shadowOffsetY: 0,
			shadowBlur: 10,
			phase: Math.random()
		});
	}
	
	for( var i=0; i<stormtroopers; i++ ){
		
		var blasterAngle = Math.random() * Math.PI/4 + Math.PI*0.25;
		var blasterX = Math.sin( blasterAngle ) * battlefield;
		var blasterY = -Math.cos( blasterAngle ) * battlefield;

		// reduce accuracy for stormtroopers
		var targetAngle = Math.random() * Math.PI/3 + Math.PI*0.25;
		var targetX = Math.sin( targetAngle ) * battlefield;
		var targetY = -Math.cos( targetAngle ) * battlefield;        
		
		list.addSegment({
			x0: width/2 + blasterX,
			y0: height/2 + blasterY,
			x1: width/2 - targetX,
			y1: height/2 - targetY,
			segmentLength: 80,
			strokeStyle: color.rgba( 255, 0, 0, 1 ),
			lineWidth: 5,
			blendMode: 'lighter',
			shadowColor: color.rgba( 255, 0, 0, 1 ),
			shadowOffsetX: 0,
			shadowOffsetY: 0,
			shadowBlur: 10,
			phase: Math.random()
		});
	}

}