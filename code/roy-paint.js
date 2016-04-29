var pixels = [];

function onGLC(glc) {
    glc.loop();
    glc.size( 720, 720);
    glc.setDuration( 1 );
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
    glc.styles.backgroundColor = color.rgb( 255, 255, 255 );
    var imgx = 80;
    var imgy = 80;
    var blocksize = 7.5;
    var margin = ( width - ( imgx * blocksize ) ) / 2;
    var hvar = 10;
    var svar = 0.1;
    var vvar = 0.1;

	var img = list.addImage({
		x: imgx/2,
		y: imgy/2,
		url: "file:///C:/Users/Roy/Desktop/glc-windows/lianne3-square80.png",
        globalAlpha: function( t ){
            return ( pixels.length == 0 ) ? 1 : 0;
        },
	});
	
    for( var x=0; x<imgx; x++ ){
        for( var y=0; y<imgy; y++ ){
            var angle = Math.random() * 70;
            if( Math.random() < 0.5 ){ angle += 180; }
            for( var i=0; i<5; i++ ){
                var xoffset = Math.random()*blocksize*2 - blocksize;
                var yoffset = Math.random()*blocksize*2 - blocksize;
                list.addRay({
                    x: x * blocksize + (blocksize/2) + xoffset + margin,
	                y: y * blocksize + (blocksize/2) + yoffset + margin,
                    stroke: true,
                    strokeStyle: function(t){
                    	if( pixels.length != 0 ){
                            var pixel = pixels[ this.xpos ][ this.ypos ];
                            return color.hsva( pixel[3], pixel[4], pixel[5], 0.25 );
                        } else {
                            return this.defaultColor;    
                        }
                    },
                    lineWidth: 8,
                    xpos: x,
                    ypos: y,
                    defaultColor: color.rgba( 0, 0, 0, 0 ),
                    angle: angle,
                    length: blocksize * 2,
                    //blendMode: 'darker',
                });
	
            }
        }
    }
    
    // harvest color info from the loaded image for use in the fillStyle function
    glc.onExitFrame = function(t) {
        if( t == 0 && pixels.length == 0 ){
            for( var x=0; x<imgx; x++ ){
                pixels[x] = [];
                for( var y=0; y<imgy; y++ ){
                    var pixel = glc.context.getImageData( x, y, 1, 1 ).data;
                    var hsv = rgb2hsv( pixel[0], pixel[1], pixel[2] );
                    pixels[x][y] = [ pixel[0], pixel[1], pixel[2], hsv.h, hsv.s, hsv.v ];
                }
            }
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