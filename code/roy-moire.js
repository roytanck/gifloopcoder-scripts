function onGLC(glc) {
    glc.loop();
    glc.size(600, 600);
    glc.setDuration(5);
    glc.setFPS(25);
    glc.setMode('single');
    glc.setEasing(false);
    var list = glc.renderList,
        width = glc.w,
        height = glc.h,
        color = glc.color;

    // your code goes here:
    glc.styles.backgroundColor = '#345';
	nr = 51
    
    for( var j=0; j<2; j++ ){
        
        var rot = Math.random() * Math.PI * 2;

        for( var i=0; i<nr; i++ ){
            list.addCircle({
                x: function( t ){
                    return width/2 + Math.sin( t*2*Math.PI ) * this._r;
                },
                y: function( t ){
                    if( this._j % 2 == 0 ){
	                    return height/2 + Math.cos( t*2*Math.PI + this._rot ) * this._r;
                    } else {
                        return height/2 - Math.cos( t*2*Math.PI + this._rot ) * this._r;
                    }
                },
                radius: i*4,
                stroke: true,
                strokeStyle: color.rgba( 255, 255, 255, (i/nr) ),//'#fff',
                fill: false,
                blendMode: 'lighter',
                lineWidth: 0.5,
                _r: (nr-i),
                _j: j,
                _rot: rot,
                phase: (i/nr)/2 + (j/2)
            });

        }
        
    }
}
