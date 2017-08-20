// counter code
var button = document.getElementByID('counter');
var counter = 0;

button.onclick = fucntion () {
    // Make a request to the counter endpoint
    
    // Capture the response and store it in a variable
    
    // Render the value in the correct span
    counter = counter + 1;
    var span = document.getElementByID('count');
    span.innerHTML = counter.toString();
}