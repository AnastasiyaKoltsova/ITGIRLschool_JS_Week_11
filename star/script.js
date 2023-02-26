function validate(evt) {
    let theEvent = evt || window.event;
    let key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    let regex = /[0-9]|\./;
    if ( !regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}
function calculate(){
    let input1 = document.getElementById("input1").value;
    let result = Math.pow(input1, 2);
    document.getElementById("input2").value = result;
}