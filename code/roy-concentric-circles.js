function onGLC(glc) {
	glc.loop();
	glc.size( 400, 400 );
	glc.setDuration( 4 );
	glc.setFPS( 30 );
	glc.setMode('single');
	glc.setEasing( false );
	glc.setMaxColors( 8 );
	glc.setQuality( 10 );
	var list = glc.renderList,
		width = glc.w,
		height = glc.h,
		color = glc.color;

	// your code goes here:
	glc.styles.backgroundColor = '#fff';
	var nr = 9;
	var sources = [];
	var baseSize = 200;
	var steps = 17;
	var sizeStep = 11.5;
	var cols = [ '#eef6ff', '#136' ];

	for( var i=0; i<nr; i++ ){
		var src = [];
		src['x'] = 50 + i%3 * 150;
		src['y'] = 50 + Math.floor(i/3) * 150;
		src['r'] = 20 + Math.random() * 40;
		src['d'] = Math.random() < 0.5 ? 1 : -1;
		sources.push( src );
	}
	
	for( var i=0; i<steps; i++ ){
		for( var s=0; s<sources.length; s++ ){
			
			list.addCircle({
				x: function( t ){
					return this.xpos + this.dir * Math.sin( t*2*Math.PI ) * this.rad;
				},
				y: function( t ){
					return this.ypos - Math.cos( t*2*Math.PI ) * this.rad;
				},
				xpos: sources[s]['x'],
				ypos: sources[s]['y'],
				rad: sources[s]['r'],
				dir: sources[s]['d'],
				radius: baseSize - ( i * sizeStep ),
				stroke: false,
				fillStyle: cols[ i%cols.length ],
				phase: s/nr,
			});
	
		}
	}
}