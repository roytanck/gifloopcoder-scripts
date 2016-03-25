function onGLC(glc) {
    glc.loop();
    glc.size( 460, 460);
    glc.setDuration(2);
    glc.setFPS(25);
    glc.setMode('single');
    glc.setEasing(false);
    glc.setMaxColors(64);
    glc.setQuality( 1 );
    var list = glc.renderList,
        width = glc.w,
        height = glc.h,
        color = glc.color;

    // your code goes here:
	glc.styles.backgroundColor = '#df6';
	var nr = 11;
    var rad = 110;
    var sizeFactor = 0.55;
    
    for( var i=0; i<nr; i++ ){
        list.addImage({
            x: function( t ){
                return (width/2) + ( Math.sin( ( (this.i/nr) + (t/nr) )*2*Math.PI ) * rad );
            },
            y: function( t ){
                return (height/2) - ( Math.cos( ( (this.i/nr) + (t/nr) )*2*Math.PI ) * rad );
            },
            url: "file:///C:/Users/Roy/Desktop/glc-windows/sprite.png",
            h: 208 * sizeFactor,
            w: 183 * sizeFactor,
            rotation: [ i*(360/nr), (i+1)*(360/nr) + 360],
            shadowColor: "rgba(0, 0, 0, 0.3)",
            shadowOffsetX: 5,
            shadowOffsetY: 5,
            shadowBlur: 10,
            i: i,
            blendMode: 'darken',
        });
        
    }
	

}
