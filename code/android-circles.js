function onGLC(glc) {
    glc.loop();
    glc.size( 600, 600 );
    glc.setDuration( 4 );
    glc.setFPS( 25 );
    glc.setMode('single');
    glc.setEasing( false );
    var list = glc.renderList,
        width = glc.w,
        height = glc.h,
        color = glc.color;

    // your code goes here:
    glc.styles.backgroundColor = '#000';
	var colors = [
        'magenta',
        'yellow',
        'cyan'
    ];
    
    for( var i=0; i<colors.length; i++ ){

        var ir = 120 * i; //Math.random() * 360;
        
		var container = list.addContainer({
			x: width / 2,
			y: height / 2,
            rotation: [ ir, ir+360 ]
		});
		
        list.addCircle({
			x: ( Math.random() * 10 ) - 5,
			y: ( Math.random() * 10 ) - 5,
			radius: 140,
            lineWidth: 12,
            strokeStyle: colors[i],
            stroke: true,
            fill: false,
            parent: container,
            blendMode: 'lighten'
		});
	
    }
}