function onGLC(glc) {
    glc.loop();
    glc.size( 500, 500 );
    glc.setDuration( 3 );
    glc.setFPS( 25 );
    glc.setMode('single');
    glc.setEasing(false);
	glc.setMaxColors( 64 );
	glc.setQuality( 1 );
    var list = glc.renderList,
        width = glc.w,
        height = glc.h,
        color = glc.color;

    // your code goes here:
    glc.styles.backgroundColor = '#456';

	var grid = 4;
    var gridSize = 100;
	var maxSize = Math.sqrt( Math.pow( gridSize/2, 2 ) + Math.pow( gridSize/2, 2 ) );
	var sizeFactor = (gridSize/2) / maxSize;
    
    var container = list.addContainer({
		x: width / 2,
		y: height / 2,
        rotation: 21, 
	});
	
    
    for( var x=-grid; x<=grid; x++ ){
        for( var y=-2*grid; y<=2*grid; y++ ){
            var oddeven = y % 2;
            list.addCircle({
                x: x * gridSize + ( oddeven ? -gridSize/4 : gridSize/4 ),
                y: y * gridSize/2,
                stroke: false,
                fillStyle: oddeven ? '#6af' : '#fd6',
                radius: function( t ){
                	return ( maxSize * 0.5 ) + Math.sin( t*2*Math.PI ) * ( maxSize * (sizeFactor-0.5) );
            	},
                parent: container,
                oddeven: oddeven,
                phase: oddeven * 0.5,
            });
        }
    }
    
}
