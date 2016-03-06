function onGLC(glc) {
    glc.loop();
    glc.size( 700, 700 );
    glc.setDuration( 4 );
    glc.setFPS( 30 );
    glc.setMode('single');
    glc.setEasing(false);
	glc.setMaxColors( 32 );
	glc.setQuality( 1 );
    var list = glc.renderList,
        width = glc.w,
        height = glc.h,
        color = glc.color;

    // your code goes here:
	glc.styles.backgroundColor = '#345';
	var points = 9;
    var segments = 120;
    var wave = 0.03;
    
    for( var p=0; p<points; p++ ){
        
        var segmentSize = 35;
        
        for( var s=0; s<segments; s++ ){
            
            segmentSize = segmentSize * 0.98;
            var rad = s*2;
            
            list.addCircle({
                x: function( t ){
                    return width/2 + Math.sin( ( this.point/points + Math.sin( t*2*Math.PI )*wave )*2*Math.PI ) * this.rad;
                },
                y: function( t ){
                    return width/2 - Math.cos( ( this.point/points + Math.sin( t*2*Math.PI )*wave )*2*Math.PI ) * this.rad;
                },
                radius: segmentSize,
                stroke: false,
                fillStyle: '#fff8cc',
                point: p,
                segment: s,
                rad: rad,
                phase: 1 - s/segments,
            });
	
        }
        
    }

}
