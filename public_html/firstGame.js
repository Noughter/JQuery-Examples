var xCoord = 200;
var yCoord = 100;

var mouseX = 0;
var mouseY = 0;

var player = $("#mario");


$(document).ready(function() {
    $("#debugButton").on("click", function(e) {
        $("#debug").html("test");
    });
});


$(document).on("keyup", function(e) {
    var key_map = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        8: 'backspace',
        20: 'caps lock',
        17: 'control',
        46: 'delete',
        18: 'alt',
        13: 'enter',
        27: 'escape',
        35: 'end',
        9: 'tab'
    };
    var key = event.which;
    switch (key) {
        case 37 :
            moveLeft();
            break;
        case 39 :
            moveRight();
            break;
        case 38 :
            moveUp();
            break;
        case 40 :
            moveDown();
            break;
    }
    var key_name = key_map[key];
    if (key_name)
        alert('You pressed the ' + key_name + ' key.');

});

function mouseMoving(){
    $(document).on("mousemove", function(e){
                 mouseX = e.pageX;
                 mouseY = e.pageY;
        $("#debug").html("test");
        console.log("e.pageX: " + e.pageX + ", e.pageY: " + e.pageY); 
    });
    setInterval(function(){	
	   $("#mario").css("left",mouseX);
	   $("#mario").css("top",mouseY);
	  }, 100 );
}

function eventTester(e) {
    var str = "";
    for (var x in e) {
        str += "evt[" + x + "]=" + e[x] + "</br>";
    }
    $("#debug").html(str);
}

function moveLeft() {
    xCoord = xCoord - 15;
    $("#mario").css("left", xCoord);
    $("#mario").css("top", yCoord);
    $("#debug").html("Your coordinates are: <br />" + ycoord + "S, " + xcoord + "W");
}

function moveRight() {
    xCoord = xCoord + 15;
    $("#mario").css("left", xCoord);
    $("#mario").css("top", yCoord);
    $("#debug").html("Your coordinates are: <br />" + ycoord + "S, " + xcoord + "W");
}

function moveUp() {
    yCoord = yCoord - 15;
    $("#mario").css("left", xCoord);
    $("#mario").css("top", yCoord);
    $("#debug").html("Your coordinates are: <br />" + ycoord + "S, " + xcoord + "W");
}

function moveDown() {
    yCoord = yCoord + 15;
    $("#mario").css("left", xCoord);
    $("#mario").css("top", yCoord);
    $("#debug").html("Your coordinates are: <br />" + ycoord + "S, " + xcoord + "W");
}

function showCoords() {
    //$("#debug").html("Your coordinates are: <br />" + ycoord + "S, " + xcoord +"W");
    $("#debug").html("Your coordinates are: <br />" + e.pageY + "S, " + e.pageX + "W");
}

