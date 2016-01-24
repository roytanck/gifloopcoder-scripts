function onGLC(glc) {
	glc.loop();
	glc.size( 400, 400 );
	glc.setDuration( 4 );
	glc.setFPS( 30 );
	glc.setMode('single');
	glc.setEasing( false );
	glc.setMaxColors( 16 );
	glc.setQuality( 1 );
	var list = glc.renderList,
		width = glc.w,
		height = glc.h,
		color = glc.color;

	// your code goes here:
	glc.styles.backgroundColor = '#235';
	var nr = 5;
	var nr2 = 21;
	var radius = 70;
	var radius2 = 17;
	
	// draw partial circles
	for(var i=0; i<nr; i++ ){
		
		for( var s=0; s<nr2; s++ ){

			list.addCircle({
				xpos: width/2 + Math.sin( (i/nr)*2*Math.PI ) * radius,
				ypos: height/2 - Math.cos( (i/nr)*2*Math.PI ) * radius,
				x: function( t ){
					return this.xpos + Math.sin( ( t + this.nr/nr ) * 2*Math.PI ) * radius2;	
				},
				y: function( t ){
					return this.ypos - Math.cos( ( t + this.nr/nr ) * 2*Math.PI ) * radius2;	
				},
				radius: radius - s * 3,
				fill: false,
				stroke: true,
				strokeStyle: color.rgba( 255,255,255,0.5 ),
				blendMode: 'screen',
				lineWidth: 0.95,
				startAngle: -360/nr,
				endAngle: 360/nr,
				rotation: [ i * (360/nr) -90, (i * (360/nr)) + 270 ],
				nr: i,
				nr2: s,
				phase: s/(nr*4.5)
			});

			
		}

	}

}