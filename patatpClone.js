let circles = [];
// assign a colour and a sound to each letter    
const keyData = {
    q: {
        sound: new Howl({
            src: ['../../assets/original/sounds/bubbles.mp3']
        }),
        color: '#1abc9c'
    },
    w: {
        sound: new Howl({
            src: ['../../assets/original/sounds/clay.mp3']
        }),
        color: '#2ecc71'
    },
    e: {
        sound: new Howl({
            src: ['../../assets/original/sounds/confetti.mp3']
        }),
        color: '#3498db'
    },
    r: {
        sound: new Howl({
            src: ['../../assets/original/sounds/corona.mp3']
        }),
        color: '#9b59b6'
    },
        t: {
        sound: new Howl({
            src: ['../../assets/original/sounds/dotted-spiral.mp3']
        }),
        color: '#34495e'
    },
    y: {
        sound: new Howl({
            src: ['../../assets/original/sounds/flash-1.mp3']
        }),
        color: '#16a085'
    },
    u: {
        sound: new Howl({
            src: ['../../assets/original/sounds/flash-2.mp3']
        }),
        color: '#27ae60'
    },
    i: {
        sound: new Howl({
            src: ['../../assets/original/sounds/flash-3.mp3']
        }),
        color: '#2980b9'
    },
    o: {
        sound: new Howl({
            src: ['../../assets/original/sounds/glimmer.mp3']
        }),
        color: '#8e44ad'
    },
    p: {
        sound: new Howl({
            src: ['../../assets/original/sounds/moon.mp3']
        }),
        color: '#2c3e50'
    },
    a: {
        sound: new Howl({
            src: ['../../assets/original/sounds/pinwheel.mp3']
        }),
        color: '#f1c40f'
    },
    s: {
        sound: new Howl({
            src: ['../../assets/original/sounds/piston-1.mp3']
        }),
        color: '#e67e22'
    },
        d: {
        sound: new Howl({
            src: ['../../assets/original/sounds/piston-2.mp3']
        }),
        color: '#e74c3c'
    },
    f: {
        sound: new Howl({
            src: ['../../assets/original/sounds/prism-1.mp3']
        }),
        color: '#95a5a6'
    },
    g: {
        sound: new Howl({
            src: ['../../assets/original/sounds/prism-2.mp3']
        }),
        color: '#f39c12'
    },
    h: {
        sound: new Howl({
            src: ['../../assets/original/sounds/prism-3.mp3']
        }),
        color: '#d35400'
    },
    j: {
        sound: new Howl({
            src: ['../../assets/original/sounds/splits.mp3']
        }),
        color: '#1abc9c'
    },
    k: {
        sound: new Howl({
            src: ['../../assets/original/sounds/squiggle.mp3']
        }),
        color: '#2ecc71'
    },
    l: {
        sound: new Howl({
            src: ['../../assets/original/sounds/strike.mp3']
        }),
        color: '#3498db'
    },
    z: {
        sound: new Howl({
            src: ['../../assets/original/sounds/suspension.mp3']
        }),
        color: '#9b59b6'
    },
    x: {
        sound: new Howl({
            src: ['../../assets/original/sounds/timer.mp3']
        }),
        color: '#34495e'
    },
    c: {
        sound: new Howl({
            src: ['../../assets/original/sounds/ufo.mp3']
        }),
        color: '#16a085'
    },
    v: {
        sound: new Howl({
            src: ['../../assets/original/sounds/veil.mp3']
        }),
        color: '#27ae60'
    },
    b: {
        sound: new Howl({
            src: ['../../assets/original/sounds/wipe.mp3']
        }),
        color: '#2980b9'
    },
    n: {
        sound: new Howl({
            src: ['../../assets/original/sounds/zig-zag.mp3']
        }),
        color: '#8e44ad'
    },
    m: {
        sound: new Howl({
            src: ['../../assets/original/sounds/moon.mp3']
        }),
        color: '#2c3e50'
    }
}
// animate a circle and play a sound whenever a letter key is pressed
function onKeyDown(event){
    // verify that a letter key was pressed
    if(keyData[event.key]){
        // generate a random point within the viewport
        let maxPoint = new Point(view.size.width - 100, view.size.height - 100),
            randomPoint = Point.random(),
            point = maxPoint * randomPoint;
        // animate a circle whose centre is at this random point
        let newCircle = new Path.Circle(point, 200);
        // add this new circle to the circles array
        circles.push(newCircle);
        // fetch the corrsponding colour and sound for the particular key which was pressed
        newCircle.fillColor = keyData[event.key].color;
        keyData[event.key].sound.play();
    }
}

// animate the shrinking and colour change of each circle
function onFrame(){
    for(i = 0; i < circles.length; i++){
        // remove circles which have vanished from the circles array
        if(circles[i].area < 1){
            circles[i].remove(); 
            circles.splice(i, 1);
            }
        // increase the hue of each circle by one    
        circles[i].fillColor.hue += 1;
        // scale each circle to 0.9 of its original size
        circles[i].scale(0.9);
    }
}