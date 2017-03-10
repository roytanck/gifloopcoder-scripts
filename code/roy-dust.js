function onGLC(glc) {
    glc.loop();
    glc.size( 600, 600 );
    glc.setDuration( 4 );
    glc.setFPS( 25 );
    glc.setMode('single');
    glc.setEasing( false );
    var list = glc.renderList,
        width = glc.w,
        height = glc.h,
        color = glc.color;

    // your code goes here:
    glc.styles.backgroundColor = '#333';
	var nr = 1000,
        r = 140,
        r2 = 450,
        f = 2,
        size= 6;
	
    for( var i=0; i<nr; i++ ){

        var sx = Math.sin( (i/nr)*2*Math.PI ) * r;
        var sy = Math.cos( (i/nr)*2*Math.PI ) * r
        var dist = Math.random() * r2;
        var angle = Math.random() * ( 2*Math.PI );
        var tx = sx + Math.sin( angle ) * dist;
        var ty = sy - Math.cos( angle ) * dist;
        
        list.addCircle({
            x: [ (width/2)+(sx+(0.025*tx)), (width/2)+tx ],
            y: [ (height/2)+(sy+(0.025*ty)), (height/2)+ty ],
            radius: function(t){
                if( t <= (1/f) ){
                    return size - (t*(size*f));
                } else {
                    return 0;
                }
            },
            stroke: false,
            fillStyle: color.rgba(255,200,100,0.65),
            blendMode: 'lighter',
            phase: i/nr,
        });
	
        
    }
}