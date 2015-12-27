function onGLC(glc) {

     glc.loop();
     glc.size(400, 400);
     glc.setDuration(2.0);
     glc.setFPS(25);
     //glc.setMode('single');
     //glc.setEasing(false);
    var list = glc.renderList,
        width = glc.w,
        height = glc.h,
        color = glc.color;

    // your code goes here:
	
	list.addCircle({
        x:[ 100,300 ],
        y: 100,
        fillStyle:[ 'red','blue'],
        radius:[10, 50 ],
    });
    
    list.addStar({
        x: 300 ,
        y:[100,300],
        fillStyle:['blue','yellow'],
        innerRadius:[20,40 ],
        outerRadius:[20,60],
    });

    list.addHeart({
        x:[300,100],
        y:300,
        fillStyle:['purple','pink' ],
        w: [50,100], // breedte
        h: [50,100], // hoogte
    });
    
    list.addRect({
        x:100,
    	y:[300,100],
        w:[50,100],
        h:[50,100],
        fillStyle:['orange','green']
    });
     
 
}