function onGLC(glc) {
    glc.loop();
	glc.size( 640, 640 );
	glc.setDuration( 3 );
	glc.setFPS( 25 );
	glc.setMode('single');
	glc.setEasing( false );
    glc.setMaxColors( 128 );
	//glc.setQuality( 1 );
    var list = glc.renderList,
        width = glc.w,
        height = glc.h,
        color = glc.color;

    // your code goes here:
    glc.styles.backgroundColor = '#000';
	var sources = [];
    var nr = 5;
    var grid = 17;
    var dist = 32;
    var margin = 48 + dist/2;
    var maxWavelength = 800;
    var colorOffset = 260;//Math.floor( 360 * Math.random() );
    
	for( var i=0; i<nr; i++ ){
        sources.push({
            x: Math.random() * width,
            y: Math.random() * height,
            wl: ( maxWavelength * 0.25 ) + Math.random() * (maxWavelength * 0.75),
        });
    }

    for( var x=0; x<grid; x++ ){
        for( var y=0; y<grid; y++ ){
            
            var c = list.addRect({
                x: margin + x * dist,
                y: margin + y * dist,
                w: dist,
                h: dist,
                fillStyle: function( t ){
                    var a = 0;
                    for( var i=0; i<sources.length; i++ ){
                		var sourceDist = Math.sqrt( Math.pow( Math.abs( sources[i].x - this.x ), 2 ) + Math.pow( Math.abs( sources[i].y - this.y ), 2 ) );
                        var wavePos = ( t - ( sourceDist % sources[i].wl ) / sources[i].wl ) * ( 2 * Math.PI );
                        a += (0.5/sources.length) * Math.sin( wavePos ) + (0.6/sources.length);
                    }
                    return color.hsva( colorOffset + a*140, 1, 1, a );
                },
            });

        }
    }
    
}
