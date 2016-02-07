function onGLC(glc) {
    glc.loop();
	glc.size( 640, 480 );
	glc.setDuration( 30 );
	glc.setFPS( 60 );
	glc.setMode('single');
	glc.setEasing( false );
    glc.setMaxColors( 256 );
	glc.setQuality( 1 );
    var list = glc.renderList,
        width = glc.w,
        height = glc.h,
        color = glc.color;

    // your code goes here:
    glc.styles.backgroundColor = '#235';
	var sources = [];
    var nr = 6;
    var gridx = 640/6 + 1;
    var gridy = 480/6 + 1;
    var margin = 0;
    var dist = 6;
    var size = 2.3;
    var maxWavelength = 300;
    
	for( var i=0; i<nr; i++ ){
        sources.push({
            x: Math.random() * width,
            y: Math.random() * height,
            wl: ( maxWavelength/2 ) + Math.random() * (maxWavelength/2),
            speed: Math.ceil( Math.random()*33 ),
        });
    }

    for( var x=0; x<gridx; x++ ){
        for( var y=0; y<gridy; y++ ){
            
            var c = list.addCircle({
                x: margin + x * dist,
                y: margin + y * dist,
                fillStyle: 'white',
                radius: function( t ){
                    var s = 0;
                    for( var i=0; i<sources.length; i++ ){
                		var sourceDist = Math.sqrt( Math.pow( Math.abs( sources[i].x - this.x ), 2 ) + Math.pow( Math.abs( sources[i].y - this.y ), 2 ) );
                        var wavePos = ( ( t * sources[i].speed ) - ( sourceDist % sources[i].wl ) / sources[i].wl ) * ( 2 * Math.PI );
                        s += ( size / sources.length ) + Math.sin( wavePos ) * ( size / sources.length );
                    }
                    return s;
                },
            });

        }
    }
    
}
