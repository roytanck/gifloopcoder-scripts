var pixels = [];
var initDone = 0;

function onGLC(glc) {
    glc.loop();
    glc.size( 360, 360);
    glc.setDuration( 2 );
    glc.setFPS( 25 );
    glc.setMode('single');
    glc.setEasing(false);
    glc.setMaxColors( 256 );
    glc.setQuality( 1 );
    var list = glc.renderList,
        width = glc.w,
        height = glc.h,
        color = glc.color;

    // your code goes here:
    var imgx = 60;
    var imgy = 60;
    var blocksize = 6;
    var hvar = 15;
    var svar = 0.1;
    var vvar = 0.1;

	var img = list.addImage({
		x: imgx/2,
		y: imgy/2,
		url: "file:///C:/Users/Roy/Desktop/glc-windows/lianne2-square3.png"
	});
	
    for( var x=0; x<imgx; x++ ){
        for( var y=0; y<imgy; y++ ){
            list.addRect({
                x: x * blocksize + (blocksize/2),
                y: y * blocksize + (blocksize/2),
                w: blocksize,
                h: blocksize,
                fillStyle: function( t ){
                    if( pixels.length != 0 ){
	                    var pixel = pixels[ this.xpos ][ this.ypos ];
                        // calculate hue
	                    var f1 = Math.sin( ( (t+this.rand1)%1 ) * Math.PI );
                        var hue = Math.round( f1 * ( pixel[3]-hvar ) + (1-f1) * ( pixel[3]+hvar ) );
                        hue = ( hue + 360 ) % 360;
                        // calculate sat
                        var f2 = Math.sin( ( (t+this.rand2)%1 ) * Math.PI );
                        var sat = ( f2 * ( pixel[4]-svar ) + (1-f2) * ( pixel[4]+svar ) );
                        // ... and val
                        var f3 = Math.sin( ( (t+this.rand3)%1 ) * Math.PI );
                        var val = ( f3 * ( pixel[5]-vvar ) + (1-f3) * ( pixel[5]+vvar ) );
                        // return the slightly modified color
                        return color.hsv( hue, sat, val );
                    } else {
                    	return this.defaultColor;    
                    }
                },
                xpos: x,
                ypos: y,
                defaultColor: color.rgba( 0, 0, 0, 0 ),
                rand1: Math.random(),
                rand2: Math.random(),
                rand3: Math.random(),
            });
        }
    }
    
    // harvest color info from the loaded image for use in the fillStyle function
    glc.onExitFrame = function(t) {
        if( t == 0 && pixels.length == 0 && initDone == 0 ){
            for( var x=0; x<imgx; x++ ){
                pixels[x] = [];
                for( var y=0; y<imgy; y++ ){
                    var pixel = glc.context.getImageData( x, y, 1, 1 ).data;
                    r = pixel[0];
                    g = pixel[1];
                    b = pixel[2];
                    var hsv = rgb2hsv( r, g, b );
                    pixels[x][y] = [ r, g, b, hsv.h, hsv.s, hsv.v ];
                }
            }
            initDone = 1;
        }
    }
}


/* slightly modified from: http://stackoverflow.com/a/8023734 */

function rgb2hsv () {
    var rr, gg, bb,
        r = arguments[0] / 255,
        g = arguments[1] / 255,
        b = arguments[2] / 255,
        h, s,
        v = Math.max(r, g, b),
        diff = v - Math.min(r, g, b),
        diffc = function(c){
            return (v - c) / 6 / diff + 1 / 2;
        };

    if (diff == 0) {
        h = s = 0;
    } else {
        s = diff / v;
        rr = diffc(r);
        gg = diffc(g);
        bb = diffc(b);

        if (r === v) {
            h = bb - gg;
        }else if (g === v) {
            h = (1 / 3) + rr - bb;
        }else if (b === v) {
            h = (2 / 3) + gg - rr;
        }
        if (h < 0) {
            h += 1;
        }else if (h > 1) {
            h -= 1;
        }
    }
    return {
        h: Math.round(h * 360),
        s: s,
        v: v
    };
}