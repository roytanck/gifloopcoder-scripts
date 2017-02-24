function onGLC(glc) {
    glc.loop();
    glc.size(600, 600);
    glc.setDuration(2.5);
    glc.setFPS(25);
    glc.setMode('single');
    glc.setEasing(false);
    var list = glc.renderList,
        width = glc.w,
        height = glc.h,
        color = glc.color;

    // your code goes here:
    glc.styles.backgroundColor = '#333';
	var nr = 67;
    var margin = 100;
    var x0 = margin;
    var x1 = width/2;
    var x2 = width/2;
    var x3 = width - margin;
    var amplitude = 60;
	
    for( var i=0; i<nr; i++ ){

        var baseY = margin + i * ( ( height - ( margin*2 ) ) / (nr-1) );
        var stepX = ( (width)-(2*x0) )/(nr-1);
        var amp = amplitude * ( Math.abs( baseY-(width/2) ) / Math.abs( (width/2)-margin ) );
        
        list.addBezierCurve({
            x0: x0 + i * stepX,
            y0: baseY,
            x1: function(t){
                return x1 + Math.cos( t*2*Math.PI ) * this._ampl;
            },
            y1: function(t){
                return this._baseY + Math.sin( t*2*Math.PI ) * this._ampl;
            },
            x2: function(t){
                return x2 + Math.cos( t*2*Math.PI ) * this._ampl;
            },
            y2: function(t){
                return this._baseY + Math.sin( (t+0.37)*2*Math.PI ) * this._ampl;
            },
            x3: x3 - i * stepX,
            y3: baseY,
            strokeStyle: '#fff',
            lineWidth: 1.5,
            phase: i/(nr*3.73),
            _baseY: baseY,
            _ampl: amp
        });
        
        list.addBezierCurve({
            y0: x0 + i * stepX,
            x0: baseY,
            y1: function(t){
                return x1 + Math.cos( t*2*Math.PI ) * this._ampl;
            },
            x1: function(t){
                return this._baseY + Math.sin( (t+0.71)*2*Math.PI ) * this._ampl;
            },
            y2: function(t){
                return x2 + Math.cos( t*2*Math.PI ) * this._ampl;
            },
            x2: function(t){
                return this._baseY + Math.sin( (t+0.37)*2*Math.PI ) * this._ampl;
            },
            y3: x3 - i * stepX,
            x3: baseY,
            strokeStyle: '#fff',
            lineWidth: 1.5,
            phase: i/(nr*4.73),
            _baseY: baseY,
            _ampl: amp,//amplitude - i*stepAmp
        });
        
    }
}