function onGLC(glc) {
    glc.loop();
    glc.size(540, 540);
    glc.setDuration( 4.5 );
    glc.setFPS( 30 );
    glc.setMode('single');
    glc.setEasing(false);
    glc.setMaxColors( 16 );
	glc.setQuality( 1 );
    var list = glc.renderList,
        width = glc.w,
        height = glc.h,
        color = glc.color;

    // your code goes here:
    glc.styles.backgroundColor = color.hsv( 200, 1, 0.35 );
	var r = 100;
    var r2 = r/2;
    var a = r * Math.sqrt(3);
    var h = r/2 + r2/2;
    
    for( var x=-1; x<8; x++ ){
        
        var ypos = -h;
        
        for( var y=-1; y<9; y++ ){

            var oddeven = y % 2;
            ypos += oddeven ? r : r2;

 			list.addStar({
                x: x * a + ( Math.floor(y/2) % 2 ) * (a/2),
                y: ypos,
                //outerRadius: r,
                outerRadius: function( t ){
                    return r + Math.abs( Math.sin( t*2*Math.PI ) * (r/6.66) );
                },
                innerRadius: 0,
                points: 3,
                stroke: true,
                strokeStyle: 'white',
                lineWidth: 2,
                fill: false,
                //blendMode: 'screen',
                rotation: oddeven ? [ 90, 210 ] : [ 270, 390 ],
            });
            
        }
    }
}
