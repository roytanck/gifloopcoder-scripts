function onGLC(glc) {
	glc.loop();
	// glc.playOnce();
	glc.size(400, 400);
	glc.setDuration(3);
	glc.setFPS(30);
	//glc.setMode("single");
	//glc.setEasing(false);
	glc.setMaxColors(256);
	var list = glc.renderList,
		width = glc.w,
		height = glc.h,
		color = glc.color;

	// your code goes here:
	var nr = 5;
	var amp = 2;
	var counter = 0;

	for( var i=0; i<nr; i++ ){
		list.addBezierCurve({
			x0: width/2,
			y0: height/2,
			x1: getInnerX,
			y1: getInnerY,
			x2: width/2 + Math.sin( i*(2*Math.PI)/nr ) * 200,
			y2: height/2 + -Math.cos( i*(2*Math.PI)/nr ) * 200,
			x3: getOuterX,
			y3: getOuterY,
			fill: false,
			lineWidth: 2,
			strokeStyle: '#000000'
		});
	}


	function getInnerX( t ){
		var progress = counter + ( (t-0.5) * 2 ) * amp;
		return width/2 + Math.sin( progress*(2*Math.PI)/nr ) * 10;
	}

	function getInnerY( t ){
		var progress = counter + ( (t-0.5) * 2 ) * amp;
		return width/2 + -Math.cos( progress*(2*Math.PI)/nr ) * 10;
	}

	function getOuterX( t ){
		var progress = counter + ( (t-0.5) * 2 ) * amp;
		return width/2 + Math.sin( progress*(2*Math.PI)/nr ) * 300;
	}

	function getOuterY( t ){
		var progress = counter + ( (t-0.5) * 2 ) * amp;
		var y = height/2 + -Math.cos( progress*(2*Math.PI)/nr ) * 300;
		counter++;
		counter = counter%nr;
		return y;
	}
}