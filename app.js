// get the reference of the text box.
// attach the keypress event to the text box
// identify the key pressed.
// if valid allow the user else restrict.

var txtSSN = document.getElementById("txtSSN");
txtSSN.addEventListener("keypress", numbersOnly);

function numbersOnly(evt) {
    console.log(evt);
    if (evt.keyCode >= 48 && evt.keyCode <= 57) {

    } else {
        evt.preventDefault();
    }
}