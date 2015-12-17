function onGLC(glc) {
	glc.loop();
	glc.size( 600, 300 );
	glc.setDuration( 3 );
	glc.setFPS( 15 );
	glc.setMode( "single" );
	glc.setEasing( false );
	glc.setMaxColors( 64 );
	glc.setQuality( 1 );
	var list = glc.renderList,
		width = glc.w,
		height = glc.h,
		color = glc.color;

	// your code goes here:
	glc.styles.backgroundColor = color.rgba( 30, 50, 70, 1 );

	var marquee = [
		' ******   ***      ******       **   **      ',
		'***  ***  ***     ***  ***     **** ****     ',
		'***       ***     ***  ***     *********     ',
		'*** ****  ***     ***           *******      ',
		'***  ***  ***     ***  ***       *****       ',
		'***  ***  ***     ***  ***        ***        ',
		' ******   ******   ******          *         ',
	];

	var dist = 12;
	var columns = Math.floor( width/dist );
	var nrofFrames = marquee[0].length;
	var paddingY = ( height - marquee.length * dist ) / 2;


	for( var x=0; x<columns; x++ ){
		for( var y=0; y<marquee.length; y++ ){

			list.addCircle({
				x: dist/2 + x*dist,
				y: dist/2 + y*dist + paddingY,
				radius: dist * 0.35,
				stroke: false,
				fillStyle: 'white',
				shadowColor: function( t ){
					return getOnOff( t, this.column, this.row ) ? color.rgba( 255, 255, 150, 1 ) : color.rgba( 255, 255, 150, 0 );
				},
				shadowOffsetX: 0,
				shadowOffsetY: 0,
				shadowBlur: dist,
				globalAlpha: function( t ){
					return getOnOff( t, this.column, this.row ) ? 1 : 0.2;
				},
				column: x,
				row: y,
			});

		}
	}

	function getOnOff( t, x, y ){
		var frame = Math.round( t*nrofFrames );
		var char = marquee[ y ].charAt( ( x + frame ) % marquee[ y ].length );
		return ( char == '*' ) ? true : false;
	}

}