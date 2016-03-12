function onGLC(glc) {
    glc.loop();
    glc.size( 500, 500 );
    glc.setDuration( 3 );
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
    var bgcol = color.hsv( 200, 1, 0.2 );
	glc.styles.backgroundColor = bgcol;
    var colors = [
        color.hsv( 20, 1, 1 ),
        bgcol,
        color.hsv( 50, 1, 1 ),
        bgcol,
    ];
    var layers = colors.length;
	var points = 13;
    var segments = 150;
    var wave = 0.04;
    
    for( var l=0; l<layers; l++ ){

        for( var p=0; p<points; p++ ){

            var segmentSize = 25;
            var offset = (l/layers) * (1/points) * 2*Math.PI;

            for( var s=0; s<segments; s++ ){

                var size = segmentSize * ((segments-s)/segments);
                var rad = s*1.1;

                list.addCircle({
                    x: function( t ){
                        return width/2 + Math.sin( ( this.point/points + Math.sin( t*2*Math.PI )*wave )*2*Math.PI + this.offset ) * this.rad;
                    },
                    y: function( t ){
                        return width/2 - Math.cos( ( this.point/points + Math.sin( t*2*Math.PI )*wave )*2*Math.PI + this.offset ) * this.rad;
                    },
                    radius: size,
                    stroke: false,
                    fillStyle: colors[l],
                    point: p,
                    segment: s,
                    rad: rad,
                    offset: offset,
                    phase: 1 - s/segments + ( (l/layers) / 8 ),
                });
           }
        }
    }
}
