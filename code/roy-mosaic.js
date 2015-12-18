function onGLC(glc) {
	glc.loop();
	glc.size(400, 400);
	glc.setDuration(3);
	glc.setFPS(25);
	glc.setMode('single');
	//glc.setEasing(false);
	var list = glc.renderList,
		width = glc.w,
		height = glc.h,
		color = glc.color;

	// your code goes here:
	glc.styles.backgroundColor = color.rgba( 60, 60, 60, 1 );
	var nr = 10;
	var size = 40;
	var rings = 7;
	
	for( var r=0; r<rings; r++ ){

		for( var i=0; i<nr; i++ ){

			var rotStart = i*(360/nr);
			var rotOffset = r * ( ( 360/nr ) /2 ); 
			
			var c = list.addContainer({
				x: width/2,
				y: width/2,
				rotation: [ rotStart + rotOffset, rotStart + rotOffset + (360/(nr/2)) ],
			});

			list.addStar({
				x: (size+5) * r,
				y: 0,
				points: 2,
				innerRadius: [ (size/3.1) * r, -(size/3.1) * r ],
				outerRadius: size,
				stroke: false,
				fillStyle: ( i % 2 ) ? color.rgba(255,240,0,1-r*0.15) : color.rgba(255,200,0,1-r*0.15),
				parent: c,
			});        
		}
		
	}

}