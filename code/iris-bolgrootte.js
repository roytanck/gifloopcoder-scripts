€‹function onGLC(glc) {
    glc.loop();
    glc.size(400, 400);
    glc.setDuration(2);
    glc.setFPS(25);
    //glc.setMode('single');
    //glc.setEasing(false);
    var list = glc.renderList,
        width = glc.w,
        height = glc.h,
        color = glc.color;

    // your code goes here:
	glc.styles.backgroundColor = 'white';
    var nr = 21;
    var marge = 20;
    var tussenruimte = ( width - 2*marge ) / (nr-1);

    for( var y=0; y<nr; y++ ){

        for( var x=0; x<nr; x++ ){

            list.addCircle({
                x: marge + x*tussenruimte,
                y: marge + y*tussenruimte,
                radius: [ 4, 10 ],
                //fillStyle: ['red','blue'],
                fillStyle: color.animHSV( 160, 240, 1, 1, 0.9, 0.9 ),
                //fillStyle: color.rgba( 30,50,70,1 ),
                phase: (x+y) / (nr+nr)
                //phase: Math.random()
            });
            
        }
        
    }

}