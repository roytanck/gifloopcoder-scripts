function onGLC(glc) {
    glc.loop();
    glc.size(400, 300);
    var list = glc.renderList,
        width = glc.w,
        height = glc.h,
        color = glc.color;

    var scale = 0.85;
    var size = 30

    var parent = list.addRay({
        x: width / 2,
        y: height - (height/10),
        angle: -90,
        length: size,
        lineWidth: 5
    })

    addArm( parent, size, 5, 7 );
    
    function addArm( parent, size, lw, depth ){
        if(depth < 0) return;
        var rand = -30 + Math.random() * 60;
        var rand2 = -5 + Math.random() * 10;
        var tscale = scale + (Math.random()*0.1 + 0.05 );
        var arm0 = list.addRay({
            x: size,
            y: 0,
            length: size * tscale,
            angle: [ rand-rand2, rand+rand2 ],
            parent: parent,
            lineWidth: lw * tscale,
            phase: Math.random()
        });
        addArm( arm0, size * tscale, lw * scale, depth - 1 );

        var rand = -30 + Math.random() * 60;
        var rand2 = -5 + Math.random() * 10;
        var tscale = scale + (Math.random()*0.1 + 0.05 );
        var arm1 = list.addRay({
            x: size,
            y: 0,
            length: size * tscale,
            angle: [ rand-rand2, rand+rand2 ],
            parent: parent,
            lineWidth: lw * tscale,
            phase: Math.random()
        });
        addArm( arm1, size * tscale, lw * scale, depth - 1 );
    }
}