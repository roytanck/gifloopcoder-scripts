function onGLC(glc) {
    glc.loop();
    glc.size(600, 400);
    glc.setDuration(6.5);
    glc.setFPS(30);
    glc.setMode('single');
    glc.setEasing(false);
    var list = glc.renderList,
        width = glc.w,
        height = glc.h,
        color = glc.color;

    // your code goes here:
    var lw = function(t){
        return Math.sin( Math.PI*t ) * 10;
    };
    
    var rad = function(t){
        if( t< 0.25 || t>0.75 ){
	        if( t > 0.75 ){ t = t -0.5; }
        	return 325 - Math.sin( Math.PI*t*2 ) * 275;
        } else {
            return 50;
        }
    };
    
    var ga = function(t){
        return 1;
    };
    
    var ss = function(t){
        var f = 1-Math.sin( Math.PI * t );
        var r = this._r + f * ( 255-this._r );
        var g = this._g + f * ( 255-this._g );
        var b = this._b + f * ( 255-this._b );
        return color.rgb( r, g, b );
    }
    
    var container = list.addContainer({
		x: width / 2,
		y: height / 2 - 10,
        globalAlpha: function(t){
        	return Math.sin( Math.PI*t );
    	}
	});
	
	var blue1 = list.addCircle({
		x: -120,
		y: -25,
		radius: rad,
        stroke: true,
        strokeStyle: ss,
        _r: 0,
        _g: 133,
        _b: 199,
        fill: false,
        lineWidth: lw,
        startAngle: 45,
        endAngle: 235,
        globalAlpha: ga,
        parent: container
	});

    var yellow1 = list.addCircle({
		x: -60,
		y: 25,
		radius: rad,
        stroke: true,
        strokeStyle: ss,
        _r: 244,
        _g: 195,
        _b: 0,
        fill: false,
        lineWidth: lw,
        startAngle: -45,
        endAngle: 135,
        globalAlpha: ga,
        parent: container
	});

    var red1 = list.addCircle({
		x: 120,
		y: -25,
		radius: rad,
        stroke: true,
        strokeStyle: ss,
        _r: 223,
        _g: 0,
        _b: 36,
        fill: false,
        lineWidth: lw,
        startAngle: 135,
        endAngle: 135+180,
        globalAlpha: ga,
        parent: container
	});
    
	var green1 = list.addCircle({
		x: 60,
		y: 25,
		radius: rad,
        stroke: true,
        strokeStyle: ss,
        _r: 0,
        _g: 159,
        _b: 61,
        fill: false,
        lineWidth: lw,
        startAngle: -135,
        endAngle: 45,
        globalAlpha: ga,
        parent: container
	});
    
    var black = list.addCircle({
		x: -0,
		y: -25,
		radius: rad,
        stroke: true,
        strokeStyle: ss,
		_r: 0,
        _g: 0,
        _b: 0,
        fill: false,
        lineWidth: lw,
        globalAlpha: ga,
        parent: container
	});

    var red2 = list.addCircle({
		x: 120,
		y: -25,
		radius: rad,
        stroke: true,
        strokeStyle: ss,
		_r: 223,
        _g: 0,
        _b: 36,
        fill: false,
        lineWidth: lw,
        startAngle: -45,
        endAngle: 135,
        globalAlpha: ga,
        parent: container
	});
    
    var yellow2 = list.addCircle({
		x: -60,
		y: 25,
		radius: rad,
        stroke: true,
        strokeStyle: ss,
        _r: 244,
        _g: 195,
        _b: 0,
        fill: false,
        lineWidth: lw,
        startAngle: 135,
        endAngle: 135+180,
        globalAlpha: ga,
        parent: container
	});

	var green3 = list.addCircle({
		x: 60,
		y: 25,
		radius: rad,
        stroke: true,
        strokeStyle: ss,
        _r: 0,
        _g: 159,
        _b: 61,
        fill: false,
        lineWidth: lw,
        startAngle: 45,
        endAngle: 235,
        globalAlpha: ga,
        parent: container
	});

	var blue2 = list.addCircle({
		x: -120,
		y: -25,
		radius: rad,
        stroke: true,
        strokeStyle: ss,
		_r: 0,
        _g: 133,
        _b: 199,
        fill: false,
        lineWidth: lw,
        startAngle: 235,
        endAngle: 235+180,
        globalAlpha: ga,
        parent: container
	});

}

