function onGLC(glc) {
    glc.loop();
    glc.size( 500, 500 );
    glc.setDuration( 5 );
    glc.setFPS( 30 );
    glc.setMode('single');
    glc.setEasing(false);
    glc.setMaxColors( 256 );
	glc.setQuality( 5 );
    var list = glc.renderList,
        width = glc.w,
        height = glc.h,
        color = glc.color;

    // your code goes here:
    var nr = 5;
    var size = 90;
    var rad = 55;

    for( var i=0; i<nr; i++ ){

        list.addCrescent({
            x: width / 2 + Math.sin( (i/nr)*2*Math.PI ) * rad,
            y: height / 2 - Math.cos( (i/nr)*2*Math.PI ) * rad,
            radius: size,
            percent: function( t ){
                return 0.5 + Math.cos( t*2*Math.PI ) * 0.5;
            },
            baseAngle: 360*(i/nr),
            rotation: function( t ){
                return this.baseAngle + Math.cos( t*Math.PI ) * 180;
            },
            stroke: false,
            fillStyle: color.hsva( 200, 1, 1, 0.225 ),
        });
        
    }

}
