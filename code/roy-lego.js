function onGLC(glc) {
    glc.loop();
    glc.size( 450, 300 );
    glc.setDuration( 2 );
    glc.setFPS( 25 );
    glc.setMode( 'single' );
    glc.setEasing( false );
    glc.setMaxColors(96);
    glc.setQuality( 1 );
    var list = glc.renderList,
        width = glc.w,
        height = glc.h,
        color = glc.color;

    // your code goes here:
    glc.styles.backgroundColor = color.hsv( 200, 1, 1 );

    var grid = 7;
    var brickSize = 48;
    
    for( var x=-grid; x<=grid; x++ ){
	    for( var y=-grid; y<=grid; y++ ){
            var xpos = width/2 + brickSize * x - brickSize * y;
            var ypos = height/2 + (brickSize/2) * y + (brickSize/2) * x;
            var col = 170 + Math.floor( Math.random() * 6 ) * 10;
            drawBrick( xpos, ypos, col, y/16 + x/8 );
 
        }
    }
    
    // draw a single brick
    function drawBrick( xpos, ypos, col, phase ){
        
        var c = list.addContainer({
            x: xpos,
            y: function( t ){
                return this.ypos + Math.sin( (t+this.myphase)*2*Math.PI ) * 15;
            },
           	scaleX: 1 * ( brickSize/100 ),
            scaleY: 1 * ( brickSize/100 ),
            myphase: phase,
            ypos: ypos,
        });
        
        // base box
        list.addIsobox({
            x: 0,
            y: 0,
            size: 200,
            h: 75,
            colorTop: color.hsv( col, 1, 1 ),
            colorRight: color.hsv( col, 1, 0.5 ),
            colorLeft: color.hsv( col, 1, 0.75 ),
            parent: c,
        });
	
        // studs
        for( var i=0; i<4; i++ ){
            list.addIsotube({
                x: Math.sin( (i/2)*Math.PI ) * 48,
                y: -75 - Math.cos( (i/2)*Math.PI ) * 24,
                radius: 24,
                h: 16,
                colorTop: color.hsv( col, 1, 1 ),
                colorRight: color.hsv( col, 1, 0.5 ),
                colorLeft: color.hsv( col, 1, 0.75 ),
                parent: c,
            });
        }
	
    }

}
