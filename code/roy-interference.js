function onGLC(glc) {
    glc.loop();
	glc.size( 460, 460 );
	glc.setDuration( 3 );
	glc.setFPS( 25 );
	glc.setMode('single');
	glc.setEasing( false );
    glc.setMaxColors( 8 );
	glc.setQuality( 1 );
    var list = glc.renderList,
        width = glc.w,
        height = glc.h,
        color = glc.color;

    // your code goes here:
    glc.styles.backgroundColor = '#235';
	var sources = [];
    var nr = 4;
    var grid = 40;
    var margin = 40;
    var dist = ( width - (2*margin) ) / (grid - 1 );
    var size = 3.5;
    var maxWavelength = 360;
    
	for( var i=0; i<nr; i++ ){
        sources.push({
            x: Math.random() * width,
            y: Math.random() * height,
            wl: ( maxWavelength/2 ) + Math.random() * (maxWavelength/2),
        });
    }

    for( var x=0; x<grid; x++ ){
        for( var y=0; y<grid; y++ ){
            
            var c = list.addCircle({
                x: margin + x * dist,
                y: margin + y * dist,
                fillStyle: 'white',
                radius: function( t ){
                    var s = 0;
                    for( var i=0; i<sources.length; i++ ){
                		var sourceDist = Math.sqrt( Math.pow( Math.abs( sources[i].x - this.x ), 2 ) + Math.pow( Math.abs( sources[i].y - this.y ), 2 ) );
                        var wavePos = ( t + ( sourceDist % sources[i].wl ) / sources[i].wl ) * ( 2 * Math.PI );
                        s += ( size / sources.length ) + Math.sin( wavePos ) * ( size / sources.length );
                    }
                    return s;
                },
            });

        }
    }
    
}
