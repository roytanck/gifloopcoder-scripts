function onGLC(glc) {
    glc.loop();
    glc.size( 500, 500 );
    glc.setDuration( 5 );
    glc.setFPS( 25 );
    glc.setMode('single');
    glc.setEasing(false);
    var list = glc.renderList,
        width = glc.w,
        height = glc.h,
        color = glc.color;

    // your code goes here:
	var grid = 5;
    var gridSize = 40;
	var maxSize = Math.sqrt( Math.pow( gridSize/2, 2 ) + Math.pow( gridSize/2, 2 ) );

    var container = list.addContainer({
		x: width / 2,
		y: height / 2
	});
	
    
    for( var x=-grid; x<=grid; x++ ){
        for( var y=-grid; y<=grid; y++ ){
            list.addCircle({
                x: x * gridSize,
                y: y * gridSize,
                radius: 10,
                parent: container,
            });
        }
    }
    
}
