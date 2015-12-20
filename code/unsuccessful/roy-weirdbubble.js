function onGLC(glc) {
    glc.loop();
    glc.size(400, 400);
    glc.setDuration(2.5);
    glc.setFPS(20);
    glc.setMode('single');
    glc.setEasing(false);
    var list = glc.renderList,
        width = glc.w,
        height = glc.h,
        color = glc.color;

    // your code goes here:

	glc.styles.backgroundColor = color.rgba( 40, 40, 40, 1 );
    var nr = 300;
    var wmax = 150;
    
    for( var i=0; i<nr; i++ ){
        var wtotal = Math.sin( ( i/nr ) * Math.PI ) * wmax ;
        
        list.addRect({
            x: width/2,
            y: i + ( width-nr)/2,
            w: wtotal,
            h: 1,
            stroke: false,
            fillStyle: color.rgba( 80, 80, 80, 1 )
        });

        list.addRect({
            x: function( t ){
                var w1 = Math.sin(t*2*Math.PI) * this.wtotal;
                if( w1 > 0 ){
                	return width/2 - this.wtotal/2 + w1/2;    
                } else {
                    return width/2 + this.wtotal/2 + w1/2;
                }
            },
            y: i + ( width-nr)/2,
            w: function( t ){
            	return Math.sin(t*2*Math.PI) * this.wtotal;
            },
            h: 1,
            stroke: false,
            fillStyle: 'green',
            wtotal: wtotal,
            phase: i/nr
        });
        
        
        list.addRect({
            x: function( t ){
                var w1 = -Math.sin(t*2*Math.PI) * this.wtotal;
                if( w1 < 0 ){
                	return width/2 + this.wtotal/2 + w1/2;    
                } else {
                    return width/2 - this.wtotal/2 + w1/2;
                }
            },
            y: i + ( width-nr)/2,
            w: function( t ){
            	return -Math.sin(t*2*Math.PI) * this.wtotal;
            },
            h: 1,
            stroke: false,
            fillStyle: 'blue',
            wtotal: wtotal,
            phase: i/nr
        });


    }
    
//     var gradient = color.createLinearGradient( 0, -height/2, 0, height/2 );
//     gradient.addColorStop( 0, '#f00' );
//     gradient.addColorStop( 1, '#00f' );

//     var gradient2 = color.createLinearGradient( 0, -height/2, 0, height/2 );
//     gradient2.addColorStop( 0, '#224' );
//     gradient2.addColorStop( 0.5, '#66b' );
//     gradient2.addColorStop( 1, '#ddf' );
    

}