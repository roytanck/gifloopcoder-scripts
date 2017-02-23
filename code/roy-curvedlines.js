function onGLC(glc) {
    glc.loop();
    glc.size(700, 500);
    glc.setDuration(3.5);
    glc.setFPS(25);
    glc.setMode('single');
    glc.setEasing(false);
    var list = glc.renderList,
        width = glc.w,
        height = glc.h,
        color = glc.color;

    // your code goes here:
    glc.styles.backgroundColor = '#333';
	var nr = 27;
    var margin = 100;
    var x0 = margin;
    var x1 = 300;
    var x2 = 400;
    var x3 = width - margin;
    var amplitude = 80;
	
    for( var i=0; i<nr; i++ ){

        var baseY = margin + i * ( ( height - ( margin*2 ) ) / (nr-1) );
        
        list.addBezierCurve({
            x0: x0,
            y0: baseY,
            x1: function(t){
                return x1 + Math.cos( t*2*Math.PI ) * amplitude;
            },
            y1: function(t){
                return this._baseY + Math.sin( t*2*Math.PI ) * amplitude;
            },
            x2: function(t){
                return x2 + Math.cos( t*2*Math.PI ) * amplitude;
            },
            y2: function(t){
                return this._baseY + Math.sin( (t+0.5)*2*Math.PI ) * amplitude;
            },
            x3: x3,
            y3: baseY,
            strokeStyle: '#fff',
            lineWidth: 1.5,
            phase: i/(nr*2.73),
            _baseY: baseY,
        });
        
    }
}