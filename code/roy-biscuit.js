function onGLC(glc) {
    glc.loop();
    glc.size(480, 480);
    glc.setDuration( 4 );
    glc.setFPS( 25 );
    glc.setMode('single');
    glc.setEasing(false);
    glc.setMaxColors( 256 );
	glc.setQuality( 1 );
    var list = glc.renderList,
        width = glc.w,
        height = glc.h,
        color = glc.color;

    // your code goes here:
    glc.styles.backgroundColor = '#333';
    var dist = 50;
    var nr = 5;
    var size = dist*2;
    
    var container = list.addContainer({
		x: width / 2,
		y: height / 2,
        rotation: -45,
	});
	
    for( var x=0; x<nr; x++ ){
        for( var y=0; y<nr; y++ ){

            var xpos = x * dist - ((nr-1)/2) * dist;
            var ypos = y * dist - ((nr-1)/2) * dist;
            var maxDist = Math.sqrt( Math.pow( ((nr-1)/2)*dist,2 ) + Math.pow( ((nr-1)/2)*dist,2 ) );
            var dfc = Math.sqrt( Math.pow( xpos, 2 ) + Math.pow( ypos, 2 ) )  / maxDist;
            
            list.addCircle({
                x: xpos,
                y: ypos,
                radius: function( t ){
                    return ( 1 + Math.sin( t*2*Math.PI ) ) * ( ( size/2 ) * (1-this.dfc/2) );
                },
                fill: true,
                fillStyle: ( ((x*nr)+y) % 2 ) ? color.hsva( 190, 0.75, 1, 0.7 ) : color.hsva( 220, 0.75, 1, 0.7 ),
                blendMode: 'screen',
                globalAlpha: function( t ){
					return ( 1 + Math.sin( t*2*Math.PI ) ) * 0.5;
                },
                stroke: false,
                parent: container,
                phase: -( x/nr + y/nr ) / 15,
                dfc: dfc,
            });

        }
    }
}