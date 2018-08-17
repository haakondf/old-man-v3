$(document).ready(function(){
    $('#background').hide();
    $('#player').hide();

    $('#playbutton').click(function(){
        $('#background').show();
        $('#player').show();
        $('#welcome').hide();
    
        function gameLoop(){
            setTimeout(gameLoop, 50);
            drawMissiles();
            moveMissiles();
            drawEnemies();
            moveEnemies();
            collisionDetection()
        }
        gameLoop();

    })
    
    
    var player = {
        top: 700,
    left: 550
};

var missiles = [];

var enemies = [
    { left: 200, top: 100 },
    { left: 300, top: 100 },
    { left: 400, top: 100 },
    { left: 500, top: 100 },
    { left: 600, top: 100 },
    { left: 700, top: 100 },
    { left: 800, top: 100 },
    { left: 900, top: 100 },
    { left: 200, top: 175 },
    { left: 300, top: 175 },
    { left: 400, top: 175 },
    { left: 500, top: 175 },
    { left: 600, top: 175 },
    { left: 700, top: 175 },
    { left: 800, top: 175 },
    { left: 900, top: 175 }
    
];

document.onkeydown = function(e) {

    if (e.keyCode === 37) {
        console.log("left");
        player.left = player.left -10;
        movePlayer()
    }
    else if (e.keyCode === 39){
        console.log("right");
        player.left = player.left + 10;
        movePlayer()
    }
    else if (e.keyCode === 32) {
        console.log("fire");
        missiles.push({
            left: player.left + 20,
            top: player.top -20
        })
        drawMissiles();
        
    }
}

function movePlayer () {
    document.getElementById('player').style.left = player.left + "px";
}

function drawMissiles(){
    document.getElementById('missiles').innerHTML = "";
    for( var missile = 0; missile < missiles.length; missile = missile + 1){
        document.getElementById('missiles').innerHTML += // += means appending
        `<div class="missile" style="left:${missiles[missile].left}px;
        top:${missiles[missile].top}px"></div>`; //use append instead maybe
        
    }
}

function moveMissiles() {
    for( var missile = 0; missile < missiles.length; missile = missile + 1 ){
        missiles[missile].top = missiles[missile].top -10;
    }
}

function drawEnemies() {
    document.getElementById('enemies').innerHTML = "";
    for( var cat = 0; cat < enemies.length; cat = cat + 1){
        document.getElementById('enemies').innerHTML += // += means appending
        `<div class="cat" style="left:${enemies[cat].left}px;
        top:${enemies[cat].top}px"></div>`; //use append instead maybe
        
    }
}

function moveEnemies () {
    for ( var cat = 0; cat < enemies.length; cat = cat + 1) {
        enemies[cat].top = enemies[cat].top + 3;
    }
}

function collisionDetection() {
    for (var cat = 0; cat < enemies.length; cat = cat +1) {
        for ( var missile = 0; missile < missiles.length; missile = missile +1) {
            // console.log("enemies[cat].top",enemies[cat].top);
                      
            if (
                (missiles[missile].top <= enemies[cat].top + 50) &&
                (missiles[missile].top >= enemies[cat].top) &&
                (missiles[missile].left >= enemies[cat].left) &&
                (missiles[missile].left <= enemies[cat].left + 50)
                
            ){
                console.log("HIT =========");
                
                    enemies.splice(cat, 1);
                    missiles.splice(missile, 1);
                    
                }
                
            }
        }
    }
    
})
    
