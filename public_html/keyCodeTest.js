document.onkeydown = function(event){
    if(event.keyCode == 8){
        event.cancelBubble = false;  //nicht so wichtig(Inet explorer?)
        alert("Sie haben BACKSPACE gedrückt");
    }
    else if(event.keyCode==17){
        event.cancelBubble = false;
        alert("Sie Haben STRG gedrückt");        
    }
    else{
        event.cancelBubble = false;
        alert("Sie Haben"+getKeyCode(event)+"gedrückt")
    }
};

function getKeyCode(event) {
   event = event || window.event;
   return event.keyCode;
}