function onGLC(glc) {
    glc.loop();
    glc.size(480, 480);
    glc.setDuration(3);
    glc.setFPS(30);
    glc.setMode('single');
    glc.setEasing(false);
    var list = glc.renderList,
        width = glc.w,
        height = glc.h,
        color = glc.color;

    // your code goes here:
    var margin = 80;
	var grid = 10;
    var size = ( width - 2*margin ) / (grid-1);
    var dotSize = 3;
    
    for( var x=0; x<grid; x++ ){
        for( var y=0; y<grid; y++ ){

			var positions = [];
            for( var d=0; d<4; d++ ){
                positions[d] = {
                    x: (d%2) * (size/2) - size/4,
                    y: Math.floor(d/2) * (size/2) - size/4
                }
            }
            var positions2 = positions.slice();
            positions2.sort( function() {
				return .5 - Math.random();
			});
            
            for( var d=0; d<4; d++ ){

                list.addCircle({
                    x: [
                        margin + x * size + positions[d].x,
                        margin + x * size + positions2[d].x,
                    ],
                    y: [
                        margin + y * size + positions[d].y,
                   	    margin + y * size + positions2[d].y,
                   	],
                    radius: dotSize,
                    phase: y/grid + x/grid
                });

            }
	
        }
    }
    
}