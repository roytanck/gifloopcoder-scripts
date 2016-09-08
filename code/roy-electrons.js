function onGLC(glc) {
    glc.loop();
    glc.size(400, 400);
    glc.setDuration(3);
    glc.setFPS(25);
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
	var nr = 39;
    var cols = [ '#c00', '#0c0', '#00c' ];
    
    for( var i=0; i<nr; i++ ){
        
        var angle = Math.random() * 360;
        
        var c = list.addContainer({
			x: width / 2,
			y: height / 2,
            rotation: angle
		});
        
        list.addCircle({
            x: function( t ){
                return Math.sin( t*2*Math.PI ) * this._radius;
            },
            y: 0,
            radius: function( t ){
                return ( this._size * 1.5 ) + Math.cos( t*2*Math.PI ) * this._size;
            },
            parent: c,
            stroke: false,
            fillStyle: cols[ i%cols.length ], //color.rgba( 255, 255, 255, 0.7 ),
            blendMode: 'screen',
            phase: Math.random(),
            _radius: 40 + Math.random() * 100,
            _size: Math.random() * 30,
        });
        
    }

}
