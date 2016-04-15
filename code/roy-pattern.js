function onGLC(glc) {
    glc.loop();
    glc.size( 480, 480 );
    glc.setDuration( 2.5 );
    glc.setFPS( 30 );
    glc.setMode( 'single' );
    //glc.setEasing( false );
	glc.setMaxColors( 16 );
	glc.setQuality( 5 );
    var list = glc.renderList,
        width = glc.w,
        height = glc.h,
        color = glc.color;

    // your code goes here:
    glc.styles.backgroundColor = color.hsv( 200, 0, 1 );
    var margin = 80;
	var grid = 10;
    var dist = ( width - 2*margin ) / (grid-1);
    var size = Math.sin( 0.25*Math.PI ) * (dist/2);
    var dotSize = 2.5;

    var positions = [];
    for( var d=0; d<4; d++ ){
        positions[d] = {
            x: Math.sin( ( (d/4) + 0.125 ) * 2*Math.PI ) * size,
            y: -Math.cos( ( (d/4) + 0.125 ) * 2*Math.PI ) * size,
        }
    }    

    for( var x=0; x<(grid*2); x++ ){
        list.addRay({
            x: margin + x * dist/2 - dist/4,
            y: 0,
            angle: 90,
			length: height,
            strokeStyle: 'black',
            lineWidth: 0.15,
        });
    }
    
    for( var y=0; y<(grid*2); y++ ){
        list.addRay({
            x: 0,
            y: margin + y * dist/2 - dist/4,
            angle: 0,
			length: height,
            strokeStyle: 'black',
            lineWidth: 0.15,
        });
    }
    
    for( var x=0; x<grid; x++ ){
        for( var y=0; y<grid; y++ ){
            for( var d=0; d<4; d++ ){
                list.addCircle({
                    x: [
                        margin + x * dist + positions[d].x,
                        margin + x * dist + positions[(d+1)%4].x,
                    ],
                    y: [
                        margin + y * dist + positions[d].y,
                   	    margin + y * dist + positions[(d+1)%4].y,
                   	],
                    radius: dotSize,
                    fillStyle: 'black',
                    phase: (y/grid)/2 + (x/grid)/5
                });
            }
        }
    }
    
}