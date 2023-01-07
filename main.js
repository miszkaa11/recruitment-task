
// Gear Animation

let type = 1, 
    radius = '19em',
    start = -90,
    $elements = $('li'),
    numberOfElements = (type === 1) ?  $elements.length : $elements.length - 1,
    slice = 360 * type / numberOfElements;

$elements.each(function(i) {
    let $self = $(this),
        rotate = slice * i + start,
        rotateReverse = rotate * -1;
    
    $self.css({
        'transform': 'rotate(' + rotate + 'deg) translate(' + radius + ') rotate(' + rotateReverse + 'deg)'
    });
});

// AOS

AOS.init();