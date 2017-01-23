function onGLC(glc) {
    glc.loop();
    glc.size(600, 400);
    glc.setDuration(4);
    glc.setFPS(25);
    glc.setMode('single');
    glc.setEasing(false);
    var list = glc.renderList,
        width = glc.w,
        height = glc.h,
        color = glc.color;

    // your code goes here:
	glc.styles.backgroundColor = '#333';
	var nr = 600;
    var sides = 7;
    var margin = -180;
        
    for( var i=0; i<nr; i++ ){
        list.addPoly({
            x: i * ( (width+2*margin)/nr ) - margin,
            y: function(t) {
                return (height/2) + Math.cos( t*2*Math.PI ) * 10;
            },
            radius: function(t) {
                return 100 + Math.sin( t*2*Math.PI ) * 20;
            },
            sides: sides,
            fill: false,
            stroke: true,
            strokeStyle: '#efc',
            lineWidth: 0.125,
            rotation: function(t) {
                return Math.cos( t*1*Math.PI ) * (180/sides);
            },
            phase: i/nr,
        });
	
    }

}
