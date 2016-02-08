function onGLC(glc) {
    glc.loop();
	glc.size( 1280, 720 );
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
    glc.styles.backgroundColor = '#236';
	
    var nr = 450;
    
    for( var i=0; i<nr; i++ ){
        
        var col = 100 + Math.random() * 120;
        var xpos = ( Math.random() * ( width * 5 ) ) - ( width * 2);
        var zpos = Math.random() * 10;
        var size = Math.random() * ( 30 * zpos ) + 10;
        var trans = 0.3 + Math.random() * 0.3;
        
        var gradient = color.createRadialGradient( 0, 0, 0, 0, 0, size );
 	   	gradient.addColorStop( 0, color.hsva( col, 1, 1, trans ) );
    	gradient.addColorStop( 0.5, color.hsva( col, 1, 1, (trans*0.95) ) );
    	gradient.addColorStop( 0.9, color.hsva( col, 1, 1, (trans*0.05) ) );
    	gradient.addColorStop( 1, color.hsva( col, 1, 1, 0 ) );
        
        list.addCircle({
            x: [ xpos + ( zpos * 300 ), xpos - ( zpos * 300 ) ],
            y: Math.random() * height,
            radius: size,
            //fillStyle: color.hsva( 80+Math.random()*100, 1, 1, 0.6 ),
            fillStyle: gradient,
            blendMode: 'screen',
        });
    }
    
}
