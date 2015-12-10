function onGLC(glc) {
	glc.loop();
	glc.size( 400, 400 );
	glc.setDuration( 4 );
	glc.setFPS( 25 );
	glc.setMode( "single" );
	glc.setEasing( false );
	glc.setMaxColors( 256 );
	glc.setQuality( 10 );
	var list = glc.renderList,
		width = glc.w,
		height = glc.h,
		color = glc.color;

	// your code goes here:
	glc.styles.backgroundColor = color.rgba( 255, 255, 255, 1 );

	var cols = [ '#d00', '#0d0', '#00d' ];
	var clusters = 5;
	var clusterRadius = 280;
	var nr = cols.length;

	for( var c=0; c<clusters; c++ ){
		var bx = width/2 + Math.sin( (c/clusters)*2*Math.PI ) * clusterRadius;
		var by = height/2 + -Math.cos( (c/clusters)*2*Math.PI ) * clusterRadius;

		for( var i=0; i<nr; i++ ){

			list.addCircle({
				x: function( t ){
					return this.bx + Math.sin( (t+this.nr/nr)*2*Math.PI ) * ( Math.sin(t*2*Math.PI) * this.r );
				},
				y: function( t ){
					return this.by - Math.cos( (t+this.nr/nr)*2*Math.PI ) * ( Math.sin(t*2*Math.PI) * this.r );
				},
				radius: 200,
				stroke: false,
				fill: true,
				fillStyle: cols[ i ],
				blendMode: 'darker',
				nr: i,
				r: 60,
				bx: bx,
				by: by,
				phase: c/clusters
			});

		}

	}

}