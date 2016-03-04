function onGLC(glc) {
    glc.loop();
    glc.size( 500, 500);
    glc.setDuration( 3 );
    glc.setFPS( 25 );
    glc.setMode('single');
    //glc.setEasing( false );
   	glc.setMaxColors( 48 );
	glc.setQuality( 1 );
    var list = glc.renderList,
        width = glc.w,
        height = glc.h,
        color = glc.color;

    // your code goes here:
    glc.styles.backgroundColor = '#233';
    var nr = 247;
    var maxRad = Math.sqrt( Math.pow( width/2, 2 ) + Math.pow( height/2, 2 ) );
    var maxVariance = 0.3;

	for( var i=0; i<nr; i++ ){
        
        var variance = Math.random() * maxVariance - maxVariance/2;
        
        list.addBezierSegment({
            x0: width/2,
            y0: height/2,
            x1: width/2 + Math.sin( ( i/nr + variance )*2*Math.PI ) * (maxRad*0.33),
            y1: height/2 - Math.cos( ( i/nr + variance )*2*Math.PI ) * (maxRad*0.33),
            x2: width/2 + Math.sin( ( i/nr - variance )*2*Math.PI ) * (maxRad*0.66),
            y2: height/2 - Math.cos( ( i/nr - variance )*2*Math.PI ) * (maxRad*0.66),
            x3: width/2 + Math.sin( (i/nr)*2*Math.PI ) * maxRad,
            y3: height/2 - Math.cos( (i/nr)*2*Math.PI ) * maxRad,
            percent: Math.random() * 0.7,
            phase: Math.random()/3,
            lineWidth: 1.15,
            strokeStyle: function( t ){
                var val = Math.cos( (t/2)*Math.PI ) / 3;
                return color.rgba( 255, 255, 255, val );
            }
        });
        
    }

}
