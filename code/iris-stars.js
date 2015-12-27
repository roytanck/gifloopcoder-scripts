function onGLC(glc) {
//     glc.loop();
    glc.size(400, 400);
    glc.setDuration(1.0);
    glc.setFPS(25);
    glc.setMode('single');
    glc.setEasing(false);
    var list = glc.renderList,
        width = glc.w,
        height = glc.h,
        color = glc.color;

    // your code goes here:
    glc.styles.backgroundColor = 'LightPink';
    var punten = 6;
    
    list.addStar({
		x: width / 2,
     	y: height / 2,
        fillStyle: 'orange',
        innerRadius: 50,
        outerRadius: 100,
        rotation: [ 0, 360/punten ],
        points: punten,
        stroke: true,
        strokeStyle:'red',
        lineWidth:20,
        
    });

	list.addStar({
        x:width/2,
        y:height/2,
        fillStyle: 'LightPink',
        innerRadius: 15,
        outerRadius: 30,
        rotation: [ 0, -360/punten ],
        points: punten,
        stroke: true,
        strokeStyle:'yellow',
        lineWidth:10,        
    });

}
