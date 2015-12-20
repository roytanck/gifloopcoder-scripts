function onGLC(glc) {
	glc.loop();
	glc.size(400, 400);
	glc.setDuration( 3 );
	glc.setFPS( 25 );
	glc.setMode( 'single' );
	glc.setEasing( false );
	glc.setMaxColors( 64 );
	glc.setQuality( 1 );
	var list = glc.renderList,
		width = glc.w,
		height = glc.h,
		color = glc.color;

	// your code goes here:

	glc.styles.backgroundColor = color.rgba( 40, 40, 40, 1 );
	var sizeX = 32;
	var sizeY = 48;
	var gutter = 2;
	var gridX = Math.ceil( width/(sizeX+gutter)/2 ) + 1;
	var gridY = Math.ceil( height/(sizeY+gutter)/2 ) + 1;
	
	for( var x=-gridX; x<gridX; x++ ){
		for( var y=-gridY; y<gridY; y++ ){
			
			var xpos = width/2 + x * ( sizeX*2 + gutter ) + ( ( y%2==0 ) ? -( sizeX + gutter/2 ) : 0 );
			var ypos = height/2 + y * ( sizeY + gutter );
			var dist = Math.sqrt( Math.pow( width/2-xpos, 2 ) + Math.pow( height/2-ypos, 2 ) );
			
			list.addStar({
				x: xpos,
				y: ypos,
				points: 2,
				innerRadius: function( t ){
					return Math.sin( t*Math.PI ) * sizeX;
				},
				outerRadius: sizeY,
				stroke: false,
				rotation: 22.5,
				fillStyle: function(t){
					if( t < 0.5 ){
						var sat = 0.75 + t/2;
						return color.hsv( this.frontColor, sat, 1 );
					} else {
						var val = 1 - (t-0.5);
						return color.hsv( this.frontColor, 1, val );
					}
				},
				phase: dist/600,
				frontColor: 200,
			});
			
		}
	}

}