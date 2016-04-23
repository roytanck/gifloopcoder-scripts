function onGLC(glc) {
    glc.loop();
    glc.size( 450, 450 );
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
    var nr = 17;
    var nr2 = 7;
    var size = 160;
    
    for( var r=0; r<nr2; r++ ){
        
        var rsize = size - r * ( size/nr2 );
        var nrofDots = Math.round( nr * ( rsize / size ) );
        var offset = Math.random();

        list.addRect({
            x: width/2,
            y: height/2,
            w: rsize * 2,
            h: rsize * 2,
            fill: false,
            fillStyle: color.rgba( 0, 0, 0, 0.3 ),
            stroke: true,
            strokeStyle: color.rgba( 255, 255, 255, 0.3 ),
            lineWidth: 1,
        });

        for( var i=0; i<nrofDots; i++ ){

            var container = list.addContainer({
                x: width / 2,
                y: height / 2,
                rotation: ( r%2 == 0) ? [ 0, 360 ] : [ 360, 0 ],
                phase: i/nrofDots + offset,
                speedMult: 1/nrofDots,
            });

            list.addCircle({
                x: function( t ){
                    var a = ( t*2*Math.PI ) % (Math.PI/2);
                    if( a > Math.PI/4 ){ a = (Math.PI/2) - a; }
                    var l = this.rsize / Math.cos( a );
                    return l;
                },
                y: 0,
                radius: 5,
                stroke: false,
                fillStyle: ( r%2 == 0 ) ? color.rgba( 255, 255, 255, 1 ) : color.rgba( 155, 200, 255, 1 ),
                parent: container,
                phase: i/nrofDots + offset,
                speedMult: 1/nrofDots,
                rsize: rsize,
            });
        }
    }    
}