function onGLC(glc) {
    glc.loop();
    glc.size( 500, 500 );
    glc.setDuration( 5 );
    glc.setFPS( 25 );
    glc.setMode('single');
    glc.setEasing(false);
    var list = glc.renderList,
        width = glc.w,
        height = glc.h,
        color = glc.color;

    // your code goes here:
    glc.styles.backgroundColor = color.rgb( 150, 150, 255);
    
	list.addStar({
		x: width / 2,
		y: height / 2,
		outerRadius: 200,
		innerRadius: 150,
		points: 30,
        //fillStyle: color.rgb(150,55,250 ),
        rotation: [ 0, 360/6 ],
        fillStyle: function( t ){
            return color.hsv( 280 + Math.sin(t*2*Math.PI)*30, 0.4, 0.7 );
        },
        phase: 0.5,
	});
	list.addHeart({
		x: width / 2,
		y: height / 2,
		//w: [180,-180],
        w: function( t ){
            return 90 + Math.sin(t*2*Math.PI) * 90;
        },
		h: 180,
        //fillStyle: color.rgb(250,100,150),
        //rotation: [ 0, 360 ],
        //fillStyle: ['pink','yellow','pink']
        fillStyle: function( t ){
            return color.hsv( 300 + Math.sin(t*2*Math.PI)*30, 0.4, 1 );
        },
	});
	


}
