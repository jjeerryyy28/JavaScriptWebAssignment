document.addEventListener('keydown', function(event) {
    // This function will be called whenever a key is pressed
  
    // Get the key code and character code from the event object
    var keyCode = event.keyCode;
    var charCode = event.charCode;
  
    // Get the key name from the event object
    var keyName = event.key;
  
    // Construct the message with the key name in a span element with the green color
    var message = "You Pressed <span style='color: #5bbc7a'>" + keyName + "</span>";
  
    // Update the message box with the message and set its background color to white
    var messageBox = document.getElementById('messageBox');
    messageBox.innerHTML = message;
    messageBox.style.backgroundColor = "#fff";
    messageBox.style.color = "#333";
  
    // Update the key code with the key code
    document.getElementById('keyCode').innerHTML = keyCode;
  
  });
  