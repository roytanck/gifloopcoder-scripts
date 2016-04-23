function onGLC(glc) {
    glc.loop();
    glc.size( 600, 320 );
    glc.setDuration( 1 );
    glc.setFPS( 25 );
    glc.setMode( 'single' );
    glc.setEasing( false );
	glc.setMaxColors( 256 );
	glc.setQuality( 1 );
    var list = glc.renderList,
        width = glc.w,
        height = glc.h,
        color = glc.color;

    // your code goes here:
	glc.styles.backgroundColor = '#135';
    var nr = 51;
    var size = 120;
    var dist = 135;
    var diagSize = Math.sqrt( Math.pow( size, 2 ) + Math.pow( size, 2 ) );

    for( var j=0; j<2; j++ ){
    
        list.addRect({
            x: j ? width/2 - dist : width/2 + dist,
            y: height / 2,
            w: size * 2,
            h: size * 2,
            fill: true,
            fillStyle: color.rgba( 0, 0, 0, 0.3 ),
            stroke: true,
            strokeStyle: color.rgba( 255, 255, 255, 0.3 ),
            lineWidth: 1,
        });

        for( var i=0; i<nr; i++ ){

            list.addRay({
                x: j ? width/2 - dist : width/2 + dist,
                y: height / 2,
                angle: j ? [ 360, 0 ] : [ 0, 360 ],
                strokeStyle: color.rgba( 255, 255, 255, 0.75 ),
                length: function( t ){
                    var a = ( t*2*Math.PI ) % (Math.PI/2);
                    if( a > Math.PI/4 ){ a = (Math.PI/2) - a; }
                    var l = size / Math.cos( a );
                    return l;
                },
                lineWidth: 2.25,
                phase: i/nr,
                speedMult: 1/nr,
            });
        }

    }

}