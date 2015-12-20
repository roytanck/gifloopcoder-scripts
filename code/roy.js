function onGLC(glc) {
    glc.loop();
    glc.size(400, 400);
    glc.setDuration( 4 );
    glc.setFPS( 25 );
    glc.setMode( 'single' );
    glc.setEasing( false );
    var list = glc.renderList,
        width = glc.w,
        height = glc.h,
        color = glc.color;

    // your code goes here:

	glc.styles.backgroundColor = color.rgba( 0, 0, 0, 1 );
    var sizeX = 30;
    var sizeY = 50;
    var gutter = 5;
    
    for( var x=0; x<width+sizeX; x+= sizeX*2 + gutter ){
        for( var y=0; y<height+sizeY; y+= sizeY*2 + gutter ){

            list.addStar({
                x: x,
                y: y,
                points: 2,
                innerRadius: function( t ){
                    return Math.sin( t*2*Math.PI ) * sizeX;
                },
                outerRadius: sizeY,
                stroke: false,
                rotation: 90,
                fillStyle: function(t){
                    if( t < 0.25 ){
                        var sat = t*4;
                        return color.hsv( this.frontColor, sat, 1 );
                    } else if( t >=0.25 && t < 0.5 ) {
                        var val = 1 - (t-0.25)*2;
                        return color.hsv( this.frontColor, 1, val );
                    } else if( t >=0.5 && t < 0.75 ) {
                        var sat = (t-0.5)*4;
                        return color.hsv( this.backColor, sat, 1 );
                    } else {
                        var val = 1 - (t-0.75)*2;
                        return color.hsv( this.backColor, 1, val );
                    }
                },
//                 shadowColor: color.rgba( 0, 0, 0, 0.5 ),
//                 shadowOffsetX: 50,
//                 shadowOffsetY: 10,
//                 shadowBlur: 40,
                frontColor: 0,
                backColor: 200
            });
            
        }
    }



}