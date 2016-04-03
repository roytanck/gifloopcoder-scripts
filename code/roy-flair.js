function onGLC(glc) {
    glc.loop();
    glc.size(500, 500);
    glc.setDuration(3.5);
    glc.setFPS(25);
    glc.setMode('single');
    glc.setEasing(false);
    glc.setMaxColors( 128 );
	glc.setQuality( 1 );
    var list = glc.renderList,
        width = glc.w,
        height = glc.h,
        color = glc.color;

    // your code goes here:
	glc.styles.backgroundColor = '#234';

    var nr = 21;
    var rad = 100;
    var size = 110;
    var cols = [ '#f00', '#0f0', '#00f' ];
    var phaseChange = 0.025;
    
    for( var c=0; c<cols.length; c++ ){

        for( var i=0; i<nr; i++ ){

            var container = list.addContainer({
                x: function( t ){
                    var ti = this.i + Math.cos( t*2*Math.PI ) * (i/nr);
                    return width/2 + Math.sin( (ti/nr)*2*Math.PI ) * rad;
                },
                y: function( t ){
                    var ti = this.i + Math.cos( t*2*Math.PI ) * (i/nr);
                    return height/2 - Math.cos( (ti/nr)*2*Math.PI ) * rad;
                },
                baseAngle: (i/nr) * 360 - 90,
                i: i,
                rotation: function( t ){
                    return this.baseAngle + Math.sin( t*2*Math.PI ) * 30;
                },
                phase: c * phaseChange,
            });

            list.addRay({
                x: 0,
                y: 0,
                length: size,
                parent: container,
                lineWidth: 10,
                strokeStyle: cols[c],
                blendMode: 'screen',
            });

        }
        
    }

}