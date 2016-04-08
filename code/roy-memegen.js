function onGLC(glc) {
    glc.loop();
    glc.size( 600, 600 );
    glc.setDuration( 3 );
    glc.setFPS( 25 );
    glc.setMode( 'single' );
    glc.setEasing( false );
    var list = glc.renderList,
        width = glc.w,
        height = glc.h,
        color = glc.color;

    // your code goes here:
    glc.styles.backgroundColor = '#333';
    glc.context.imageSmoothingEnabled = true;
    
    parts = [
        [ 'Just because', 'When', 'Sometimes', 'If', 'Whenever', 'In case' ],
        [ 'life', 'your best friend', 'an orange', 'the police', 'the internet', 'your enemy', 'your family', 'your boss', 'someone', 'your mom' ],
        [ 'looks like', 'hands you', 'isn\'t', 'needs', 'wants', 'makes you think of', 'asks you for' ],
        [ 'a ride,', 'lemons,', 'monkeys,', 'something wonderful,', 'a banana,', 'happiness,', 'a kiss,', 'your help,', 'the space shuttle,', 'the remote,' ],
        [ 'always', 'never', 'you should', 'remember to', 'you shouldn\'t', 'it\'s okay to' ],
        [ 'cry.', 'party.', 'be happy.', 'say no.', 'kiss.', 'do nothing.', 'oblige.', 'give up', 'make lemonade.' ]
    ];
    
    words = [];
    for( var i=0; i<parts.length; i++ ){
        words.push( parts[i][ Math.floor( Math.random() * parts[i].length ) ] );
    }
    
    var lineHeight = 50;
    var fontSize = 40;
    var yOffset = ( height - ( ( words.length - 1 ) * lineHeight ) ) / 2;
    
    for( var i=0; i<words.length; i++ ){
        
        var container = list.addContainer({
            //x: width/2,
            y: yOffset + i*lineHeight,
            x: function( t ){
                return ( width/2 ) + Math.cos( t*2*Math.PI ) * 20;
            },
//             scaleX : 1,
//             scaleY: function( t ){
//                 return Math.cos( t*2*Math.PI );
//             },
            phase: 1 - ( i / words.length )/5,
        });
	
        
        list.addText({
            x: 0,
            y: 0,
            text: words[i],
			fontSize: fontSize,
			fontWeight: "bold",
			fontFamily: '"Open Sans", sans-serif',
			fontStyle: 'normal',
            fillStyle: 'white',
            stroke: true,
            strokeStyle: '#fff',
            lineWidth: 1,
            parent: container,
        });
        
    }

}
