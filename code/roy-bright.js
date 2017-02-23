function onGLC(glc) {
    glc.loop();
    glc.size(600, 400);
    glc.setDuration(2);
    glc.setFPS(25);
    glc.setMode('single');
    glc.setEasing(false);
    var list = glc.renderList,
        width = glc.w,
        height = glc.h,
        color = glc.color;

    // your code goes here:
    glc.styles.backgroundColor = '#333f49';
	var nr = 12500;
    var size = 350;
    var margin = 100;
    
    for( var i=0; i<nr; i++ ){
        
        var dist = ( Math.random() * Math.random() ) * size;
        var angle = Math.random() * 2 * Math.PI;
        var x = (width/2) + Math.sin( angle ) * dist;
        var y = (height/2) - Math.cos( angle ) * dist;

        list.addLine({
            x0: function( t ){
            	return this._x + Math.sin( t*2*Math.PI ) * this._len;
            },
            y0: function( t ){
            	return this._y - Math.cos( t*2*Math.PI ) * this._len;
            },
            x1: function( t ){
            	return this._x - Math.sin( t*2*Math.PI ) * this._len;
            },
            y1: function( t ){
            	return this._y + Math.cos( t*2*Math.PI ) * this._len;
            },
            _x: x,
            _y: y,
            _len: (size-dist)/8 + Math.random() * (size/10),
            lineWidth: 1.75,
            strokeStyle: color.rgba( 255, 255, 255, ( (size-dist)/size )*0.025 ),
            blendMode: 'lighter',
            speedMult: ( Math.random() < 0.5 ) ? 1 : -1,
            phase: (i/nr),
        });
    }


}
