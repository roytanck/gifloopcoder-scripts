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
    var dist = 12;
    var gridx = 640/dist + 1;
    var gridy = 480/dist + 1;
    var margin = 0;
    var size = 4.5;
    var maxWavelength = 300;
    
	for( var i=0; i<nr; i++ ){
        sources.push({
            x: Math.random() * width,
            y: Math.random() * height,
            wl: ( maxWavelength/2 ) + Math.random() * (maxWavelength/2),
            speed: Math.ceil( Math.random()*33 ),
            r: Math.ceil( 100 + Math.random() * 155 ),
            g: Math.ceil( 100 + Math.random() * 155 ),
            b: Math.ceil( 100 + Math.random() * 155 ),
        });
    }

    for( var x=0; x<gridx; x++ ){
        for( var y=0; y<gridy; y++ ){
            
            var c = list.addCircle({
                x: margin + x * dist,
                y: margin + y * dist,
                //fillStyle: 'white',
                radius: function( t ){
                    var s = 0;
                    for( var i=0; i<sources.length; i++ ){
                		var sourceDist = Math.sqrt( Math.pow( Math.abs( sources[i].x - this.x ), 2 ) + Math.pow( Math.abs( sources[i].y - this.y ), 2 ) );
                        var wavePos = ( ( t * sources[i].speed ) - ( sourceDist % sources[i].wl ) / sources[i].wl ) * ( 2 * Math.PI );
                        s += ( size / sources.length ) + Math.sin( wavePos ) * ( size / sources.length );
                    }
                    return s;
                },
                fillStyle: function( t ){
                    var r = 0;
                    var g = 0;
                    var b = 0;
                    for( var i=0; i<sources.length; i++ ){
                		var sourceDist = Math.sqrt( Math.pow( Math.abs( sources[i].x - this.x ), 2 ) + Math.pow( Math.abs( sources[i].y - this.y ), 2 ) );
                        var wavePos = ( ( t * sources[i].speed ) - ( sourceDist % sources[i].wl ) / sources[i].wl ) * ( 2 * Math.PI );
                        r += ( sources[i].r / nr ) + Math.sin( wavePos ) * ( sources[i].r / nr );
                        g += ( sources[i].g / nr ) + Math.sin( wavePos ) * ( sources[i].g / nr );
                        b += ( sources[i].b / nr ) + Math.sin( wavePos ) * ( sources[i].b / nr );
                    }
                    return color.rgb( r, g, b );
                },
                //blendMode: 'screen',
            });

        }
    }
    
}
