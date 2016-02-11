function onGLC(glc) {
    glc.loop();
	glc.size( 1920, 1080 );
	glc.setDuration( 30 );
	glc.setFPS( 60 );
	glc.setMode('single');
	glc.setEasing( false );
    glc.setMaxColors( 256 );
	//glc.setQuality( 1 );
    var list = glc.renderList,
        width = glc.w,
        height = glc.h,
        color = glc.color;

    // your code goes here:
    var baseColor = Math.random() * 360; // 160
    var colorSpread = 60 + Math.random() * 300; // 120
    var backColor = Math.round( baseColor + Math.random() * colorSpread ); // 200
    var backBrightness = Math.random() * 0.25;
    glc.styles.backgroundColor = color.hsv( backColor, 1, backBrightness );
	
    var nr = 650;
    
    for( var i=0; i<nr; i++ ){
        
        var col = baseColor + Math.random() * colorSpread;
        var size = Math.random() * 650 + 20;
        var trans = 0.3 + Math.random() * 0.5;
        
        var gradient1 = color.createRadialGradient( 0, 0, 0, 0, 0, 0 );
 	   	gradient1.addColorStop( 0, color.hsva( col, 1, 1, trans/2 ) );
    	gradient1.addColorStop( 0.5, color.hsva( col, 1, 1, ( (trans/2) *0.95) ) );
    	gradient1.addColorStop( 0.9, color.hsva( col, 1, 1, ( (trans/2) *0.05) ) );
    	gradient1.addColorStop( 1, color.hsva( col, 1, 1, 0 ) );

        var gradient2 = color.createRadialGradient( 0, 0, 0, 0, 0, size );
 	   	gradient2.addColorStop( 0, color.hsva( col, 1, 1, trans ) );
    	gradient2.addColorStop( 0.5, color.hsva( col, 1, 1, (trans*0.95) ) );
    	gradient2.addColorStop( 0.9, color.hsva( col, 1, 1, (trans*0.05) ) );
    	gradient2.addColorStop( 1, color.hsva( col, 1, 1, 0 ) );
        
        
        list.addCircle({
            x: function( t ){
                return width/2 + Math.sin( ( t*2*Math.PI ) + this.offset ) * ( t * this.maxRadius );
            },
            y: function( t ){
                return height/2 - Math.cos( ( t*2*Math.PI ) + this.offset ) * ( t * this.maxRadius );
            },
            radius: [ 0, size ],
            fillStyle: [ gradient1, gradient2 ],
            blendMode: 'screen',
            phase: Math.random(),
            speedMult: Math.ceil( Math.random() * 5 ),
            globalAlpha: [ 0, 1 ],
            offset: Math.random() * 2 * Math.PI,
            maxRadius: Math.sqrt( Math.pow( width/2, 2 ) + Math.pow( height/2, 2 ) ) + size,
        });

    }
    
}
