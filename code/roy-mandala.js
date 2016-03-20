function onGLC(glc) {
    glc.loop();
    glc.size(480, 480);
    glc.setDuration( 4 );
    glc.setFPS( 20 );
    glc.setMode('single');
    glc.setEasing(false);
    glc.setMaxColors( 32 );
	glc.setQuality( 1 );
    var list = glc.renderList,
        width = glc.w,
        height = glc.h,
        color = glc.color;

    // your code goes here:
    glc.styles.backgroundColor = '#235';
    var dist = 75;
    var nr = 3;
    var size = 75;
    var nr2 = 9;
    
    var container = list.addContainer({
		x: width / 2,
		y: height / 2,
        rotation: -45,
	});
	
    
    for( var x=0; x<nr; x++ ){
        for( var y=0; y<nr; y++ ){
            
            for( var n=1; n<nr2+1; n++ ){
            
                list.addCircle({
                    x: x * dist - ((nr-1)/2) * dist,
                    y: y * dist - ((nr-1)/2) * dist,
                    radius: ( n / nr2 ) * size,
                    fill: false,
                    stroke: true,
                    strokeStyle: '#fff',
                    lineWidth: 0.6,
                    startAngle: function( t ){
                        return -( 1 + Math.cos( t*2*Math.PI + Math.PI ) ) * 100;
                    },
                    endAngle: function( t ){
                        return ( 1 + Math.cos( t*2*Math.PI + Math.PI ) ) * 100;
                    },
                    globalAlpha: function( t ){
                        return ( 1 + Math.cos( t*2*Math.PI + Math.PI ) ) * 0.5;
                    },
                    rotation: Math.random() * 360,
                    parent: container,
                    phase: -n/nr/12,
                });

            }
        }
    }

}
