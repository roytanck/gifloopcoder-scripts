function onGLC(glc) {
	glc.loop();
	// glc.playOnce();
	glc.size(400, 400);
	glc.setDuration(3);
	glc.setFPS(20);
	glc.setMode("single");
	glc.setEasing(false);
	glc.setMaxColors(16);
	var list = glc.renderList,
		width = glc.w,
		height = glc.h,
		color = glc.color;

	// your code goes here:
	glc.styles.backgroundColor = '#fff8ee';
	var grid = 9;
	var length = Math.sqrt( Math.pow((width/grid),2) + Math.pow((width/grid),2) );
	var letters = 'abcdefghijklmnopqrstuvwxyz';

	for( var x=0; x<grid+2; x++ ){
		for( var y=0; y<grid+2; y++ ){
			var letter = letters.charAt( Math.floor( Math.random() * letters.length ) );
			var offset = Math.random() * 360;
			list.addText({
				x: x * (width/grid) - (width/grid)/2,
				y: y * (height/grid) - (height/grid)/2,
				text: letter,
				fontSize: getSize,
				fontWeight: 'normal',
				fontFamily: 'sans-serif',
				fontStyle: 'normal',
				rotation: [ offset, offset + 360 ],
				fillStyle: color.rgba(0,0,0,0.7),
				phase: (x+y)/(grid+grid)
			});
		}
	}

	function getSize( t ){
		return Math.sin( t*Math.PI ) * ( 2.5 * length );
	}

}