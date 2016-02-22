function onGLC(glc) {
    glc.loop();
    glc.size(540, 540);
    glc.setDuration( 2.5 );
    glc.setFPS( 30 );
    glc.setMode('single');
    //glc.setEasing(false);
    glc.setMaxColors( 32 );
	glc.setQuality( 1 );
    var list = glc.renderList,
        width = glc.w,
        height = glc.h,
        color = glc.color;

    // your code goes here:
    glc.styles.backgroundColor = color.hsv( 200, 1, 0.35 );
	var r = 80;
    var r2 = r/2;
    var a = r * Math.sqrt(3);
    var h = r/2 + r2/2;
    
    for( var x=-1; x<8; x++ ){
        
        var ypos = -h;
        
        for( var y=-1; y<9; y++ ){

            var oddeven = y % 2;
            ypos += oddeven ? r : r2;

 			list.addPoly({
                x: x * a + ( Math.floor(y/2) % 2 ) * (a/2),
                y: ypos,
                radius: function( t ){
                    return ( r*0.75 + Math.cos( t*2*Math.PI ) * (r*0.25) ) - 3;
                },
                sides: 3,
                stroke: false,
                fill: true,
                fillStyle: color.hsva( 40, ( oddeven ? 0.75 : 0.5 ), 1, 1 ),
	            //blendMode: 'screen',
                rotation: oddeven ? [ 90, 210 ] : [ 270, 390 ],
            });
            
        }
    }
}
