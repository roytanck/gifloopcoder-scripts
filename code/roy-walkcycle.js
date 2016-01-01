function onGLC(glc) {
	//glc.loop();
    glc.size(400, 400);
    glc.setDuration(4.0);
    glc.setFPS(25);
    //glc.setMode('single');
    //glc.setEasing(false);
    var list = glc.renderList,
        width = glc.w,
        height = glc.h,
        color = glc.color;

    // your code goes here:
    glc.styles.backgroundColor = '#444';
    
    var body = list.addRay({
        x: width/2,
        y: 250,
        length: 80,
        strokeStyle: 'white',
        angle: -80
    });
    
    var upperLeg = list.addRay({
        x: 0,//width/2,
        y: 0,//[ 260, 250 ],
        angle: [ 130, 200 ],//[ 70, 110 ],
        length: 50,
        parent: body,
        phase: 0,
        strokeStyle: 'white'
    });

    var lowerLeg = list.addRay({
        x: 50,
        y: 0,
        angle: [ 0, 30 ],
        length: 50,
        parent: upperLeg,
        phase: 0,
        strokeStyle: 'white'
    });

    var upperLeg = list.addRay({
        x: 0,//width/2,
        y: 0,//[ 260, 250 ],
        angle: [ 130, 200 ],//[ 70, 110 ],
        length: 50,
        parent: body,
        phase: 0.5,
        strokeStyle: 'white'
    });

    var lowerLeg = list.addRay({
        x: 50,
        y: 0,
        angle: [ 0, 30 ],
        length: 50,
        parent: upperLeg,
        phase: 0.5,
        strokeStyle: 'white'
    });

    var upperArm = list.addRay({
        x: 80,
        y: 0,
        angle: [ 130, 210 ],
        length: 45,
        parent: body,
        phase: 0,
        strokeStyle: 'white'
    });

    var lowerArm = list.addRay({
        x: 45,
        y: 0,
        angle: [ -40, 0 ],
        length: 45,
        parent: upperArm,
        phase: 0,
        strokeStyle: 'white'
    });

}